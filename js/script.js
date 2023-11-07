// TWO FACES
const box = document.querySelector('.box');

box.addEventListener('click', () => {
    const up = document.querySelector('.box .up');
    const down = document.querySelector('.box .down');

    if (up.classList.contains('active')) {
        up.classList.remove('active');
        down.classList.add('active');
    }
    else if (down.classList.contains('active')) {
        down.classList.remove('active');
        up.classList.add('active');
    }
});