let city = document.querySelector('#city');
let country = document.querySelector('#country');

let info = ['Це моє місто', 'Люблю це місто', 'Як тебе не любити - Київ мій', 'Моє місто переможе',
    "З цим містом пов'язано багато"]

let ukraine = ['Київ', 'Львів', 'Харків', 'Дніпро', 'Одеса', 'Миколаїв',
    'Херсон', 'Запоріжжя', 'Вінниця', 'Суми', 'інше місто'];

let poland = ['Варшава', 'Краків', 'Лодзь', 'Вроцлав', 'Познань', 'Гданськ',
    'Люблін', 'інше місто'];

let germany = ['Берлін', 'Гамбург', 'Мюнхен', 'Кельн', 'Франкфурт-на-Майні', 'Штутгарт',
    'Дюсельдорф', 'Дортмунд', 'Лейпциг', 'Дрезден', 'Ганновер', 'інше місто'];

let usa = ['Вашингтон', 'Нью Йорк', 'Флорида', 'Мічіган', 'Міннесота', 'Колорадо',
    'Алабама', 'Нью Джерсі', 'Юта', 'Невада', 'інший штат'];

let lithuania = ['Вільнюс', 'Каунас', 'Клайпеда', 'Шяуляй', 'Паневежис', 'Алітус',
    'Маріямполе', 'інше місто'];

let latvia = ['Рига', 'Юрмала', 'Лієпая', 'Єлгава', 'Даугавпілс', 'Вентспілс',
    'Резекне', 'інше місто'];

let estonia = ['Таллінн', 'Нарва', 'Тарту', 'Пярну', 'Кохтла-Ярве', 'Вільянді',
    'Маарду', 'інше місто'];

let canada = ['Торонто', 'Монреаль', 'Калгарі', 'Оттава', 'Едмонтон', 'Ванкувер',
    'Квебек', 'Брамптон', 'Галіфакс', 'Реджайна', 'Берлінгтон', 'інше місто'];

let france = ['Париж', 'Марсель', 'Ліон', 'Тулуза', 'Ніцца', 'Страсбург',
    'Бордо', 'Лілль', 'Сент-Етьєн', 'Шампіньї-сюр-Марн', 'Кан', 'інше місто'];

let other = ['Амстердам', 'Афіни', 'Відень', 'Лондон', 'Копенгаген', 'Рим',
    'Лісабон', 'Гельсінкі', 'Прага', 'Абу-Даби', 'Доха','Ереван', 'Иерусалим', 'Пекин', 'Токио', 'Каир','Делі (Нью-Делі)', 'інше місто'];

country.addEventListener('change', function(){
    let getValue = +this.value;

    while (city.firstChild){
        city.removeChild(city.firstChild)
    }

    function getInfo(){
        return info [ Math.floor (Math.random()*info.length) ]
    }

    function createOption(item){
        const option = document.createElement('option');
        option.innerText += item;
        city.appendChild(option);
    }

    if(getValue === 0){
        info.forEach(function (){
            const option = document.createElement('option');
            option.innerText = getInfo();
            city.appendChild(option);
        })
    }


    if(getValue === 1){
        ukraine.forEach(function (item){
            createOption(item);
        })
    }


    if(getValue === 2){
        poland.forEach(function (item){
            createOption(item);
        })
    }

    if(getValue === 3){
        germany.forEach(function (item){
            createOption(item);
        })
    }

    if(getValue === 4){
        usa.forEach(function (item){
            createOption(item);
        })
    }

    if(getValue === 5){
        lithuania.forEach(function (item){
            createOption(item);
        })
    }

    if(getValue === 6){
        latvia.forEach(function (item){
            createOption(item);
        })
    }

    if(getValue === 7){
        estonia.forEach(function (item){
            createOption(item);
        })
    }

    if(getValue === 8){
        canada.forEach(function (item){
            createOption(item);
        })
    }

    if(getValue === 9){
        france.forEach(function (item){
            createOption(item);
        })
    }

    if(getValue === 10){
        other.forEach(function (item){
            createOption(item);
        })
    }


});
