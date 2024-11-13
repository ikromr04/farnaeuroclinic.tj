import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { ru } from 'intl-tel-input/i18n';

const input = document.querySelector('[name="phone"]');

if (input) {
  const iti = intlTelInput(input, {
    i18n: ru,
    initialCountry: 'tj',
    separateDialCode: true,
  });

  input.addEventListener('input', () => {
    console.log(iti.getSelectedCountryData());
  })
}