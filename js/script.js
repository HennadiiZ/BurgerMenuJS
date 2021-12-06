"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};


if(isMobile.any()){
    document.body.classList.add('_touch');
    
    const menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length > 0){
        for(let i = 0; i < menuArrows.length; i++){
            const menuArrow = menuArrows[i];
            console.log( menuArrow) // <span class="menu__arrow"></span>
            menuArrow.addEventListener('click', function(e){
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

}else{
    document.body.classList.add('_pc');
}

   //burger menu 
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.menu__body');
   if(iconMenu){
      
       iconMenu.addEventListener('click',(e)=>{
           document.body.classList.toggle('_lock')
           iconMenu.classList.toggle('_active');
           menuBody.classList.toggle('_active');
       });
   }

//scroll by click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
   if(menuLinks.length > 0){
        menuLinks.forEach(menuLink =>{
            menuLink.addEventListener('click', (e)=>{
                e.preventDefault();
                const menulink = e.target
                        if(menulink.dataset.goto && document.querySelector(menulink.dataset.goto)){
                            //27-30m
                            const gotoBlock = document.querySelector(menulink.dataset.goto);
                            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
                        
                            //stop scroll
                            if(iconMenu.classList.contains('_active')){
                                document.body.classList.remove('_lock')
                                iconMenu.classList.remove('_active');
                                menuBody.classList.remove('_active');
                            }

                            window.scrollTo({
                                top: gotoBlockValue,
                                behavior: 'smooth'
                            });
                        }
            })
        })
   }


