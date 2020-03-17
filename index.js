const parallax = document.getElementsByClassName('parallax');
const navbar = document.getElementsByClassName('navbar').item(0)
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.item(0).style.backgroundPositionY = offset * 0.5 + "px";
  parallax.item(1).style.backgroundPositionY = offset * 0.5 + "px";
  navbar.style.opacity = 1;
  navbar.style.width = "50%";
});
