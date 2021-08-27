function newData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}

// User Details
function loadUser (){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(user => console.log(user))
}

function loadPost (){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(post => post.json())
  .then(data => displayData(data))
}

// Post Details
function displayData (data){
  // console.log(data);
  const newTitle = document.getElementById('new-title');
  
  for (user of data){
    const li = document.createElement('li');
    newTitle.appendChild(li);
    li.innerText = `User Name: ${user.title} & User Id: ${user.title.length}`;
    console.log(user.title.length)
  }
}
