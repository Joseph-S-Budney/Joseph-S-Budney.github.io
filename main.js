const circle = document.getElementById('circle');
document.addEventListener('mousemove', function(e){
    circle.style.left = e.clientX-(circle.offsetWidth/2) + 'px';
    circle.style.top = e.clientY-(circle.offsetHeight/2) + 'px';
});