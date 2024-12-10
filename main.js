document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Отменяем стандартное поведение отправки формы

        // Получаем значения полей формы
        const email = document.getElementById('inputEmail4').value;
        const fullName = document.getElementById('inputPassword4').value;
        const city = document.getElementById('inputCity').value;
        const address = document.getElementById('inputAddress2').value;
        const specialty = document.getElementById('inputState').value;
        const agreement = document.getElementById('gridCheck').checked;

        // Проверка на заполнение всех полей
        if (email && fullName && city && address && specialty && agreement) {
            // Если все поля заполнены, выводим алерт и данные в консоль
            alert('Заявка успешно отправлена!');
            console.log('Электронная почта:', email);
            console.log('ФИО:', fullName);
            console.log('Город:', city);
            console.log('Адрес проживания:', address);
            console.log('Специальность:', specialty);
            console.log('Согласие на обработку данных:', agreement);

            // Переадресация на главную страницу
            window.location.href = 'index.html'; // Замените 'index.html' на путь к вашей главной странице
        } else {
            // Если не все поля заполнены, выводим предупреждение
            alert('Пожалуйста, заполните все поля!');
        }
    });
});
