window.onload = function () {
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
}



// code for color WheelEvent, can be used to change the theme color functionality in future

// document.getElementsByClassName("color-panel").addEventListener("click", function(e) {

// //   $('.color-panel').on("click",function(e) {
//     e.preventDefault();
//     $('.color-changer').toggleClass('color-changer-active');
// });

// document.getElementsByClassName("colors a").addEventListener("click", function(e) {
// // $('.colors a').on("click",function(e) {
//   e.preventDefault();
//   var attr = $(this).attr("title");
//   console.log(attr);
//   $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
// });

// color wheel code ends here


// old On click menu-open style js starts from here(this is not needed right now)
// // $(function(){
//     document.getElementsByClassName("menubar").addEventListener("click", function(e) {
//         //  $('.menubar').on('click',function(){
//             gsap.to('#navigation-content',.6,{y:0});
//         })
//         document.getElementsByClassName("navigation-close").addEventListener("click", function(e) {
//             //  $('.navigation-close').on('click',function(){
//                 gsap.to('#navigation-content',.6,{y:"-100%"});
//             });
//             //    }); 
// old On click menu-open style js ends here(this is not needed right now) 


// $(function(){
    var TxtRotate = function(el, toRotate, period) {
      console.log(toRotate);
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
// })


// $(function(){
    document.getElementById("about-link").addEventListener("click", function() {
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
   gsap.to('#breaker',0,{display:"block"});
gsap.to('#contact',0,{display:"none"});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 });

 document.getElementById("contact-link").addEventListener("click", function() {
//  $('#contact-link').on('click',function(){
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
});

document.getElementById("portfolio-link").addEventListener("click", function() {
// $('#portfolio-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
});


// document.getElementById("blog-link").addEventListener("click", function() {
//   gsap.to('#navigation-content',0,{display:"none",delay:.7});
//   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
// gsap.to('#header',0,{display:"none"});
// gsap.to('#about',0,{display:"none"});
// gsap.to('#portfolio',0,{display:"none"});
// gsap.to('#contact',0,{display:"none"});
// gsap.to('#breaker',0,{display:"block"});
// gsap.to('#breaker',0,{display:"none",delay:2});
// gsap.to('#blog',0,{display:"block",delay:.7});
// gsap.to('#navigation-content',0,{display:'flex',delay:2});
// });


document.getElementById("home-link").addEventListener("click", function() {
// $('#home-link').on('click',function(){
    
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});

});

// })




// $(function(){

 var body =  document.querySelector('body');

 var $cursor = document.getElementsByClassName("cursor");
 //  $('.cursor')
 window.onmousemove  = function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }


  // $(window).on('mousemove',cursormover);
  // let menubaraction = document.getElementsByClassName('menubar');
  let menubaraction = document.getElementById('navigation-bar');
  menubaraction.addEventListener("mouseover", function() {
  // menubaraction.addEventListener("mouseover ", function() {
    console.log('I am here');
    cursorhover();
    cursor();
  })

  // $('.menubar').hover(cursorhover,cursor);
  // $('a').hover(cursorhover,cursor);
  // $('.navigation-close').hover(cursorhover,cursor);
  
  


  // contact page Submit js : need to work and fix this part
  
  //   var submit = document.getElementById('submit');

  //   function sendEmail() {
  //     var name = $("#name");
  //     var email = $("#email");
  //     var subject = $("#subject");
  //     var body = $("#body");
  //     $('#submit').text("Sending");

  //     if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(body)) {
  //         $.ajax({
  //            url: 'mail.php',
  //            method: 'POST',
  //            dataType: 'json',
  //            data: {
  //                name: name.val(),
  //                email: email.val(),
  //                subject: subject.val(),
  //                body: body.val()
                 
  //            }, success: function (response) {
  //                 $('#myForm')[0].reset();
  //                 $('#submit').text("Thank you!!!");
  //            }
             
  //         });
  //     }
  // }

  // function isNotEmpty(caller) {
  //     if (caller.val() == "") {
  //         caller.css('border', '1px solid red');
  //     $('#submit').text("Send");
  //         return false;
  //     } else
  //         caller.css('border', '');
  //     return true;
  // }

  // submit.addEventListener('click',sendEmail)


// })