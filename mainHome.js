let signInform = document.getElementById('signIn');
let password = document.getElementById('n4');
let cpassword = document.getElementById('n5');
let pass = document.getElementById('pass');
let cpass = document.getElementById('pass');
 let circle = document.getElementById('circle');
   let job=[
    {
      description : "financial manager",
      parent_uuid : "90369dd177d9dc5305079b81f1dc0702",
      uuid: "9ffbfbe0c0f711a4b5c09cb9489dffa0",
      title : "accounting ninja"
    },
    {
      description: "sales executive",
      parent_uuid : "193e2cfef58673322b3e112004e22464",
      uuid : "1a53001559d3244c7825e01f5bf47053",
      title: "sales ninja"
    },
    {
      description : "customer service or social media",
      parent_uuid : "be9577e912d72645481316acfcdafa66",
      uuid: "4fc168e1113b1f26cc2df5bba8e4d731",
      title : "customer engagement ninja"
    },
    {
      description: "software engineer",
      parent_uuid : "d202138ac2ddca18189dd7464b395a61",
      uuid : "1254c7d8dda6756e1094a040d5724675",
      title : "software ninjaneer"
    },
    {
      description : "web application developer",
      parent_uuid: "292316eb40b9c152340ae42d7b2816f7",
      uuid : "a50d6a27ebeaa857a184fce80c6e37cc",
      title : "php ninja"
    },
    {
      description : "baker",
      parent_uuid : "1c4217f2cc6c8afa6532f13475e17ed2",
      uuid : "bfd0ab9037525887e167e1ed019402b5",
      title : "cupcake ninja"
    }
  ]

//   button view amadabad click korla job description render
 let button1 = document.getElementById('button1');
 let sub = document.getElementById('sub');
 let result = document.getElementById('result');
 let button2 = document.getElementById('button2');
 let result1 = document.getElementById('result');

//  view increment in scroll event
var k=1000;
let initeal_view3=3.2*k;
let initeal_view4=2.4*k;
 let art = document.getElementById('art');
    let Education = document.getElementById('Education');
art.addEventListener('mouseover',()=>{
    let view3 = document.querySelector('.view3');

          initeal_view3+=1;
     console.log(initeal_view3)
    view3.innerHTML=`<a>${initeal_view3} view </a>`;

});
Education.addEventListener('mouseover',()=>{
    let view4 = document.querySelector('.view4');
  
    initeal_view4+=1;

view4.innerHTML=`<a>${initeal_view4} view </a>`;

});
 
// view initial value of amdabad
 let initeal_view=1.4*k;

  
 button1.addEventListener('click',()=>{
      // change on  of view  increase in amdabad location
let view = document.querySelector('.view1');
initeal_view+=1;
console.log(initeal_view);
view.innerHTML=`<a>${initeal_view} views</a>`;
// click a job dhaka jaba
 
let detail = document.getElementById('detail');
 
job.forEach(e => { 
//  loop ar under create korta hoba div na hola akta div a barbar innerhtml a change hocha
    var d = document.createElement('div');
    d.setAttribute('class',"sub");
  d.innerHTML=  `
 <div style="display: flex; justify-content: space-between;flex-direction: column;border: .5px solid rgb(145, 230, 76);padding: 5px; margin:7px ">

 <a>uuid:${e.description} </a> 
       <a>description:${e.uuid}  </a>
     <a>title:${e.title}  </a>
     </div>
     `
let some=document.getElementById('some');
some.insertAdjacentHTML('afterend',d.outerHTML)


}) 
 
   
  })

  let initeal_view6=1.4*k;

  
 button2.addEventListener('click',()=>{
      // change on  of view  increase in amdabad location
let view = document.querySelector('.view2');
initeal_view6+=1;
console.log(initeal_view6);
view.innerHTML=`<a>${initeal_view6} views</a>`;
// click a job dhaka jaba
 
let detail = document.getElementById('detail');
 
job.forEach(e => { 
//  loop ar under create korta hoba div na hola akta div a barbar innerhtml a change hocha
    var d3 = document.createElement('div');
    d3.setAttribute('class',"sub1");
  d3.innerHTML=  `
 <div style="display: flex; justify-content: space-between;flex-direction: column;border: .5px solid rgb(145, 230, 76);padding: 5px; margin:7px ">

 <a>uuid:${e.description} </a> 
       <a>description:${e.uuid}  </a>
     <a>title:${e.title}  </a>
     </div>
     `
let some=document.getElementById('some1');
some.insertAdjacentHTML('afterend',d3.outerHTML)


}) 
 
   
  })
  
