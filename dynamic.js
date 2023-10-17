const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


// single prod

const smallimg=document.querySelector('.small=img');
const mainimg=document.querySelector('#mainimg');

smallimg.addEventListener("click", ()=>{
        mainimg.document.innerHTML=".smallimg";
})