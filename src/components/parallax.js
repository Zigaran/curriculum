var elemento = document.getElementById('este');
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    var posicion = scroll * 0.2;
    elemento.style.backgroundPosition = '-' + posicion + 'px' + ' ' + '-' + posicion + 'px';
});