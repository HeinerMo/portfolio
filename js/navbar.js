fetch('/reusable/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
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