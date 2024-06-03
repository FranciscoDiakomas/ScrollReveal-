window.onload = function () {
    const a1 = document.querySelectorAll("article")
    const observador = new IntersectionObserver((elemento)=>{
        elemento.forEach(e=>{
            if(e.isIntersecting){
                e.tareget.classList.add("visible")
            }else{
                e.target.classList.add("invisible")
            }
        })
      
    })
    a1.forEach((e)=>{
        observador.observe(e)
    })
}