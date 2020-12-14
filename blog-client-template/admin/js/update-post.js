window.onload = function() {
    prefillForm();
    updatePostEvent();
}

async function prefillForm() {
    let urlParams = new URLSearchParams(window.location.search);
    let postId = urlParams.get('id');

    try{
        let response = await fetch('http://localhost:3000/posts/' + postId);
        let data = await response.json();

        document.getElementById('title-textarea').value = data.title;
        document.getElementById('author-textarea').value = data.author;
        document.getElementById('content-textarea').value = data.content;

    } catch (message) {
        throw new Error(message);
    }
}

function updatePostEvent() {
    let urlParams = new URLSearchParams(window.location.search);
    
    let form = document.getElementById('update-post-form');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        let formData = new FormData(this);
        let object = {
            title: formData.get('title'),
            author: formData.get('author'),
            content: formData.get('content')
        }
    
        try {
            await fetch('http://localhost:3000/posts/' + urlParams.get('id'), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object) 
            }); 

            window.location.replace('index.html')
        } catch (message) {
            throw new Error(message);
        }
    });
}

