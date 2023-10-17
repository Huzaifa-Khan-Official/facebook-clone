const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const cards = document.querySelector(".cards");
fetch(apiUrl)
    .then(data => data.json())
    .then(data => {
        const arr = data;

        arr.forEach(currPost => {
            cards.innerHTML += `
        <div class="card">
            <img src="./assets/profileImg.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${currPost.title}</h5>
                <p class="card-text">${currPost.body}</p>
                
            </div>
        </div>
        `;
        });
    }
    )
    .catch(err => console.log(err));