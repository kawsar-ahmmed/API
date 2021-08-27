// function loadPost (){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => newPost(data))
// }
// // postName()
// function newPost (posts){
//     for (post of posts){
//         console.log(post)
//     }
// }

function loadPost (){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPost();
// Post Details: 
function displayPosts(posts){
    const postcontainer = document.getElementById('add-post');
    for (const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <img src=" ${post.thumbnailUrl} " alt="">
         <h3> ${post.title} </h3>
         <p> ${post.id} </p>
         <a href=" ${post.url} " target = "_blank">${'Click here'} </a>
        `
        postcontainer.appendChild(div)
        console.log(post)
        
    }
}
