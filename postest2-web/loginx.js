
// buat login (ini udah multiuser)


const login = document.querySelector('#login');
login.addEventListener('submit',(event)=>{
    event.preventDefault();
    const username = document.getElementById('user2').value;
    const password = document.getElementById('pass2').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.name === username && user.password === password);
    
if(localStorage.getItem('users')=== null){
    alert("anda belum punya akun silahkan daftar");
    window.location.href = "#daftar"; }
    else {
        alert("selamat datang");
        window.location.href = "#daftar";
    }

    if (username === '' || password === '') {
        alert('Username or password cannot be empty!');
        
    } else {
        if(user){
            alert('Login successful!');
            // Ni arahkan aja kalo udah kelar login mau kemana
            window.location.href = "user.html";
            
        } else {
            alert('Invalid username or password!');
        }
    }

});


// buat daftar
const signup = document.querySelector('#daftar');
signup.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name = document.getElementById('user1').value;
    const email = document.getElementById('emailA').value;
    const password = document.getElementById('pass1').value;

    const user = {
        name,
        email,
        password
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User data saved successfully!');
});