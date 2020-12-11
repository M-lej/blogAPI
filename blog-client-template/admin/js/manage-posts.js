window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {

    try {
        let response = await fetch('');
        let data = await response.json();
        
    } catch (message) {
        throw new Error(message);
    }

}

