function createPost() {

    const text = document.getElementById("postText").value;

    if(text.trim() === "") {
        alert("Write something first");
        return;
    }

    const feed = document.getElementById("feed");

    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h4>You</h4>
        <p>${text}</p>
        <button>👍 Like</button>
        <button>💬 Comment</button>
    `;

    feed.prepend(post);

    document.getElementById("postText").value = "";
}
