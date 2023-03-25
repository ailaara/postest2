// Ini mau ngambil data

const kirim = document.getElementById('buat') //tombol dulu ini lo
buat.onclick = kirimdata

function kirimdata(a){
    a.preventDefault()
    
    const newNama = document.getElementById('name2')
    
    

    // Ini untuk menyimpan data dengan local storage
    
    localStorage.setItem("Nama", newNama.value)

    if (newNama.value === ''){
        alert('buatlah nama terlebih dahulu')
    }
    else {
        alert('nama yang baguss!!!')
        window.location.href = 'home.html' 
    }
    
}