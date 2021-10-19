
function windowScreen (){
    if (window.matchMedia("(max-width:700px)").matches) {
        document.querySelector('.footer').style.display = 'none';
        document.querySelector('.footer-mini').style.display = 'flex';

        console.log('a viewport tem menos que 800 pixels de largura')
    } else {
        document.querySelector('.footer-mini').style.display = 'none';
        console.log('a viewport mais que 800 pixels de largura')
    }
} 