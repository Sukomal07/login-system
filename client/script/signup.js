const submit = document.getElementById('submit')

submit.addEventListener('click', function (e) {
    e.preventDefault();

    const nameOfUser = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const bio = document.getElementById('bio').value;

    const userData = {
        name: nameOfUser,
        username: username,
        email: email,
        password: password,
        bio: bio
    };

    registerUser(userData);
});


const registerUser = async (payload) => {
    try {
        await fetch('http://localhost:8080/signup', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
        })
        window.location.href = "http://localhost:5500/client/login.html"
    } catch (error) {
        console.log(error.message)
    }
}