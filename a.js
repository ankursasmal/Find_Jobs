// let a=document.querySelector('.modeladd');
// let  b=addEventListener('click',()=>{
//     setTimeout(()=>{

//     },2000)

// })

// let arr=[];

let maparr=document.querySelector('.search');
maparr.addEventListener("onchange",(e)=>{
    arr.append(e.target.value);

})
arr.map()
// redirect
document.getElementById("redirect").addEventListener("click", function() {
    window.location.href = "./index2.html"; // Redirect to the create account page
});
