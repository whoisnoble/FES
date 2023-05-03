// template_4s7gkfq
// service_m1smmym

// 30KZVDm3s31KeBgAV
// G0VK66D_yCWdzCGDtjJ7k

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientX * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle;

    if(contrastToggle) {
        document.body.classList += " dark--theme";
    } else {
        return document.body.classList.remove("dark--theme");
    };
}

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_m1smmym',
            'template_4s7gkfq',
            event.target,
            '30KZVDm3s31KeBgAV'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += ' modal__overlay--visible';
        console.log('it worked :)');
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert(
            "The email service is temporarily unavailable. Please contact me directly on email youarentnoble@gmail.com"
        );
    });
}

function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}