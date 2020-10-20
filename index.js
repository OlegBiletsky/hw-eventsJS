/*1.
Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних").
При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати.
Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 
*/
hard_string = "Очікую на ввід даних...";

let hard_span = document.createElement('span');
hard_span.textContent = hard_string;

let input = document.createElement('input');

let main = document.getElementById("main");
main.append(hard_span);

// text_flag = ["Щоб змінити цей напис натисніть Alt+A","Щоб зберегти зміни натисніть Shift+S"];
// let description = document.createElement('p');
// for (let i = 0; i < text_flag.length; i++) {
//     if ( !main.contains(hard_span) ) {
//         description.textContent = text_flag[i];
//     } else {
//         description.textContent = text_flag[i];
//     }
// }
// main.append(description);


document.addEventListener('keydown', function(e){
    if (e.code == 'KeyA' && e.altKey ) {
        console.log("change");
        let temp = hard_span.textContent;
        hard_span.remove();
        input.value = temp;
        main.append(input);
    }
});

document.addEventListener('keydown', function(e){
    if (e.code == 'KeyS' && e.shiftKey ) {
        document.addEventListener.remove;
        console.log("saved");
        let temp = input.value;
        input.remove();
        hard_span.textContent = temp;
        main.append(hard_span);
    }
});


/*
2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.
*/
window.addEventListener('resize', myResizeFunction);


function myResizeFunction () {
    if (innerWidth < 600) {
        console.log("Ми використовуємо мобільну версію");
    } else {
        console.log("Ми використовуємо десктоп версію")
    }
}


/*
3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.
*/
let newInput = document.createElement('input');
main.append(newInput);

newInput.addEventListener('input', inputChangeFunction);

function inputChangeFunction() {
    console.log(newInput.value);
}





/*
4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.
*/
/*
5. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.
*/