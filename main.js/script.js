let navbar = document.querySelector('#navbar');
const btn = document.querySelector('.btn');
const showBtn = document.querySelector('.show-btn')
showBtn.addEventListener('click', function (){
    navbar.style.width= '60%';
    showBtn.style.display = 'none';
    btn.style.display = 'inline-block';
});
btn.addEventListener('click', function(){
    navbar.style.width= '0px';
    btn.style.display = 'none';
    showBtn.style.display = 'inline-block';
})