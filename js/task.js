// ------------1-----------
// При натисканні на кнопку "SHOW ME", потрібно в консоль
// вивести значення, яке будемо вводити в інпут.


// const button = document.querySelector('#alertButton');
// const input = document.querySelector('#alertInput');

// button.addEventListener('click', evt => {
//     console.log(input.value);
// })

// console.dir(input);

// ------------2-----------
// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".


// const button = document.querySelector('#passwordButton');
// const input = document.querySelector('#passwordInput');
// button.addEventListener('click', evt => {
//     if (input.type === 'text') {
//         input.type = 'password';
//         button.textContent = 'Приховати'
//     } else {
//         input.type = 'text';
//         button.textContent = 'Показати'
//     }
// })
// console.log(input);



// ------------3-----------
// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const decrease = document.querySelector('#decrease');
// const increase = document.querySelector('#increase');
// const box = document.querySelector('#box');

// increase.addEventListener('click', evt => {
//     box.style.width = `${box.offsetWidth + 10}px`;
//     box.style.height = `${box.offsetHeight + 10}px`;

// })

// decrease.addEventListener('click', evt => {
//     box.style.width = `${box.offsetWidth - 10}px`;
//     box.style.height = `${box.offsetHeight - 10}px`;

// })

// console.dir(box)


// ------------4-----------
// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// const list = document.querySelector('.list')
// const listItem = document.querySelectorAll('.listItem')
// const button = document.querySelector('#double')

// button.addEventListener('click', (evt) => {
//     listItem.forEach((item) =>
//         item.textContent = item.textContent * 2)
//     })

// console.log(listItem)

// ------------5-----------
// При кліку на кнопку "Filter" потрібно видалити з
// списку позначені елементи.

// const checkboxForm = document.querySelector('.checkboxForm');
// const checkboxWrapper = document.querySelectorAll('checkboxWrapper');
// const input = document.querySelector('#checkbox1')
// const button = document.querySelector('button');
// console.dir(input)

// checkboxForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const filterList = [...checkboxWrapper].filter((el) => el.lastElementChild.checked)
// filterList.forEach((el) => el.remove());
// });

// ------------6-----------
// Наведено список людей. Зроби можливість фільтрації (пошуку)
//  за ім'ям або за прізвищем.

// const input = document.querySelector('.contactsFilter');
// const contact = document.querySelectorAll('.contact');
// const contacts = document.querySelector('.contacts');

// input.addEventListener('input', e => {
//     const value = input.value.trim().toLowerCase();
//     console.log(value);
//     const result = [...contact].filter((el) => el.textContent.toLowerCase().includes(value));
//     contacts.innerHTML = '';
//     contacts.append(...result)
// })

// ------------7-----------
// Є масив об'єктів з популярними фільмами і форма пошуку за назвою фільму.
// 1. Зроби так, щоб при першому завантаженні сторінки користувач
// бачив весь перелік фільмів (назву, рік виробництва, рейтинг і країну
// виробник).
// Для рендеру розмітки використовуємо шаблонні рядки та метод
// insertAdjacentHTML.
// 2. Реалізуй пошук потрібного фільму за назвою. При кліку на кнопку
// "Пошук" у
// списку залишаються тільки ті фільми, котрі мають повне або часткове
// співпадіння
// за назвою фільму.

// const popularMovies = [
//   {
//     title: "Avengers: Endgame",
//     year: 2019,
//     rating: 8.4,
//     country: "USA"
//   },
//   {
//     title: "Parasite",
//     year: 2019,
//     rating: 8.6,
//     country: "South Korea"
//   },
// {
//     title: "Joker",
//     year: 2019,
//     rating: 8.5,
//     country: "USA"
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     year: 2018,
//     rating: 8.4,
//     country: "USA"
//   },
// {
//     title: "Joker",
//     year: 2019,
//     rating: 8.5,
//     country: "USA"
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     year: 2018,
//     rating: 8.4,
//     country: "USA"
//   },
// {
//     title: "Black Panther",
//     year: 2018,
//     rating: 7.3,
//     country: "USA"
//   },
//   {
//     title: "Mad Max: Fury Road",
//     year: 2015,
//     rating: 8.1,
//     country: "Australia"
//   }
// ];


// const form = document.querySelector("#searchForm");
// const movieList = document.querySelector('#movieList');

// function createMarkup(arr) {
//     const markup = arr.map((el) => `
//             <li>
//       <p>Назва: ${el.title}</p>
//       <p>Рік виробництва:${el.year} </p>
//       <p>Рейтинг:${el.rating} </p>
//       <p>Країна виробник:${el.country} </p>
//     </li>
//     `).join("");
//     movieList.insertAdjacentHTML("beforeend", markup);
// }

// createMarkup(popularMovies);

// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const value = evt.currentTarget.searchInput.value.trim().toUpperCase();
//     console.log(value)
//     const filteredArray = popularMovies.filter((item) => item.title.toUpperCase().includes(value));
//     movieList.innerHTML = "";
//     createMarkup(filteredArray)
// })

// ------------8-----------
// Є форма для замовлення продуктів. Вона містить перелік  продуктів,
// кожен з яких має власний чекбокс та ціну яка зберігається
// у властивості value. Користувач може вибрати бажані продукти,
// після натискання кнопки "Додати у кошик" потрібно вивести суму
// замовлення в спан з ідентифікатором "totalAmount".

// const form = document.querySelector("#orderForm");
// const product = document.querySelectorAll(".product-checkbox");
// const totalAmount = document.querySelector("#totalAmount");

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const totalSum = [...product]
//         .filter((item) => item.checked)
//         .reduce((total, el) => {
//             total += Number(el.value);
//             return total;
//         }, 0);
//     totalAmount.textContent = totalSum;
// })