//  button1.addEventListener('dblclick',()=>{
//     let button1 = document.getElementById('button1').value;

// sub.style.visibility='visible';
//  })


 let medium = [
    { type: 'Massage', name: 'WhatsApp', example: 'Hey, how are you?' },
    { type: 'Massage', name: 'Facebook Messenger', example: 'Nice to meet you!' },
    { type: 'Image Share', name: 'Instagram', example: 'Check out this beautiful photo!' },
    { type: 'Image Share', name: 'Snapchat', example: 'Sending you a fun snap!' }
];
 
 
// whatapp a click korla option render hoba
// 1 no share button
let share = document.getElementById('share');

share.addEventListener('click',()=>{
    

 medium.forEach((e)=>{
    let div21=document.createElement('div');
    div21.setAttribute('id','mediamname');

    div21.innerHTML=`<div style="display: flex;align-items: center;margin-right:40px;font-size: medium; margin-top:10px;color: rgb(85, 238, 228); ">
   
    <p >${e.name}</p>
    </div>`
    let empty = document.getElementById('empty');

empty.insertAdjacentHTML('afterend',div21.outerHTML);
})
 
})
// 2 no share button

let share1 = document.getElementById('share1');

share1.addEventListener('click',()=>{
    

 medium.forEach((e)=>{
    let div2=document.createElement('div');
    div2.setAttribute('id','mediamname');

    div2.innerHTML=`<div style="display: flex;align-items: center;margin-right:40px;font-size: medium; margin-top:10px;color: rgb(85, 238, 228); ">
   
    <p >${e.name}</p>
    </div>`
    let empty = document.getElementById('empty3');

empty.insertAdjacentHTML('afterend',div2.outerHTML);
})
 
})
// 3 no share button

let share2 = document.getElementById('share2');

share2.addEventListener('click',()=>{
    

 medium.forEach((e)=>{
    let div2=document.createElement('div');
    div2.setAttribute('id','mediamname');

    div2.innerHTML=`<div style="display: flex;align-items: center;margin-right:40px;font-size: medium; margin-top:10px;color: rgb(85, 238, 228); ">
   
    <p >${e.name}</p>
    </div>`
    let empty = document.getElementById('empty1');

empty.insertAdjacentHTML('afterend',div2.outerHTML);
})
 
})
// 4 no share button

let share3 = document.getElementById('share3');

share3.addEventListener('click',()=>{
    

 medium.forEach((e)=>{
    let div2=document.createElement('div');
    div2.setAttribute('id','mediamname');

    div2.innerHTML=`<div style="display: flex;align-items: center;margin-right:40px;font-size: medium; margin-top:10px;color: rgb(85, 238, 228); ">
   
    <p >${e.name}</p>
    </div>`
    let empty = document.getElementById('empty2');

empty.insertAdjacentHTML('afterend',div2.outerHTML);
})
 
})
 
let searchbar = document.getElementById('searchbar');
// a casa enter by default event enter kola enventhandelar stop hoa jaba
searchbar.addEventListener('change',(e)=>{
    e.preventDefault();
 let jobs=document.getElementById('jobs');
 jobs.innerHTML=`<a>${e.target.value},India</a>`;
 searchbar.value="";
})
 
// red circle on click scarch bar focas hoba
 circle.addEventListener('click',()=>{
    let searchbar = document.getElementById('searchbar');
    // searchbar exixt thak la
    if(searchbar){
        // cursa will rich on this location
        searchbar.focus();
    }

 })

 

// main.html follow groups start 
let grops = [
    { img:'./Rectangle 6.png', name: 'Leisure', button: 'Follow' },
    { img:'./Rectangle 6 (1).png', name: 'Activism', button: 'follow' },
    { img:'./Rectangle 6 (2).png' ,name: 'MBA', button: 'follow' },
    { img:'./Rectangle 6 (3).png' ,name: 'Philosophy', button: 'Follow' },
];
 
//  post create exiquit janno 191 ka coment kora holo

