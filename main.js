//burger btn 
const btnBurger = document.querySelector(".header__nav-burger-btn");
const burgerMenu = document.querySelector(".header__nav-burger-menu");
const burgerCloseBtn = document.querySelector(".header-nav__btn-close");
const burgerNav = document.querySelector(".header__nav-burger");
const burgerOverlay = document.querySelector(".burger-overlay");


//burger open btn
btnBurger.addEventListener("click", function(evt){
    if (evt.target.closest(".header__nav-burger-btn")){
        burgerMenu.classList.toggle("active");
        burgerCloseBtn.classList.toggle("active");
        document.body.classList.toggle("body-no-scroll");
        burgerOverlay.classList.add("active");
    }
})

//closeing BurgerMenu when click to display
document.addEventListener("click", function(evt){
    if (!evt.target.closest(".header__nav-burger-menu") && !evt.target.closest(".header__nav-burger-btn")){
        burgerMenu.classList.remove("active");
        burgerCloseBtn.classList.remove("active");
        document.body.classList.remove("body-no-scroll")
        burgerOverlay.classList.remove("active");
    }
})

//burger close btn
burgerCloseBtn.addEventListener("click", closeMenu);
function closeMenu(evt) {
    if (evt.target.closest(".header-nav__btn-close")){
        burgerMenu.classList.remove("active");
        burgerCloseBtn.classList.remove("active");
        document.body.classList.remove("body-no-scroll");
        burgerOverlay.classList.remove("active");
    }
}

//burgerListHidden 
const btnArrowHidden = document.querySelector(".js-list-hidden");
const burgerServicesList = document.querySelector(".burger-services__menu");

btnArrowHidden.addEventListener("click", function(evt){
    if(evt.target.closest(".js-list-hidden")){
        burgerServicesList.classList.toggle("hidden")
    }
})

//close for keyboard
document.addEventListener("keydown", function(evt){
    if (evt.key == "Escape"){
        burgerMenu.classList.remove("active");
        burgerCloseBtn.classList.remove("active");
        document.body.classList.remove("body-no-scroll");
        burgerOverlay.classList.remove("active");
    }
});

//modalBtn
if (location.pathname == "/"){
    const modalBtn = document.querySelector(".header__btn-block-request");
    const modalWindow = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal__btn-close");
    
    modalBtn.addEventListener("click", function(evt){
        if (evt.target.closest(".header__btn-block-request")){
            modalWindow.classList.add("show")
        }
    })
    
    modalClose.addEventListener("click", function(evt){
        if (evt.target.closest(".modal__btn-close")){
            modalWindow.classList.remove("show")
        }
    })
    
    //click to overlay area
    modalWindow.addEventListener("click", function(evt){
        if (!evt.target.closest(".modal__body")){
            modalWindow.classList.remove("show")
        }
    })
}


//mask
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

//scroll-btn
const scrollBtn = document.querySelector("#js-scroll-btn");

scrollBtn.addEventListener("click", function(){
    window.scrollTo(window.pageXOffset, 0);
})

window.addEventListener("scroll", function(){
    if (window.pageYOffset < document.documentElement.clientHeight){
        scrollBtn.classList.remove("hidden");
    } 
    if (window.pageYOffset == 0){
        scrollBtn.classList.add("hidden");
    } 
})


