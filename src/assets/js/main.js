// Click to Icon Nav open & close Nav
let navIcon = document.getElementById("navIcon");
let navMenu = document.getElementById("navMenu");

navIcon.addEventListener("click",()=>{
    if(navMenu.classList.contains("hidden")){
        navMenu.classList.remove("hidden")
    }else{
        navMenu.classList.add("hidden")
    }
})

window.addEventListener("resize",()=>{
   navMenu.classList.add("hidden") 
});

