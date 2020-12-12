const form = document.forms[1];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = [...new FormData(form).values()];
    console.log(values);
    if (!checkIfNotNull(values[0])) return showMessage('error', 'Заполните поле ФИО');
    if (!checkEmail(values[1])) return showMessage('error', 'Неверно введен Email');
    if (!checkPhone(values[2])) return showMessage('error', 'Неверно введен номер телефона');
    if (!checkIfNotNull(values[3])) return showMessage('error', 'Заполните поле Город');
    if (!checkIfNotNull(values[4])) return showMessage('error', 'Заполните поле Адрес');
    if (!checkRadioOne(values[5])) return showMessage('error', 'Выберете способ доставки');
    if (!checkRadioTwo(values[6])) return showMessage('error', 'Выберете способ оплаты');
    if (!checkNumCard(values[7])) return showMessage('error', 'Заполните поле Номер карты');
    showMessage('success', 'Оплачено');
});
function checkIfNotNull(str) {
    return str !== '';
}
function checkPhone(number) {
    var reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return number != "" && reg.test(number);
}
function checkRadioOne(rad) {
    
    var inp = document.getElementsByName('rad');
    for (var i = 0; i < inp.length; i++) {
        var radio = inp[i];
        if (radio.type == "radio" && radio.checked ) {
           return true
        }
    }
    return false;
}
function checkRadioTwo(rad2) {
    
    var inp = document.getElementsByName('rad2');
    for (var i = 0; i < inp.length; i++) {
        var radio = inp[i];
        if (radio.type == "radio" && radio.checked ) {
           return true;
        }
        
    }
    return false;
}
function checkNumCard(card) {
    var reg = /^\d{16}$/;
    return card != "" && reg.test(card);
    
    return card !== '';
}
function checkEmail(email) {
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    return email != "" && reg.test(email);
}
function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
        });
}