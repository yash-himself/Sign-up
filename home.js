//checking if user want to go on profile page without sign up if true return user to sign up page
let file = window.location.href.split('/')
let logged = localStorage.getItem('user')
if (logged == null && file[file.length - 1] == 'home.html') {
    window.open('index.html', '_self')
}


// taking user information from local Storage
let user = JSON.parse(localStorage.getItem('user'))
let token = Math.round(user.token)



// rendering profile
console.log(user)
let profileBox = document.createElement('div');
profileBox.id = 'container'
profileBox.innerHTML = `
<h2>Profile</h2>
<img src="profile.png">
<div>
<div class="div"><b>Name: </b> ${user.name}</div>
<div class="div"><b>Email: </b> ${user.email}</div>
<div class="div"><b>Your Password: </b> ${user.password}</div>
<div class="div"><b>Token: </b> ${token}</div>

</div>
<button id = logOut>LOG OUT</button>
`

let body = document.querySelector('body')
body.appendChild(profileBox);



// log out functionality
let logOut = document.getElementById('logOut');

logOut.addEventListener('click', (e) => {
    e.preventDefault()
    // clearing storage
    localStorage.clear()
    // redirecting to sign up page
    window.open('index.html', '_self')
})



