var form = document.getElementById('login_form');
form.addEventListener('submit', async(e)=>{
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    await fetch("http://localhost:8080/auth/login",{
        method:"POST",
        body: JSON.stringify({
            username,
            password
        }) ,credentials:'include',
        headers: { "Content-Type": "application/json","Access-Control-Allow-Origin":"http://localhost:8080" }
    }).then((d)=>{
        if(d.status!=200){
            alert('bad credentials!!!!!!!!!!');

        }else{
            location.href = '/'
        }
        
    });
    
});

