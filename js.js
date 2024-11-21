// document.addEventListener("DOMContentLoaded", () => {
//     const spans = document.querySelectorAll(".text-div span");
//     let currentIndex = 0;

//     function showNextSpan() {
//         // Убираем все классы
//         spans.forEach(span => {
//             span.classList.remove("visible", "hidden", "appearing");
//         });

//         // Добавляем класс appearing (начинает снизу)
//         spans[currentIndex].classList.add("appearing");

//         // После небольшой задержки добавляем класс visible (появляется снизу)
//         setTimeout(() => {
//             spans[currentIndex].classList.add("visible");
//         }, 50); // Задержка, чтобы анимация начала работать

//         // Задержка перед исчезновением текста (оставляем текст видимым дольше)
//         setTimeout(() => {
//             spans[currentIndex].classList.add("hidden");
//         }, 5000); // Увеличиваем задержку на 5 секунд

//         // Переходим к следующему спану
//         currentIndex = (currentIndex + 1) % spans.length;
//     }

//     // Показываем первый спан сразу
//     showNextSpan();

//     // Затем показываем следующий спан каждые 6 секунд (5 секунд отображение + 1 секунда анимация)
//     setInterval(showNextSpan, 6000);
// });
