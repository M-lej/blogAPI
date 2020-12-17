window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {

    try {
        let response = await fetch('http://localhost:3000/posts');
        let data = await response.json();

        let postListHTML = '';
        
        for (let post of data.reverse()) {
            postListHTML += `<li class="list-posts">`

            postListHTML += `<h2>${post.title}</h2>`;

            postListHTML += `<p>${post.author}`

            let postDate = new Date(post.date);
            postListHTML += ` | ${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()} ${postDate.getHours()}:${postDate.getMinutes()}</p>`;

            postListHTML += `<p>${post.content}</p>`;

            postListHTML += "________________________________________________________________________________________________";

            postListHTML += `</li>`; 
            
            console.log(post);
        }

        document.getElementById('post-list').innerHTML = postListHTML;

    } catch (message) {
        throw new Error(message);
    }
}