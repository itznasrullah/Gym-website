const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".scroll-link");
const menuBtn = document.querySelector(".menu");
const navbarItems = document.querySelector(".navbar-items");

let navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll",function(){
    const pageTop = pageYOffset;
    if (pageTop >= navbarHeight) {
        navbar.classList.add("scroll-nav");
    }else{
        navbar.classList.remove("scroll-nav");
    }
});

links.forEach(function(link){
    link.addEventListener("click" ,function(e){
        e.preventDefault();   
        const targetLink = e.target.attributes.href.textContent; 
        const element = document.querySelector(targetLink);

        let position = element.offsetTop - navbarHeight;
        window.scrollTo(0, position,); 
        navbar.classList.remove("show");
        navbar.classList.remove("show-color");
    });
})

menuBtn.addEventListener("click",function(){
    // navbarItems.classList.toggle("show");   
    navbar.classList.toggle("show");  
    navbar.classList.toggle("show-color"); 
})