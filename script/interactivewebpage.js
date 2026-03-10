
    box = document.querySelector('.box');
    body = document.querySelector('body');

    colors = ['blue', 'green', 'purple', 'red', 'pink', 'orange', 'yellow'];
    index = 0;

    box.addEventListener('click', () => {
        body.style.background = colors[index];
        index++;
        if (index == colors.length) {
            index = 0;
        }
    });

