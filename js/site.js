const form = document.forms[0];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = [...new FormData(form).values()];
    console.log(values);

    showMessage('success', 'Оплачено');
});
function showMessage(type, text) {
    Swal.fire({
        position: 'top-end',
        icon: type,
        text: text,
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2500
      })
}