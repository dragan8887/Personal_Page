
document.addEventListener("DOMContentLoaded", function () {
    var tekstce=document.querySelector('.tekstce');
    if(tekstce){
        setTimeout(function () {
            tekstce.classList.add('visible');
        },250)
    }
})