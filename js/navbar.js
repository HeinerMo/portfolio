fetch('reusable/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        // Set up event listeners after the navbar is loaded
        document.getElementById("homeNav").addEventListener('click', function () {
            document.getElementById("pageContent").innerHTML = "<h1>Cargando...<h1>";
            fetch('pages/home.html')
                .then(response => response.text())
                .then(data => document.getElementById("pageContent").innerHTML = data);
        });

        document.getElementById("photographyNav").addEventListener('click', function () {
            document.getElementById("pageContent").innerHTML = "<h1>Cargando...<h1>";
            fetch('pages/photography.html')
                .then(response => response.text())
                .then(data => document.getElementById("pageContent").innerHTML = data)
            loadScript("js/photography.js")
        });

        document.getElementById("articlesNav").addEventListener('click', function () {
            document.getElementById("pageContent").innerHTML = "<h1>Cargando...<h1>";
            fetch('pages/articles.html')
                .then(response => response.text())
                .then(data => document.getElementById("pageContent").innerHTML = data);
        });

        document.getElementById("aboutNav").addEventListener('click', function () {
            document.getElementById("pageContent").innerHTML = "<h1>Cargando...<h1>";
            fetch('pages/about.html')
                .then(response => response.text())
                .then(data => document.getElementById("pageContent").innerHTML = data);
        });

        fetch('pages/home.html')
            .then(response => response.text())
            .then(data => document.getElementById("pageContent").innerHTML = data);
    });



/* Loads a script to be executed. This is used for loading any dynamic content after navigation is completed. */
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        //console.log(`${url} loaded successfully`);
    };
    document.head.appendChild(script);
}