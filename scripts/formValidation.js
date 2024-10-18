const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const fb = document.querySelector('#feedback');

pwd2.addEventListener('focusout', controlar);

function controlar() {
    //console.log('inside the function');

    if (pwd1.value !== pwd2.value) {
        //console.log('not match');
        pwd1.value = "";
        pwd2.value = "";
        pwd1.focus();
        fb.textContent = "Values don't match! Try again please";
        fb.style.color = 'red';

    } else {
        //console.log('Match');
        fb.textContent = "";
    }
}