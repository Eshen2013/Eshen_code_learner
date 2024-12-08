const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

//Close menu when the cloce button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Clock Functionality
function show_clock(){

    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date(); 

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;

    let sound = new Audio('sound.mp3');
    sound.play();
}


setInterval(show_clock, 1000);

