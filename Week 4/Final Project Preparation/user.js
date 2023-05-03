
const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id");

async function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id);
}

async function renderPosts(UserId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${UserId}`);
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.map((post => userHTML(post))).join("");
}

function userHTML(post) {
    return `
    <div class="post">
        <div class="post__title">
        ${post.title}
        </div>
        <p class="post__body">
        ${post.body}
        </p>
    </div>
  `
}

renderPosts(id);