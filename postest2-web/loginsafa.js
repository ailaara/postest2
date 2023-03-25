const form = document.getElementById('form')
const inuser = document.getElementById('user2')
console.log(inuser.value)
const inpass = document.getElementById('pass2')

const kirim = document.getElementById('loginwe')
kirim.onclick = kirimdata;

function kirimdata(a){
    a.preventDefault()
    
    let ambil = localStorage.getItem('user2')
    let objuser = JSON.parse(ambil)

    const loc_user = objuser.map(i => i.user)
    const loc_pass = objuser.map(i => i.pass)

    if(inuser.value ==  loc_user && inpass.value == loc_pass){
        alert('Yey Login')
        window.location.href = 'home.html'
    } else{
        alert('Akun tidak ada')
    }
}

// form.addEventListener("submit", function(a){
//     a.preventDefault()
    
//     let ambil = localStorage.getItem('user2')
//     let objuser = JSON.parse(ambil)

//     const loc_user = objuser.map(i => i.user)
//     const loc_pass = objuser.map(i => i.pass)

//     if(inuser.value ==  loc_user && inpass.value == loc_pass){
//         alert('Yey Login')
//         window.location.href = 'home.html'
//     } else{
//         alert('Akun tidak ada')
//     }
// });

const newEmail = document.getElementById('emailA')
const newUser = document.getElementById('user1')
const newPass = document.getElementById('pass1')
const datauser = []

    daftar.addEventListener('submit', function (a) {
        a.preventDefault()

        datauser.push ({
            Email: newEmail.value,
            User: newUser.value,
            Pass: newPass.value
        })

    // Ubah ke String
let ubahString = JSON.stringify(datauser)
    localStorage.setItem('user', ubahString)

    alert('Akun anda sudah terdaftar, silahkan ke Halaman Login')
    // window.location.href = 'index.html'
});