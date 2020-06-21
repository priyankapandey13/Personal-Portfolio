console.log('Script loaded');

// document.getElementById("navigation-content").style.transform="translate(0px)";

// basicFunctions()
// function basicFunctions() {
    
// }


// let headerMenu = document.getElementsByClassName("menubar");
// headerMenu.addEventListener("click", function(){
//     console.log("im reached here");
    
//     // document.getElementById("navigation-content").style.transform="translate(0px)";
//   }); 

// document.querySelectorAll(".menubar").addEventListener("click", myFunction())



window.onload = function () {
// For loader window need to uncomment it later
    // let loaderwindow = document.querySelector("#loader");
    // loaderwindow.classList.add('loader-load');
// For loader window need to uncomment it later

    // gsap.to('#loader',1,{y:"-100%"});
    // gsap.to('#loader',1,{opacity:0});
    // gsap.to('#loader',0,{display:"none",delay:1});
    // gsap.to('#header',0,{display:"block",delay:1})
    // gsap.to('#navigation-content',0,{display:"none"});
    // gsap.to('#navigation-content',0,{display:"flex",delay:1});

// Autocomplete index content



// Autocomplete index content


    let menubarOpen = document.querySelector(".menubar-btn");
    menubarOpen.addEventListener("click", openMenu);
    
    let menubarClose = document.querySelector(".navigation-close");
    menubarClose.addEventListener("click", closeMenu);

    let home = document.getElementById("header");
    let about = document.getElementById("about");
    let portfolio = document.getElementById("portfolio");
    let contact = document.getElementById("contact");
    let breaker = document.getElementById("breaker");
    

    
    document.getElementById("home-link").addEventListener("click", onlyHome);
    document.getElementById("about-link").addEventListener("click", onlyAbout);
    document.getElementById("portfolio-link").addEventListener("click", onlyPortfolio);
    document.getElementById("contact-link").addEventListener("click", onlyContact);


    let showHome = document.getElementById("home-link-ss");
    showHome.addEventListener("click", onlyHome);

    let showAbout = document.getElementById("about-link-ss");
    showAbout.addEventListener("click", onlyAbout);



    let showPortfolio = document.getElementById("portfolio-link-ss");
    showPortfolio.addEventListener("click", onlyPortfolio);


    let showContact = document.getElementById("contact-link-ss");
    showContact.addEventListener("click", onlyContact);



    function onlyHome() {
        home.style.display="block";
        about.style.display="none";
        // blog.style.display="none";
        portfolio.style.display="none";
        contact.style.display="none";
        breaker.style.display="block";
        closeMenu()
    }
    
    function onlyAbout() {
        home.style.display="none";
        about.style.display="block";
        // blog.style.display="none";
        portfolio.style.display="none";
        contact.style.display="none";
        breaker.style.display="block";
        closeMenu()
    }

    function onlyPortfolio() {
        console.log('I am here');
        
        home.style.display="none";
        about.style.display="none";
        // blog.style.display="none";
        portfolio.style.display="block";
        contact.style.display="none";
        breaker.style.display="block";
        closeMenu()
    }
    
    function onlyContact() {
        home.style.display="none";
        about.style.display="none";
        // blog.style.display="none";
        portfolio.style.display="none";
        contact.style.display="block";
        breaker.style.display="block";
        closeMenu()
    }
    
    

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            $("#navigation-bar").addClass("scrolling");
        } else {
            $("#navigation-bar").removeClass("scrolling");
        }
    });


};




function openMenu(){
    const navigation = document.getElementById("navigation-content");
    // document.getElementById("navigation-content").style.transform="translate(0px)";
    navigation.style.transform="translate(0px)";
navigation.classList.add("mystyle");
}
function closeMenu(){
    document.getElementById("navigation-content").style.transform="translate(0px, -100%)";
    // breaker.style.display="none";
    setTimeout(() => {
        breaker.style.display="none";
    }, 1200);
}








// function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     }
//     // </script>
    
//     <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>



// function submitform(name, email, subject, message){
   
// }


// name=priyanka&email=priyanka.test%40demo.com&subject=testing123&message=lorem+ipsum#