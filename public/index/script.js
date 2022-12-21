let post_container = document.querySelector(".posts");
let posts;

var data;
async function getdata(){
let html = "";
    data = await fetch("http://localhost:8080/posts",{
        credentials:'include'
    })
.then((response) => response.json()).then(d=>d)   
for(el of data){

    console.log()
    html += `
        <div class="post">
            <div class="author-name">
                ${el.authorResponseDto.fullName}
            </div>
            <div class="post-content">
                ${el.content}
            </div>
        </div>
      
      `;}
      post_container.innerHTML = html;
}

getdata();

let form = document.getElementById('postform');
    // form.onsubmit=
    //     (event)=>{
    //         console.log("salam");
    //         event.preventDefault();
    //         fetch('/posts',{
    //             method: "POST",
    //             body:
    //                 JSON.stringfy({
    //                     content: content.value
    //                 }),
    //             headers: { "Content-Type": "application/json" },
    //
    //         })
    //     }
let content = document.getElementById("content");

form.addEventListener('submit',async (event)=>{
 
    event.preventDefault();
    
   await fetch('http://localhost:8080/posts',{
        method: "POST",
        body:
            JSON.stringify({
                content: content.value
            }),credentials:'include',
            // credentials: 'include',
        headers: { "Content-Type": "application/json",'Access-Control-Allow-Credentials':true },
    })
    // .then(res=>res.json()).then((e)=>{
        
    //     if(e.status == 403 || e.status == 401){
    //         location.replace('login.html')
    //     }
    // })

    // axios.post('http://localhost:8080/posts', {
    //     content: content.value
    // }, {
    //     withCredentials: true,
    //     credentials: 'include',
    //     headers: {'Access-Control-Allow-Origin': 'http://localhost:8080', 'Content-Type': 'application/json'
    // }});

document.getElementById('content').value = '';
	getdata();
})

let username_field = document.getElementById('username_field');

let username = '';

async function getUsername(){
    await fetch('http://localhost:8080/profile',{
        method:'get',
        credentials:'include'
    }).then(res=>res.json()).then(data=>{
        username=data.username;
        writeUsername(username);
    });
}
getUsername();
function writeUsername(user){
    if(user){
        username_field.innerHTML = `
            <h1>${user}</h1>
        `
    }
    else{
        username_field.innerHTML = '<a href="/login">Login</a>';
    }
}

