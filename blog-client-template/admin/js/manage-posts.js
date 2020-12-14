window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {

    try {
        let response = await fetch('http://localhost:3000/posts');
        let data = await response.json();
        
        let postHTML = '';
        for (let post of data) {
            console.log(post); //"post" är alla posts som kommer från URL

            postHTML += `<tr>`

            postHTML += `<td>${post.title}</td>`;
            postHTML += `<td>${post.author}</td>`;

            let postDate = new Date(post.date);
            postHTML += `<td>${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}</td>`;

            postHTML += `<td>`;
            postHTML += `<a href="update-post.html?id=${post['_id']}">Update</a> | `;
            postHTML += `<a href="#" class="delete-btn" data-id="${post['_id']}">Delete</a> `;
            postHTML += `</td>`;
            
            postHTML += `</tr>`;
        }

        document.querySelector('table tbody').innerHTML = postHTML;

    } catch (message) {
        throw new Error(message);
    }

}
