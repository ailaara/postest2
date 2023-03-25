let ambil = sessionStorage.getItem('form')
let objuser = JSON.parse(ambil)
const user = objuser.map(i => i.nama)
const usia = objuser.map(i => i.usia)
const date = objuser.map(i => i.date)
const kategori = objuser.map(i => i.kategori)
const kondisi = objuser.map(i => i.kondisi)
const tanya = objuser.map(i => i.tanya)

const hasil = document.getElementById('tampil1')
hasil.innerHTML = user

const hasil2 = document.getElementById('tampil2')
hasil2.innerHTML = usia

const hasil3 = document.getElementById('tampil3')
hasil3.innerHTML = date

const hasil4 = document.getElementById('tampil4')
hasil4.innerHTML = kategori

const hasil5 = document.getElementById('tampil5')
hasil5.innerHTML = kondisi

const hasil6 = document.getElementById('tampil6')
hasil6.innerHTML = tanya

