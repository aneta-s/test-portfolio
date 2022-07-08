//1. each const represent element we interact in html
const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
//pass in each of nav constance
const navItems = [nav1, nav2, nav3, nav4, nav5];

//Control Navigation Animation
function navAnimation(direction1, direction2) {
    //array method allow to run forech function on each item within the array. Within there pass in local variable and index (+1!) to add number nav to css class (slide-in-1 or slide-out-1) 
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - Nav Items
         //Have repleace instead so whichever have off value "out" add to the class list of nav item within html
        //calling own function with params in what direction what to add and remove, when animation we're adding out and adding in
        navAnimation('out', 'in');
    } else {
        // Animate Out - Overlay
       //Instead of seperate remove/add line, use replace method with params what to remove and add
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }
}
// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});



/* BELOW CODE CONSIS OF LOT OF REPETITION, SEE ABOVE CODE & EVENTUALLY ADJUST THERE*/
////START HERE: EVERY TIME THERE IS A CLICK ON THE NAVIGATION OR NAV ITEAM, RUN toggleNav FUNCTION
////2. Event Listeres launch a function 
////On/Off for Navigation when click on the bars themself
//menuBars.addEventListener("click", toggleNav);
////when click on the nav item itself be able go to the section I've clicked on, hide the navigations on those clicks
//nav1.addEventListener("click", toggleNav);
//nav2.addEventListener("click", toggleNav);
//nav3.addEventListener("click", toggleNav);
//nav4.addEventListener("click", toggleNav);
//nav5.addEventListener("click", toggleNav);

////1. each const represent element we interact in html
//const menuBars = document.getElementById("menu-bars");
//const overlay = document.getElementById("overlay");
//const nav1 = document.getElementById("nav-1");
//const nav2 = document.getElementById("nav-2");
//const nav3 = document.getElementById("nav-3");
//const nav4 = document.getElementById("nav-4");
//const nav5 = document.getElementById("nav-5");

////FUNCTION toggleNav TOGGLE ON/OFF THE "CHANGE"CLASS SO IT ANIMATE HAMBURGER MENU
////3. Declare function adding/removing "change"class
//function toggleNav() {
//    //Toggle: Menu Bars Open/Closed
//    menuBars.classList.toggle("change"); //refer to css class "change", when the function runs, add the "change" class that couse the X to show up
//    //Toggle: Menu Active (show the Navigation)
//    //WHENEVER THE VALUE IT TURN OFF/ON THE NAVIGATION
//    overlay.classList.toggle("overlay-active");//use overlay-active class as a boolean
//    // if statement to alternate between true/false (show/hide)
//    //IF IT CONTAIN OVERLAY-ACTIVE IT TURN ON
//    if (overlay.classList.contains("overlay-active"))  //if contain overlay-active class show or hide the Navigation
//    {
//        //Animate In - Overlay else Animate Out - Overlay
//        //******WHICHEVER CLASS IS WRITTEN LAST IS THE ONE IS GOING TO BE USED IF THEY BOTH APPLY TO THE SAME ELEMENT IN HTML. REMOVE THE OPPOSITE CLASS, WHEN WE'RE CALLING THE CLASS WE WANT TO CALL.
//        overlay.classList.remove("overlay-slide-left");//removing slide left and adding slight right when show the navigation 
//        overlay.classList.add("overlay-slide-right");
//        //Animate In - Nav Items
//        nav1.classList.remove("slide-out-1");
//        nav1.classList.add("slide-in-1");
//        nav2.classList.remove("slide-out-2");
//        nav2.classList.add("slide-in-2");
//        nav3.classList.remove("slide-out-3");
//        nav3.classList.add("slide-in-3");
//        nav4.classList.remove("slide-out-4");
//        nav4.classList.add("slide-in-4");
//        nav5.classList.remove("slide-out-5");
//        nav5.classList.add("slide-in-5");
//    } else {
//        //IF IT DOES NOT CONTAIN OVERLAY-ACTIVE IT TURN OFF 
//        //Animate Out - Overlay
//        overlay.classList.remove("overlay-slide-right");//removing slide right and adding slide left when show off the navigation
//        overlay.classList.add("overlay-slide-left");
//        //Animate Out - Nav Items
//        nav1.classList.remove("slide-in-1");
//        nav1.classList.add("slide-out-1");
//        nav2.classList.remove("slide-in-2");
//        nav2.classList.add("slide-out-2");
//        nav3.classList.remove("slide-in-3");
//        nav3.classList.add("slide-out-3");
//        nav4.classList.remove("slide-in-4");
//        nav4.classList.add("slide-out-4");
//        nav5.classList.remove("slide-in-5");
//        nav5.classList.add("slide-out-5");
//    }


//}
////START HERE: EVERY TIME THERE IS A CLICK ON THE NAVIGATION OR NAV ITEAM, RUN toggleNav FUNCTION
////2. Event Listeres launch a function 
////On/Off for Navigation when click on the bars themself
//menuBars.addEventListener("click", toggleNav);
////when click on the nav item itself be able go to the section I've clicked on, hide the navigations on those clicks
//nav1.addEventListener("click", toggleNav);
//nav2.addEventListener("click", toggleNav);
//nav3.addEventListener("click", toggleNav);
//nav4.addEventListener("click", toggleNav);
//nav5.addEventListener("click", toggleNav);

