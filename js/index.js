let toggled = 0;

//navbar
$(document).ready(function(){
    $(".hamburger").click(function(){
        toggled = 1;
        $(this).toggleClass("is-active");
        $("#innerMobileMenu").toggleClass("nav-active");
        $("#downArrow").toggleClass("downArrowHidden");
        $("#logo").toggleClass("logoHidden");
        $(".mobileMenu").toggleClass("mobileMenuOpen");
        $(".navItem").toggleClass("navItemMobileOpen");
        $(".roboto_mono").toggleClass("roboto_mobile");
        $("body").toggleClass("noVertScroll");
    });
});

$(".navItem").click(function(){
    toggleCheck();
});

function toggleCheck(){
    if(toggled){
        $(".hamburger").toggleClass("is-active");
        $("#innerMobileMenu").toggleClass("nav-active");
        $("#downArrow").toggleClass("downArrowHidden");
        $("#logo").toggleClass("logoHidden");
        $(".mobileMenu").toggleClass("mobileMenuOpen");
        $(".navItem").toggleClass("navItemMobileOpen");
        $(".roboto_mono").toggleClass("roboto_mobile");
        $("body").toggleClass("noVertScroll");
        toggled = 0;
        console.log("toggled: " + toggled);
    }
}


//Ghost typer
var TxtRotate = function(el, toRotate, period) {
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
    var delta = 150 - Math.random() * 150;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
        return;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
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
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


//Fade logic 
AOS.init({
    duration: 1500,
});

//fancybox
$.fancybox.defaults.animationEffect = "tube";


//smooth scroll on anchor/menu item click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});