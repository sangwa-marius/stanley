const button = document.getElementById('get-post-btn');
const output = document.getElementById('output');
const form = document.getElementById('add-post-form')

async function showPosts() {
    try {
        const res = await fetch('http://localhost:8000/api/posts');
        if(!res.ok){
            throw new Error('Problem when fetching posts')
        }

        const posts = await res.json();
        output.innerHTML = ''
        posts.forEach((post)=>{
            const postEl = document.createElement('p');
            postEl.textContent = post.name;
            output.appendChild(postEl)
        })
    } catch (error) {
        console.log(error.message)
        
    }
    
}

async function  addPost(e) {
e.preventDefault();
const formData = new formData(this);
const name = formData.get('name');
try {
    const res = await fetch('http:localhost:8000/api/posts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name})

    })

    if(!res.ok){
        throw new Error('failed to add a post')
    }

    const newPost = await res.json();
    const postEl = document.createElement('p');
    postEl.textContent = newPost.name;
    output.appendChild(postEl);
    showPosts()
    
} catch (error) {
    console.log(error.message)
    
}
    
}

button.addEventListener('click',showPosts);
form.addEventListener('submit',addPost)
