const userdata = async() =>{
    try {
        const res = await fetch("http://localhost:8080",{
            method:"GET",
            credentials:"include"
        })
        if(res.status != 200){
            window.location.href = "http://localhost:5500/client/login.html"
        }
        const { data } = await res.json()
        const username = document.getElementById('username')
        const bio = document.getElementById('bio')
        const userEmail = document.getElementById('userEmail')
        username.innerText = data.username
        userEmail.innerText = data.email
        bio.innerText = data.bio
    } catch (error) {
        console.log(error.message)
        window.location.href = "http://localhost:5500/client/login.html"
    }
}
userdata()