let r=document.getElementById('Recommended');
let revalue=false;
r.addEventListener('click',(e1)=>{
// e1.preventDefault();
if(revalue==false){
    revalue=true;
}
else{
    revalue=false;
}
if(revalue==true){
 grops.forEach(e => {
    console.log(e.name);
    let div11=document.createElement('div');
    div11.setAttribute('id','div12');
    div11.innerHTML=`<div   style="display: flex;justify-content: space-between;align-items: center; margin:10px">
    <div style="display: flex;">
    <img src=${e.img} alt="">
    <a>${e.name}</a>
                   
    </div>
    <button class="rounded-pill  rebutton"  >${e.button}</button>
     
</div>`
 
let pi=document.getElementById('pi');
pi.insertAdjacentHTML('afterend',div11.outerHTML);
 });
//****   dynamicaly follw button create hocha tahala dynamicaly created ele opr 
// eventlistner lagata hola jakhana create hocha sakhana envet likta hoba
 let follo=document.querySelectorAll('.rebutton');
//  above query selector retuen kora arry
// each element opor event laga ta hola
 follo.forEach(element=>{ 
    element.addEventListener('click',(e)=>{
 console.log('ankur')
    e.preventDefault();
    if(element.innerText==='Follow'){
    element.innerText=`Followed`;
    }
    else{
        element.innerText=`Follow`;

    }
})
})


}


})

r.addEventListener('dblclick',(e1)=>{
    // e1.preventDefault();
let group=document.getElementById('group');
group.style.visibility='hidden';
})
 

// write a post 1 on write button
// aka chalanor janno 190 no line thaka comment
let post=document.getElementById('postform');

post.addEventListener('submit',(e)=>{
    e.preventDefault();
    let select1 = document.getElementById('select1').value;
        let text1 = document.getElementById('text1').value;
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                select1: select1,
                text1: text1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            // below lime likta pari ba na pari
        }).then(function (res) {
            return res;
        }).then(res => {
            return res.json()
        })
            .then(function (data) {
                console.log(data.text1, data.select1);
  // only  function under div create korla tobai cick a many div hoba na hola 1 ta ta bar bar changa hoba
                let div1=document.createElement('div');
                div1.setAttribute('id','postall');
 
        div1.innerHTML=`<div style="display: flex;flex-direction: column;padding: 5px 7px; margin: 10px 10px; flex-wrap: wrap;border-radius: 10px; border: .01px solid blue;" >
       <a>subject:${select1}</a>
       <a>Inquery:${text1}</a>
       <a>Time:${new Date(8.64e15).toString()}</a>
        

        </div>
        `
         let posts=document.getElementById('posts');
 
        posts.insertAdjacentHTML('afterend',div1.outerHTML);
        

             })

    })
    
 // boostrap ar class ar id ta kaj hoba na new id dita hoba kaj koranor janno
 let jobs=document.querySelector('.jobss');
 let values=false;

 jobs.addEventListener('click',(e)=>{
    if(values==false){
        values=true;
    }
    else{
        values=false;

    }
    // e.preventDefault();
          let postdata=document.getElementById('postdata');
          console.log(values)
          if(values==true){
    postdata.style.visibility='visible';
    let text1=document.getElementById('text1');
   text1.focus();
          }
          else{
            let postdata=document.getElementById('postdata');
            postdata.style.visibility='hidden';
          }
     
 })
 
// dbl click a hoto if else use kora tur ,false kaj hoa jaba

  // boostrap ar class ar id ta kaj hoba na new id dita hoba kaj koranor janno
  let alljobs=document.querySelector('.alljobs');
 let values1=false;
  alljobs.addEventListener('click',(e)=>{
    if(values1==false){
        values1=true;
    }
    else{
        values1=false;

    }
    if(values1==true){

           let postdata=document.getElementById('postdata');
     postdata.style.visibility='visible';
     let text1=document.getElementById('text1');
   text1.focus();
    }
    else{
        let postdata=document.getElementById('postdata');
        postdata.style.visibility='hidden';
    }
      
  })
 
  
 let onsubmit = () => {
    //2. event listener javatar post request kora hoccha

    signInform.addEventListener('submit', function (e) {
        e.preventDefault();
        let signInEmail = document.getElementById('signemail').value;
        let signpassword = document.getElementById('signpassword').value;

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                signInEmail: signInEmail,
                signpassword: signpassword,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            // below lime likta pari ba na pari
        }).then(function (res) {
            return res;
        }).then(res => {
            return res.json()
        })
            .then(function (data) {
                console.log(data.signInEmail, data.signpassword);
                // let result=document.getElementById()
            })

    })
}


