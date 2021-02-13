let menutog = document.querySelector(".menu-toggle");
let menuico = document.querySelector(".menu-toggle i");
let menu = document.querySelector(".menu");

menutog.addEventListener('click', e=>{
    menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menuico.setAttribute('class', 'fa fa-times');
    }else{
        menuico.setAttribute('class' , 'fa fa-bars')
    }
})

