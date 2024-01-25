const navbar = document.querySelector('.navbar-menu')
const bars = document.querySelector('.bars')
const barsIcon = document.querySelector('.bars i')
bars.onclick = function () {
    navbar.classList.toggle('open')
}
document.addEventListener ('click', function(e) {
    if(!bars.contains(e.target)) {
    navbar.classList.remove ('open');
    }
})
document.addEventListener ('scroll', function(e) {
    if(!bars.contains(e.target)) {
    navbar.classList.remove ('open');
    }
})