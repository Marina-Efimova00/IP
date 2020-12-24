const form = document.forms['formOrder'];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(...formData.values());

    if (!checkIfNotNull(formData.get('fio'))) return showMessage('error', 'Заполните поле ФИО');
    if (!checkEmail(formData.get('email'))) return showMessage('error', 'Неверно введен Email');
    if (!checkPhone(formData.get('num'))) return showMessage('error', 'Неверно введен номер телефона');
    if (!checkIfNotNull(formData.get('city'))) return showMessage('error', 'Заполните поле Город');
    if (!checkIfNotNull(formData.get('adress'))) return showMessage('error', 'Заполните поле Адрес');
    if (!checkRadioOne(formData.get('rad'))) return showMessage('error', 'Выберете способ доставки');
    if (!checkRadioTwo(formData.get('radTwo'))) return showMessage('error', 'Выберете способ оплаты');
    if (!checkNumCard(formData.get('card'))) return showMessage('error', 'Введите номер карты состоящий из 16 символов');
    showMessage('success', 'Оплачено');
});

function checkIfNotNull(fio) {
    return fio !== '';
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
function checkRadioTwo(radTwo) {
    
    var inp = document.getElementsByName('radTwo');
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