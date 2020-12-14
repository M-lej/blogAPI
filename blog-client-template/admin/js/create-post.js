let form = document.getElementById('create-post');
form.addEventListener('submit', createPost);


async function createPost(e) {
    e.preventDefault();

    let formData = new FormData(this);

    console.log(document.getElementById('create-content').value)
    console.log(formData.get('content'))
    
    let object = {
        title: formData.get('title'),
        author: formData.get('author'),
        content: formData.get('content')
    }

    console.log(object);
    console.log(JSON.stringify(object));


    try {
        await fetch('http://localhost:3000/posts',  //länk kopplas till databas
            { method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object) // gör att det sparas
        });

        window.location.replace('index.html') //gör att du kommer tillbaka och ser förstasidan med alla posts
    } catch (message) {
        throw new Error(message);
    }
}

async function prefillForm() {
    let urlParams = new URLSearchParams(window.location.search);
    let postId = urlParams.get('id');

    try{
        let response = await fetch('http://localhost:3000/posts')
        let data = await response.json();

        document.getElementById('title-textarea').value = data.title;
        document.getElementById('author-textarea').value = data.author;
        document.getElementById('content-textarea').value = data.content;

    } catch (message) {
        throw new Error(message);
    }
}

function formatFormData(formData) {
    let obj = {};
    for (let key of formData.keys()) {
        obj[key] = formData.get(key);
    }

    return obj;
}