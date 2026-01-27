fetch('/assets/data/Photography-ES.json')
    .then(response => response.json())
    .then(data => {
        const albumContainer = document.getElementById('album-container');
        albumContainer.innerHTML = '';

        data.forEach(item => { //for each photo in the json file


            /*
                The expected structure from this code:
                <div class="photo-container">
                    <img src="item.path" alt="item.title">
                    <h3>item.title</h3>
                    <p>item.date</p>
                    <p>item.details</p>
                </div>
            */

            const photoContainer = document.createElement('div');
            photoContainer.classList.add('photo-container');

            // Create the image element
            const imgElement = document.createElement('img');
            imgElement.src = item.path;
            imgElement.alt = item.title;
            imgElement.classList.add("photo");

            // Create the title element
            const titleElement = document.createElement('h3');
            titleElement.textContent = item.title;

            // Create the date element
            const dateElement = document.createElement('p');
            dateElement.textContent = item.date;


            // Append all elements to the photo container
            photoContainer.appendChild(imgElement);
            photoContainer.appendChild(titleElement);
            photoContainer.appendChild(dateElement);

            // Create a paragraph for each detail and append it
            item.details.forEach(detail => {
                const detailElement = document.createElement('p');
                detailElement.textContent = detail;
                photoContainer.appendChild(detailElement);
            });

            // Append the photo container to the main album container
            albumContainer.appendChild(photoContainer);
        });
    })
    .catch(error => {
        console.error('Error fetching or parsing the JSON:', error);
    });
