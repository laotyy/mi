window.addEventListener('scroll',function(){
    let topbar = document.querySelector('.top-bar');
   if(window.scrollY>0)
    {
        topbar.classList.add("scroll");
    }else{
        topbar.classList.remove("scroll");
    }
})
document.querySelector(".logo img").addEventListener("click",function(){
    window.location.href="./mi.html";
})