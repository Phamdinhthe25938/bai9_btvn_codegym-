const displayElement = document.getElementById('display_result')
const numbers = document.getElementsByClassName('btn');
for(let number of numbers) {
    number.addEventListener('click', function () {
        displayElement.innerHTML += this.value;
    })
}
function equal (){
    let res =displayElement.innerHTML;
    let output = eval(res);
    displayElement.innerHTML= output;
}
function hollow(){
    displayElement.innerHTML='';
}
function xoaPt(){
    let res =displayElement.innerHTML;
    displayElement.innerHTML = res.substring(0,res.length-1);
}