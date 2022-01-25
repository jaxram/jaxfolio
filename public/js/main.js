AOS.init()
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
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
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


        const toggle = document.querySelector(".toggle");
        const menu = document.querySelector(".menu");
        const items = document.querySelectorAll(".item");
        
        /* Toggle mobile menu */
        function toggleMenu() {
          if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
          } else {
            menu.classList.add("active");
            toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
          }
        }
        
        /* Activate Submenu */
        function toggleItem() {
          if (this.classList.contains("submenu-active")) {
            this.classList.remove("submenu-active");
          } else if (menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            this.classList.add("submenu-active");
          } else {
            this.classList.add("submenu-active");
          }
        }
        
        /* Close Submenu From Anywhere */
        function closeSubmenu(e) {
          let isClickInside = menu.contains(e.target);
        
          if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
          }
        }
        /* Event Listeners */
        toggle.addEventListener("click", toggleMenu, false);
        for (let item of items) {
          if (item.querySelector(".submenu")) {
            item.addEventListener("click", toggleItem, false);
          }
          item.addEventListener("keypress", toggleItem, false);
        }
        document.addEventListener("click", closeSubmenu, false);

        jQuery(document).ready(function($){
 
          // Define a blank array for the effect positions. This will be populated based on width of the title.
          var bArray = [];
          // Define a size array, this will be used to vary bubble sizes
          var sArray = [4,6,8,10,12];
       
          // Push the header width values to bArray
          for (var i = 0; i < $('.bubbles').width(); i++) {
              bArray.push(i);
          }
           
          // Function to select random array element
          // Used within the setInterval a few times
          function randomValue(arr) {
              return arr[Math.floor(Math.random() * arr.length)];
          }
       
          // setInterval function used to create new bubble every 350 milliseconds
          setInterval(function(){
               
              // Get a random size, defined as variable so it can be used for both width and height
              var size = randomValue(sArray);
              // New bubble appeneded to div with it's size and left position being set inline
              // Left value is set through getting a random value from bArray
              $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
               
              // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
              // Callback function used to remove finsihed animations from the page
              $('.individual-bubble').animate({
                 
                 
                  'bottom':'100%',
                  'opacity' : '-=0.7'
              }, 3000, function(){
                  $(this).remove()
              }
              );
       
       
          }, 350);
       
      });

      