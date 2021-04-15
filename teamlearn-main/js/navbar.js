var navbar = document.createElement('navbar');
window.onload = function() {
  navbar.innerHTML = `
  <header>
      <div class="topnav">
          <a href="./learn.html">Learn</a>
          <a href="./contact.html">Contact</a>
          <a href="./about.html">About</a>
          <a class="active" href="./index.html">Home</a>
      </div>
  </header>
  `;
}
document.addEventListener('DOMContentLoaded', window.onload);