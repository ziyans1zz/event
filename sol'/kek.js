// 280 (1)

// let hui = document.querySelector('#hui');

// hui.addEventListener('input', function() {
// 	if(hui.value.length >= 5){
//         alert("стоп 5 символов.")
//     }
// });




//280 (2)

// let hui = document.querySelector('#hui');
// let lol = document.querySelector('p');
// hui.addEventListener('input', function() {
// if(hui.value.length < 6 ){
//  lol.textContent = "можно еще ввести" + " "+ (+(5) - +(hui.value.length))
// }
// else if (hui.value.length > 5){
//     lol.textContent = "превышаешь" + " "+ ( +(hui.value.length) - +5)
// }
// });






// 281
// let hui1   = document.querySelector('#hui1');
// let hui2   = document.querySelector('#hui2');
// hui1.addEventListener('change', function() {
// 	if(hui1.value.length == 2){
//         hui2.focus()
//     }
    
// });

// hui2.addEventListener('change', function() {
// 	if(hui2.value.length == 2){
//         hui2.blur()
//     }
// });


// 282 (1)
// let select = document.querySelector('#select');
// let button = document.querySelector("#btn")
// let p = document.querySelector("p")
// button.addEventListener("click",qwe)
// function qwe(){
//     p.textContent = select.value
// }


// 282 (2)

// let select = document.querySelector('#select');
// select.addEventListener('change',qwe)
// function qwe(){
//     if(select.value % 4 == 0){
//         alert('-')
//     }
//     else{
//         alert('+')
//     }
// }



//282 (3)

// let select = document.querySelector('#select');
// select.addEventListener('change',qwe)
// function qwe(){
//     if(select.value <= 5){
//         alert("выбран рабочий день")
//     }
//     else{
//         alert("выбран выходной день")
//     }
// }