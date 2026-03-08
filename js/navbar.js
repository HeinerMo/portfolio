fetch('/reusable/navbar.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;

    document.getElementById("homeNav").onclick = () => navigate("/");
    document.getElementById("aboutNav").onclick = () => navigate("/about");
    document.getElementById("articlesNav").onclick = () => navigate("/articles");
    document.getElementById("photographyNav").onclick = () => navigate("/photography");
  });