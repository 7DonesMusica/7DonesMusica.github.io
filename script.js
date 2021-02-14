let menutog = document.querySelector(".menu-toggle");
let menuico = document.querySelector(".menu-toggle i");
let menu = document.querySelector(".menu");
let anav1= document.querySelector(".a-nav1");
let anav2= document.querySelector(".a-nav2");
let anav3= document.querySelector(".a-nav3");
let anav4= document.querySelector(".a-nav4");
let anav5= document.querySelector(".a-nav5");

menutog.addEventListener('click', e=>{
    menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menuico.setAttribute('class', 'fa fa-times');
        anav1.addEventListener('click' ,e=>{
            menu.classList.remove('show');
            menuico.setAttribute('class' , 'fa fa-bars')
        })
        anav2.addEventListener('click' ,e=>{
            menu.classList.remove('show');
            menuico.setAttribute('class' , 'fa fa-bars')
        })
        anav3.addEventListener('click' ,e=>{
            menu.classList.remove('show');
            menuico.setAttribute('class' , 'fa fa-bars')
        })
        anav4.addEventListener('click' ,e=>{
            menu.classList.remove('show');
            menuico.setAttribute('class' , 'fa fa-bars')
        })
        anav5.addEventListener('click' ,e=>{
            menu.classList.remove('show');
            menuico.setAttribute('class' , 'fa fa-bars')
        })
    }else{
        menuico.setAttribute('class' , 'fa fa-bars')
    }
})

