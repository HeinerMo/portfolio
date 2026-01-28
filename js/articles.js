fetch('/assets/data/Articles.json')
    .then(response => response.json())
    .then(data => {
        console.log("Running");
        const articleContainer = document.getElementById('articles-container');
        articleContainer.innerHTML = '';

        data.forEach(item => { //for each article in the json file

            const articleElement = document.createElement('a');
            articleElement.classList.add('article');
            articleElement.href = item.path;

            // Create the title element
            const titleElement = document.createElement('h3');
            titleElement.textContent = item.title;

            // Create the date element
            const dateElement = document.createElement('p');
            dateElement.textContent = item.date;

            //Create the description element
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;

            // Append all elements to the photo container
            articleElement.appendChild(titleElement);
            articleElement.appendChild(dateElement);
            articleElement.appendChild(descriptionElement);

            // Append the photo container to the main album container
            articleContainer.appendChild(articleElement);
        });
    })
    .catch(error => {
        console.error('Error fetching or parsing the JSON:', error);
    });
