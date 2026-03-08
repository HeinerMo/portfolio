const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/articles": "/pages/articles.html",
  "/photography": "/pages/photography.html"
};

const NOT_FOUND = "/pages/404.html";

function navigate(path) {
  window.location.hash = path;
}

function route() {

  const path = location.hash.slice(1) || "/";

  // dynamic article route
  if (path.startsWith("/articles/")) {
    const slug = path.replace("/articles/", "");
    loadPage(`/pages/articles/${slug}.html`);
    return;
  }

  // normal routes
  if (routes[path]) {
    loadPage(routes[path]);
    return;
  }

  loadPage(NOT_FOUND);
}

function loadPage(route) {

  const container = document.getElementById("pageContent");

  container.innerHTML = "<h1>Cargando...</h1>";

  fetch(route)
    .then(r => {
      if (!r.ok) throw new Error("Not found");
      return r.text();
    })
    .then(html => {

      // remove previous dynamic scripts
      document
        .querySelectorAll("script[data-dynamic-script]")
        .forEach(s => s.remove());

      container.innerHTML = html;

      const scripts = container.querySelectorAll("script");

      scripts.forEach(oldScript => {

        const newScript = document.createElement("script");
        newScript.dataset.dynamicScript = "true";

        if (oldScript.src) {

          // fetch external script and wrap it in a scope
          fetch(oldScript.src)
            .then(r => r.text())
            .then(code => {
              newScript.textContent = `(() => {\n${code}\n})();`;
              document.body.appendChild(newScript);
            });

        } else {

          // wrap inline scripts
          newScript.textContent = `(() => {\n${oldScript.textContent}\n})();`;
          document.body.appendChild(newScript);

        }

      });

    })
    .catch(() => loadPage(NOT_FOUND));
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);