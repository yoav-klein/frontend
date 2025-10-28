
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', openMenu));
kebabs = document.querySelectorAll('.kebab-container');

document.addEventListener('click', (e) => {
    const pressed = document.querySelector('.kebab-container.pressed');
    let target = e.target;
    while(target) {
        if(target.classList.contains('kebab-container')) {  return; }
        target = target.parentElement;
    }
    if(pressed) pressed.classList.remove('pressed');
});

function openMenu(e) {
    const pressed = document.querySelector('.kebab-container.pressed');
    if(pressed) pressed.classList.remove('pressed')
    const parent = e.currentTarget.parentElement;
    console.log(parent);
    parent.classList.toggle('pressed');
    e.stopPropagation();
}