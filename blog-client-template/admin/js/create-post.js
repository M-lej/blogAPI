let form = document.getElementById('create-post');
form.addEventListener('submit', createPost);



async function createPost(e) {
    e.preventDefault();

    let formData = new FormData(this);

    console.log(document.getElementById('create-content').value)
    console.log(formData.get('content'))
    
    let object = {
        content: formData.get('content')
    }
    console.log(object);
    console.log(JSON.stringify(object));



    try {
        await fetch('http://localhost:3000/posts',  //länk kopplas till databas
            { method: 'POST',

            body: JSON.stringify(object) // gör att det sparas
        });

        window.location.replace('index.html') //gör att du kommer tillbaka och ser förstasidan med alla posts
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