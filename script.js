const tombolTema = document.getElementById('tombol-tema'); 
const areaWeb = document.body; 

tombolTema.addEventListener('click', function() {     
    areaWeb.classList.toggle('tema-gelap');          
    
    // Ini tambahan biar teks di tombolnya ikut berubah     
    if (areaWeb.classList.contains('tema-gelap')) {         
        tombolTema.textContent = "Mode Terang";         
        tombolTema.style.backgroundColor = "#f1c40f"; // Tombol jadi kuning         
        tombolTema.style.color = "#000";     
    } else {         
        tombolTema.textContent = "Mode Gelap";         
        tombolTema.style.backgroundColor = "#2980b9"; // Tombol kembali biru         
        tombolTema.style.color = "#fff";     
    } 
});