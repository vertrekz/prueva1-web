const imagenes= document.querySelectorAll(".img_galeria")
const imagenesLight=document.querySelector(".agregar_imagen")
const contenedorLight=document.querySelector(".imagen_light")
const menu1= document.querySelector(".menu")

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
    
      aparecerImagen(imagen.getAttribute("src"))
    })
})
contenedorLight.addEventListener("click", (e)=>{
    if(e.target !==imagenesLight){
        contenedorLight.classList.toggle("show")
        imagenesLight.classList.toggle("showImagen")
        menu1.style.opacity="1"
    }
})
const aparecerImagen =(imagen)=>{
    imagenesLight.src=imagen;
    contenedorLight.classList.toggle("show")
    imagenesLight.classList.toggle("showImagen")
    menu1.style.opacity="0"
}