//
function description(task_number, task_number_descr) {
    let main = document.getElementById("main");
    let p1 = document.createElement('p');
    p1.textContent =` *** ${task_number} *** ` ;
    let p2 = document.createElement('p');
    p2.textContent = `${task_number_descr}`;
    main.append(p1, p2);
    let temp = "task"+ (task_number + 1);
    let taskX = document.getElementById(`${temp}`);
main.insertBefore(p1, taskX);
main.insertBefore(p2, taskX);
}
//

//1
let task1_descr = "Створити сторінку на якій будемо відображати базовий текст в span('Очікую на ввід даних'). При натисканні Alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. Далі коли ви натисните Shift + S дані збережуться і знов будуть відображатись як span. ///Тут є бага якщо вводити текст і знову нажати Alt + A!!!";
description(1, task1_descr);

hard_string = "Очікую на ввід даних...";

let hard_span = document.createElement('span');
hard_span.textContent = hard_string;
hard_span.classList.add('red-text');

let input = document.createElement('input');
let task2 = document.getElementById('task2');
main.insertBefore(hard_span, task2)


document.addEventListener('keydown', function(e){
    if (e.code == 'KeyA' && e.altKey ) {
        console.log("change");
        let temp = hard_span.textContent;
        hard_span.remove();
        input.value = temp;
        let task2 = document.getElementById('task2');
        main.insertBefore(input, task2);
    }
});

document.addEventListener('keydown', function(e){
    if (e.code == 'KeyS' && e.shiftKey ) {
        document.addEventListener.remove;
        console.log("saved");
        let temp = input.value;
        input.remove();
        hard_span.textContent = temp;
        let task2 = document.getElementById('task2');
        main.insertBefore(hard_span, task2);
    }
});


//2
let task2_descr = "Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.";
description(2, task2_descr);

window.addEventListener('resize', myResizeFunction);

function myResizeFunction () {
    if (innerWidth < 600) {
        console.log("Desctop version");
    } else {
        console.log("Mobile version")
    }
}


//3
let task3_descr = "Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено."
description(3, task3_descr);

let newInput = document.createElement('input');
let task4 = document.getElementById('task4');

main.insertBefore(newInput, task4);

newInput.addEventListener('input', inputChangeFunction);

function inputChangeFunction() {
    console.log(newInput.value);
}



//4
let task4_descr = "При натисканні на кнопку альт + o виводити модальне вікно на екран, альт + с - закривати."
description(4, task4_descr);

let my_modal = document.getElementById('my-modal');

document.addEventListener('keydown', function(e) {
    if (e.code == 'KeyO' && e.altKey) {
        my_modal.style.display = "block";
    };
});

document.addEventListener('keydown', function(e) {
  if (e.code == 'KeyC' && e.altKey) {
    my_modal.style.display = "none";
  };
});



//5
let task5_descr = "Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити."
description(5, task5_descr);
