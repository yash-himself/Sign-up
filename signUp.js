// initializing variable 
let Name
let email
let password
let confirmPass
let submit = document.getElementById('submit')


//checking if user want to go on signup page while logged in  if true return user to profile page
let file = window.location.href.split('/')
let logged = localStorage.getItem('user')
if (logged != null && file[file.length - 1] == 'index.html') {
    window.open('home.html', '_self')
}




// login process
submit.addEventListener('click', (e) => {
    e.preventDefault();
    Name = document.getElementById('name').value.trim()
    email = document.getElementById('email').value.trim()
    password = document.getElementById('password').value.trim()
    confirmPass = document.getElementById('conPassword').value.trim()
// checking if any field is empty
    if (Name === '' || email === '' || password.length === '' || confirmPass === '') {
        alert('All fields are mandetory !')
    }
// checking if password length is less than 4
    else if (password.length <= 3) { alert('Password length shoud be greater than 3') }
// checking if password is not matching with confirm password
    else if (password != confirmPass) { alert('incorrect password details !') }
// if everything is good to go .. processing further to sign up
    else {
        let token = Math.random() * 1000000
        let newObj = { 'name': Name, 'email': email, 'password': password, 'token': token }

        localStorage.setItem('user', JSON.stringify(newObj))
        document.querySelector('form').reset();
        alert('Sign up Success...')

// redirecting on successful sign up
        window.open('home.html', '_self')


    }

})








