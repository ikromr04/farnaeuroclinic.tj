import React from 'react';

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="flex items-center min-h-screen">
      <div className="container flex flex-col items-center my-8">
        <img
          className="flex max-w-[400px] aspect-[600/400] mb-6"
          src="/images/404.svg"
          width={600}
          height={400}
          alt="Not found status code"
        />

        <h1 className="title mb-4">Упс! Страница не найдена :(</h1>

        <p className="max-w-[580px] text-center mb-8">
          К сожалению, страница, которую вы ищете, не существует. Если вы уверены, что произошла ошибка, то сообщите своему администратору или дайте нам знать.
        </p>

        <a
          className="flex items-center gap-x-2 font-medium h-8 rounded-md px-4 transition-all duration-300 bg-primary text-white text-sm shadow lg:hover:bg-blue-600 lg:hover:shadow-none"
          href="/"
        >
          Вернуться на главную страницу
        </a>
      </div>
    </main>
  );
}
