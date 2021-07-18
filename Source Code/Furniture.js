let nav = document.querySelector('#nav');
let navigation = document.querySelector('.navigation');

nav.onclick = () =>{
    nav.classList.toggle('fa-times');
    navigation.classList.toggle('active');
    
}
window.onscroll = () =>{
    nav.classList.remove('fa-times');
    navigation.classList.remove('active');
    
}


window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


function togglemenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}





var productimg = document.getElementById("productimg");
var smallimg = document.getElementsByClassName("smallimg");
    
smallimg[0].onclick = function(){
    productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    productimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    productimg.src = smallimg[3].src;
}
smallimg[4].onclick = function(){
    productimg.src = smallimg[4].src;
}

