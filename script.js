const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const onLamp = (selector, style) => {
    selector.classList.add(style);
}

const offLamp = (selector, style) => {
    red.classList.remove('on-red');               
    yellow.classList.remove('on-yellow');               
    green.classList.remove('on-green');               
}

const time = 50;

const toggleLamp = () => {
    onLamp(red, 'on-red');
    setTimeout(() => {
        offLamp();
        onLamp(yellow, 'on-yellow');
        setTimeout(() => {
            offLamp();
            onLamp(green, 'on-green');
            setTimeout(() => {
                offLamp();
                toggleLamp();
            }, time); 
        }, time); 
    }, time);
};

// Mulai proses bergantian saat halaman dimuat
toggleLamp();
