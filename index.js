let button = document.querySelector('button');

button.addEventListener('click',changetext);
function changetext(){
    document.querySelector('p').innerHTML = "Hello git";
}