let signUp = document.getElementById('form1');

let onsubmit1 = () => {
    //2. event listener javatar post request kora hoccha

    signUp.addEventListener('submit', function (e) {
        e.preventDefault();
        let name = document.getElementById('n1').value;
        let lastname = document.getElementById('n2').value;
        let email = document.getElementById('n3').value;
        let password = document.getElementById('n4').value;
        let cpassword = document.getElementById('n5').value;



        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                lastname: lastname,
                email: email,
                password: password,
                cpassword: cpassword

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            // below lime likta pari ba na pari
        }).then(function (res) {
            return res;
        }).then(res => {
            return res.json()
        })
            .then(function (data) {
                console.log(data.name, data.lastname, data.email, data.password, data.cpassword);
            })

    })
}

let signUp1 = document.getElementById('form2');

let onsubmit3 = () => {
    //2. event listener javatar post request kora hoccha

    signUp1.addEventListener('submit', function (e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let lastname = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('pass').value;
        let cpassword = document.getElementById('cpass').value;

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                lastname: lastname,
                email: email,
                password: password,
                cpassword: cpassword

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            // below lime likta pari ba na pari
        }).then(function (res) {
            return res;
        }).then(res => {
            return res.json()
        })
            .then(function (data) {
                console.log(data.name, data.lastname, data.email, data.pass, data.cpass);
            })

    })
}


let signInform1 = document.getElementById('signInform1');

let onsubmit4 = () => {
    //2. event listener javatar post request kora hoccha

    signInform.addEventListener('submit', function (e) {
        e.preventDefault();
        let signInEmail = document.getElementById('signmail').value;
        let signInpassword = document.getElementById('signpass').value;
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                signInEmail: signInEmail,
                signInpassword: signInpassword,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            // below lime likta pari ba na pari
        }).then(function (res) {
            return res;
        }).then(res => {
            return res.json()
        })
            .then(function (data) {
                console.log(data.signInEmail, data.signInpassword);
                // let result=document.getElementById()
            })

    })
}

 

// email validation 
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// for form validation

function validateForm() {
    let firstName = document.getElementById("n1").value;
    let lastName = document.getElementById("n2").value;
    let email = document.getElementById("n3").value;
    let password = document.getElementById("n4").value;
    let confirmPassword = document.getElementById("n5").value;


    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return false;
    }

    if (email.length < 11 || email[email.length - 4] !== '.' || email.substr(email.length - 9, email.length - 1) !== 'gmail.com' || email[email.length - 10] !== '@' || !isValidEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }


    if (password.length < 8 || password.length > 30) {
        alert("Password must be between 8 and 30 characters");
        return false;
    }

    return true;
}
function validateForm1() {
    let firstName1 = document.getElementById('name').value;
    let lastName1 = document.getElementById('lastname').value;
    let email1 = document.getElementById('email').value;
    let password1 = document.getElementById('pass').value;
    let confirmPassword1 = document.getElementById('cpass').value;

    if (firstName1 === '' || lastName1 === '' || email1 === '' || password1 === '' || confirmPassword1 === '') {
        alert('All fields must be filled out');
        return false;
    }
    if (email1.length < 11 || email1[email1.length - 4] !== '.' || email1.substr(email1.length - 9, email1.length - 1) !== 'gmail.com' || email1[email1.length - 10] !== '@' || !isValidEmail(email1)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password1.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }

    if (password1 !== confirmPassword1) {
        alert('Passwords do not match');
        return false;
    }


    return true;
}

function validateSignIn() {
    let email = document.getElementById('signemail').value;
    let password = document.getElementById('signpassword').value;
if ( email === '' || password === '') {
        alert('All fields must be filled out');
        return false;
    }
    if (email.length < 11 || email[email.length - 4] !== '.' || email.substr(email.length - 9, email.length - 1) !== 'gmail.com' || email[email.length - 10] !== '@' || !isValidEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password1.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }

    

    return true;
}
function validateSignIn1() {
    let email = document.getElementById('signmail').value;
        let pass = document.getElementById('signpass').value;
       
     if ( email === '' ||  pass === '') {
        alert('All fields must be filled out');
        return false;
    }
    if (email.length < 11 || email[email.length - 4] !== '.' || email.substr(email.length - 9, email.length - 1) !== 'gmail.com' || email[email.length - 10] !== '@' || !isValidEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (pass.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }

    

    return true;
}
 
 