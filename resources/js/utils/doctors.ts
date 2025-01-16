import { Doctors, DoctorsFilter } from '@/types/doctors';

export const filterDoctors = (doctors: Doctors, filter: DoctorsFilter): Doctors => {
  doctors = doctors.filter((doctor) => (
    doctor.name.toLowerCase().includes(filter.searchKeyword.toLowerCase())
  ));
  doctors = doctors.filter((doctor) => (
    doctor.name.toLowerCase().includes(filter.name.query?.toLowerCase() || '')
    && doctor.position.toLowerCase().includes(filter.position.query?.toLowerCase() || '')
    && doctor.specialization.toLowerCase().includes(filter.specialization.query?.toLowerCase() || '')
    && doctor.experience.toLowerCase().includes(filter.experience.query?.toLowerCase() || '')
  ));

  if (filter.orderBy) {
    type IndexType =
      'name' |
      'position' |
      'specialization' |
      'experience';

    doctors = doctors.sort((a, b) => {
      if (filter.orderType === 'asc') {
        return a[filter.orderBy as IndexType] > b[filter.orderBy as IndexType] ? 1 : -1;
      } else if (filter.orderType === 'desc') {
        return a[filter.orderBy as IndexType] < b[filter.orderBy as IndexType] ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  return doctors;
};
