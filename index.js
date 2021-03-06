const parallax = document.getElementsByClassName('parallax');

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.item(0).style.backgroundPositionY = offset * 0.5 + "px";
  parallax.item(1).style.backgroundPositionY = offset * 0.5 + "px";
});
