const main = document.querySelector('.container');
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const pass2 = document.querySelector('#pass2');
const toasts = document.querySelector('#toasts');

const errMessage = [
    'Введені дані не дійсні', 'Перевірте заповнені поля', 'Вкажіть реальні дані', 'Пам\'ятайте про статтю за дачу хибних свідчень',
    'Схоже, ви помилилися при введенні', 'Дотримуйтесь грамотності у заповненні полів', 'Виникла помилка у реєстрації',
    'Наш спеціаліст служить у ЗСУ', 'З вами зв\'яжуться після закінчення війни'
]

const goodMessage = [
    'Вам сьогодні посміхнеться успіх', 'Прагніть успіху і виглядайте так, ніби ви його вже досягли', 'Кожному з нас дається стільки блага, скільки він сам дав іншим',
    'Успіх прийде звідки не чекали', 'Кожен новий досвід приносить нові можливості', 'Ваша скарбничка приємних спогадів незабаром поповниться новими',
    'Гроші зроблять вас багатим. Багатство та щастя – різні речі', 'Навколишній світ може вас дивувати, якщо ви цього хочете.',
    'Війна закінчиться і всі рашисти дізнаються правду',
    'Якщо полюбили троянду, вам доведеться любити і її шипи',
    'Давайте помолимося за бійців ЗСУ'
]

//Функция тостов
function createToast(fun){
    const block = document.createElement("div")
    block.classList.add('toast');
    block.innerText = fun;
    toasts.append(block);
    setTimeout(function (){
        block.remove()
    }, 3000)
}

function getErrorMassage(){
    return errMessage [ Math.floor (Math.random()*errMessage.length) ]
}

function getGoodMassage(){
    return goodMessage [ Math.floor (Math.random()*goodMessage.length) ]
}

// Функция ошибки
function showError(input, message){
    const formControl = input.parentElement;
    formControl.classList.remove('success');
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Функция валидации
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

// Проверка Email
function isValideEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase())
}



form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(username.value === ''){
        showError(username, 'Вы ввели невероне имя')
    }else if (username.value.length < 3){
        showError(username, 'Слишком короткое имя')
    } else {
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Вы ввели неверные данные почты')
    }else if(!isValideEmail(email.value)){
        showError(email, 'Введенный адрес не действителен')
    } else {
        showSuccess(email);
    }

    if(pass.value === ''){
        showError(pass, 'Ошибочные данные пароля')
    }else if(pass.value.length < 8){
        showError(pass, 'Слишком короткий пароль')
    } else {
        showSuccess(pass);
    }

    if(pass2.value === ''){
        showError(pass2, 'Данные пароля не совпадают')
    }else if(pass2.value.length < 8){
        showError(pass2, 'Слишком короткий пароль')
    }else if(pass2.value !== pass.value){
        showError(pass, 'Пароли не совпадают. Проверьте правильность ввода пароля')
        showError(pass2, 'Пароли не совпадают. Проверьте правильность ввода пароля')
    } else {
        showSuccess(pass2);
    }

    if(username.value === '' || username.value.length < 3 || email.value === '' || !isValideEmail(email.value) ||
        pass.value === '' || pass.value.length < 8 || pass2.value === '' || pass2.value.length < 8 || pass2.value !== pass.value){
        createToast(getErrorMassage())
        main.classList.remove('active')
    }else {
        createToast(getGoodMassage())
        main.classList.add('active')
    }
})