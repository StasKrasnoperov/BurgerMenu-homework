const menu = document.querySelector(".menu__body");
const burgerBtn = document.querySelector(".menu__icon");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll(".menu__link");
const blocks = document.querySelectorAll(".block");

const burgerState = ["burger.svg", "cross.svg"];
let indexState = 0;

const body = document.body;

function showHideBurgerMenu() {
    menu.classList.toggle("active");
    

    switch (indexState) {
      case 0:
        indexState = 1;
        break;
      case 1:
        indexState = 0;
        break;
    }
    burger.src = burgerState[indexState];
}


if(menu && burger) {

    burgerBtn.addEventListener("click",()=>{
        body.classList.toggle("lock");
        showHideBurgerMenu();
    });

    links.forEach((el)=> el.addEventListener("click",() => {
        body.classList.remove("lock");
        showHideBurgerMenu();
    }))

}

const anchors = document.querySelectorAll("a[href*='#']");

anchors.forEach((anchor) => {
    anchor.addEventListener("click",(event)=> {
        event.preventDefault();

        const blockId = anchor.getAttribute("href").substring(1);

        document.getElementById(blockId).scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    });
});
