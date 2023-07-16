const submit = document.getElementById("submit")

submit.addEventListener('click', (e)=>{
    e.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const userdata = {
        username:username,
        password:password
    }
    loginUser(userdata)
})

const loginUser = async(payload) =>{
    try {
        await fetch("http://localhost:8080/login",{
            method: "POST",
            headers: { "content-type": "application/json" },
            credentials:"include",
            body: JSON.stringify(payload)
        })
        window.location.href = "http://localhost:5500/client/index.html"
    } catch (error) {
        console.log(error.message);
    }
}