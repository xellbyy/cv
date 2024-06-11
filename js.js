/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Согласно "Циклической модели" в космологи, из-за бесконечного расширения Вселенной, мы проживаем нашу жизнь бесконечное количество раз, значит я буду бесконечное количество раз делать эту кнопку, а ты бесконечное количество раз её нажимать.')
})