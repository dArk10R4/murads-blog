var form = document.getElementById('register_form');
form.addEventListener('submit', async(e)=>{
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    await fetch("http://localhost:8080/auth/register",{
        method:"POST",
        body: JSON.stringify({
            username,
            password
        }) ,
        headers: { "Content-Type": "application/json" }
    });
    location.replace('/login')
});
