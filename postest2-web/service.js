const nama = document.getElementById('nama')
const pass = document.getElementById('pass')
const usia = document.getElementById('usia')
const date = document.getElementById('tgl')
const kategori = document.getElementById('kategori')
const jenis = document.getElementById('jenis')
const kondisi = document.getElementById('kondisi')
const email = document.getElementById('email')
const tanya = document.getElementById('tanya')
const dataform = []

form.addEventListener('submit', function(a) {
    a.preventDefault()

    dataform.push ({
        nama : nama.value,
        pass : pass.value,
        usia : usia.value,
        date : date.value,
        kategori : kategori.value,
        jenis : jenis.value,
        kondisi : kondisi.value,
        email : email.value,
        tanya : tanya.value

    })

    let ubahString = JSON.stringify(dataform)
    sessionStorage.setItem('form', ubahString)

    alert('berhasil melakukan scanning')
    window.location.href = 'form.html'
});