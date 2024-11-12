var selectField = document.getElementById('selectField');
var scelectBank = document.getElementById('scelectBank');
var banklist = document.getElementById('banklist');
var banks = document.getElementsByClassName('banks');


// event listener
banklist.addEventListener('onclick', enterField);

function enterField(e){
    e.preventDefault();

    if(e.target.classList.contains('banks')){
    console.log('hello');

    }

}