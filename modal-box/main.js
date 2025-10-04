
newItemButtonEl = document.getElementById("add-item");
closeDialogButtonEl = document.getElementById("close-dialog");
dialogEl = document.querySelector("dialog");


newItemButtonEl.addEventListener('click', () => {
    dialogEl.showModal();
});

closeDialogButtonEl.addEventListener('click', () => {
    dialogEl.close();
});