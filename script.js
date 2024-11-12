var selectField = document.getElementById('selectField');
var selectBank = document.getElementById('selectBank');
var banklist = document.getElementById('banklist');
var banks = document.querySelectorAll('.banks');
var arrow = document.getElementById('arrow');


banks.forEach(function(bank) {
    bank.onclick = function() {
        selectBank.innerHTML = this.textContent;
        banklist.classList.toggle('hide');
        arrow.classList.toggle('rotate');
    };
});

selectField.onclick = function() {
    banklist.classList.toggle('hide');

    arrow.classList.toggle('rotate');
}