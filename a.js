let signInform = document.getElementById('signIn');
let password = document.getElementById('n4');
let cpassword = document.getElementById('n5');
let pass = document.getElementById('pass');
let cpass = document.getElementById('pass');
let circle = document.getElementById('circle');
let job = [
    {
        description: "financial manager",
        parent_uuid: "90369dd177d9dc5305079b81f1dc0702",
        uuid: "9ffbfbe0c0f711a4b5c09cb9489dffa0",
        title: "accounting ninja"
    },
    {
        description: "sales executive",
        parent_uuid: "193e2cfef58673322b3e112004e22464",
        uuid: "1a53001559d3244c7825e01f5bf47053",
        title: "sales ninja"
    },
    {
        description: "customer service or social media",
        parent_uuid: "be9577e912d72645481316acfcdafa66",
        uuid: "4fc168e1113b1f26cc2df5bba8e4d731",
        title: "customer engagement ninja"
    },
    {
        description: "software engineer",
        parent_uuid: "d202138ac2ddca18189dd7464b395a61",
        uuid: "1254c7d8dda6756e1094a040d5724675",
        title: "software ninjaneer"
    },
    {
        description: "web application developer",
        parent_uuid: "292316eb40b9c152340ae42d7b2816f7",
        uuid: "a50d6a27ebeaa857a184fce80c6e37cc",
        title: "php ninja"
    },
    {
        description: "baker",
        parent_uuid: "1c4217f2cc6c8afa6532f13475e17ed2",
        uuid: "bfd0ab9037525887e167e1ed019402b5",
        title: "cupcake ninja"
    }
]

//   button view amadabad click korla job description render
let button1 = document.getElementById('button1');
let sub = document.getElementById('sub');
 let button2 = document.getElementById('button2');
  
 
//  view increment in scroll event
var k = 1000;
let initeal_view3 = 3.2 * k;
let initeal_view4 = 2.4 * k;
let art = document.getElementById('art');
let Education = document.getElementById('Education');
art.addEventListener('mouseover', () => {
    let view3 = document.querySelector('.view3');

    initeal_view3 += 1;
     view3.innerHTML = `<a>${initeal_view3} view </a>`;

});
Education.addEventListener('mouseover', () => {
    let view4 = document.querySelector('.view4');

    initeal_view4 += 1;

    view4.innerHTML = `<a>${initeal_view4} view </a>`;

});

// view initial value of updated
let initeal_view = 1.4 * k;

//1.  **** get req ta value ascha display hocha
// get req ta no header

     function funbutton(){
    fetch("https://www.arbeitnow.com/api/job-board-api", {
        method: 'GET',


        // below lime likta pari ba na pari
    }).then(function (res) {
        return res;
    }).then(res => {
        return res.json();
    })
        .then( da=> {
             // data obj under a tai distructure
            let { data } = da;
            // let {ja arr different obj undera sai name }=da;
            for (let ei of data) {
                let de = document.createElement('div');
                de.setAttribute('class', "sub");
                de.innerHTML = ` <div style="display: flex; justify-content: space-between;flex-direction: column;border: .5px solid rgb(145, 230, 76);padding: 5px; margin:7px ">
             
           <a>  <b>Company Name:</b>${ei.company_name}  </a>
<a ><b>Title:</b>${ei.title}</a>
<a><b>url:</b>${ei.url}</a>
 <a><b>job_types:</b>${ei.job_types[0]}</a>
<a><b>location:</b>${ei.location}</a>
           </div>
                `
                let addval = document.getElementById('addval');
                addval.insertAdjacentHTML('afterend', de.outerHTML)

            }

        }).catch(e=>{
            console.log(e);
        })

        let some = document.getElementById('some');

        some.style='visibility:hidden;display:none';

    
    }
    funbutton();
    
     let resultvalue=false;  
    button1.addEventListener('click', (e) => {
 e.preventDefault();
        if(resultvalue===false){
            resultvalue=true;
        }
        else{
            resultvalue=false;

        }
        if(resultvalue){
            let some = document.getElementById('some');

            let view = document.querySelector('.view1');
            initeal_view += 1;
             view.innerHTML = `<a>${initeal_view} views</a>`;
                  
            some.style='visibility:visible;display:block';
            button1.innerText='Hide'; 

         }
        if(!resultvalue){
            let some = document.getElementById('some');

            some.style='visibility:hidden;display:none';
            button1.innerText='View'; 

        }

})
 


let initeal_view6 = 1.4 * k;
let resultvalue1=false;

//  all job arry or api thaka nia display
function jobview(){
      
    for(let e of job ){ 
        //  loop ar under create korta hoba div na hola akta div a barbar innerhtml a change hocha
        let d3 = document.createElement('div');
        d3.setAttribute('class', "sub1");
        d3.innerHTML = `
 <div style="display: flex; justify-content: space-between;flex-direction: column;border: .5px solid rgb(145, 230, 76);padding: 5px; margin:7px ">

 <a>uuid:${e.description} </a> 
       <a>description:${e.uuid}  </a>
     <a>title:${e.title}  </a>
     </div>
     `
        let some1 = document.getElementById('some1');
        some1.insertAdjacentHTML('afterend', d3.outerHTML)
 }
 let result1 = document.getElementById('result1');

 result1.style='visibility:hidden;display:none';
     
 
}
jobview();
// display none opp display block event listner through handel hoda
     button2.addEventListener('click', (e) => {
 e.preventDefault();
        if(resultvalue1===false){
            resultvalue1=true;
        }
        else{
            resultvalue1=false;

        }
        if(resultvalue1){
            let result1 = document.getElementById('result1');

             // change on  of view  increase in amdabad location
    let view = document.querySelector('.view2');
    initeal_view6 += 1;
     view.innerHTML = `<a>${initeal_view6} views</a>`;
            result1.style='visibility:visible;display:block';
            button2.innerText='Hide'; 

         }
        if(!resultvalue1){
            let result1 = document.getElementById('result1');

            result1.style='visibility:hidden;display:none';
            button2.innerText='View'; 

        }

})

 


// whatapp a click korla option render hoba
// 1 no share button
let share = document.getElementById('share');
 let sharemain = document.getElementById('sharemain');


let medium = [
    { type: 'Massage', name: 'WhatsApp', example: 'Hey, how are you?' },
    { type: 'Massage', name: ' Messenger', example: 'Nice to meet you!' },
    { type: 'Image Share', name: 'Instagram', example: 'Check out this beautiful photo!' },
    { type: 'Image Share', name: 'Snapchat', example: 'Sending you a fun snap!' }
];

// 1 no share
let indecator = false;
  
    // step-1  function under arry or api value ka dynamcaly lika end a fun ka call sa cas 1 bar create hobe
     function fun11(){
 for(let e of medium ){ 
 
             let div21 = document.createElement('div');
            div21.setAttribute('id', 'middleempty');

            div21.innerHTML = `<div style="display: flex;align-items: center;margin-right:40px;font-size: medium; margin-top:10px;color: rgb(85, 238, 228); ">
   
    <p >${e.name}</p>

    </div>`
            let empty = document.getElementById('empty');
             empty.insertAdjacentHTML('afterend', div21.outerHTML);
             
         }
        //  intialy 
         sharemain.style='visibility:hidden;display:none';

          
    }
    //step-2 function call
    fun11();
      
//step-3  event listner handel
 share.addEventListener('click', () => {
    if (indecator===true) {
        indecator = false;
    }
    else {
        indecator = true;
    }
    if(indecator){
        // disply ->none opposit display->block
        sharemain.style='visibility:visible;display:block';

    }
    if(!indecator){
        sharemain.style='visibility:hidden;display:none';

    }

})
// share.addEventListener('click', (e) => {
//     e.preventDefault();

//     window.history.back();
//  })


 


// 2 no share button
// **** api to data but casa 1 bar create hoba ae casa div api thaka asa value outside of event functo
//  create hoccha like {ticketbooking.js }..
//*** poblemb  =>{initialy hidden kora jaba na} solution=>{fun under purota ka wrap korla inital kora jaba}
let share1 = document.getElementById('share1');
 
function normalwrap(){
    let div2 = document.createElement('div');
            div2.setAttribute('id', 'mediamname');
    
    for(let e of medium){       
                div2.innerHTML = `<div style=" display: flex;align-items: center;margin-right:40px;font-size: medium; margin-top:10px;color: rgb(85, 238, 228); ">
           
            <p >${e.name}</p>
            </div>`
                 let empty = document.getElementById('empty3');
                  empty.insertAdjacentHTML('afterend',div2.outerHTML);
            }    
            let sharehide = document.querySelector('.sharehide');
    
            sharehide.style='visibility:hidden;display:none';
    
        }
        normalwrap();
    // funtion must cholba 
 share1.addEventListener('click', () => {
    let sharehide = document.querySelector('.sharehide');

    sharehide.style='visibility:visible;display:block';
    
    })
    share1.addEventListener('dblclick', () => {

        let sharehide = document.querySelector('.sharehide');

        sharehide.style='visibility:hidden;display:none';
                     
            })
    

  
// 3 no share button
// like 2 no but using true false
let share2 = document.getElementById('share2');
 
function normalwrap1(){
let div2 = document.createElement('div');
        div2.setAttribute('id', 'mediamname');

for(let e of medium){       
            div2.innerHTML = `<div style=" display: flex;align-items: center;margin-right:40px;font-size: medium; margin-top:10px;color: rgb(85, 238, 228); ">
       
        <p >${e.name}</p>
        </div>`
             let empty = document.getElementById('empty1');
              empty.insertAdjacentHTML('afterend',div2.outerHTML);
        }    
        let forhide = document.querySelector('.forhide');

        forhide.style='visibility:hidden;display:none'        // Set the initial visibility to hidden

    }
    normalwrap1();
    // funtion must cholba 
    let mediavalue=false;
 share2.addEventListener('click', () => {
    let forhide = document.querySelector('.forhide');
if(mediavalue){
    mediavalue=false;  
 
}
else{
    mediavalue=true;
}
if(mediavalue){
    forhide.style='visibility:visible;display:block';
}
if(!mediavalue){
    forhide.style='visibility:hidden;display:none';
}
    })
     
    

// 4 no share button
// same as 1,2 but using terneary
let share3 = document.getElementById('share3');
 
function normalwrap2(){
let div2 = document.createElement('div');
        div2.setAttribute('id', 'mediamname');

for(let e of medium){       
            div2.innerHTML = `<div style=" display: flex;align-items: center;margin-right:40px;font-size: medium; margin-top:10px;color: rgb(85, 238, 228);overflow-x:hidden; ">
       
        <p >${e.name}</p>
        </div>`
             let empty = document.getElementById('empty2');
              empty.insertAdjacentHTML('afterend',div2.outerHTML);
        }    
        let hideterneary = document.querySelector('.hideterneary');

        hideterneary.style='visibility:hidden;display:none'        // Set the initial visibility to hidden

    }
    normalwrap2();
    // funtion must cholba 
  share3.addEventListener('click', () => {
    let hideterneary = document.querySelector('.hideterneary');
    // hideterneary.style='visibility:visible;display:none'? hideterneary.style='visibility:hidden;display:none': hideterneary.style='visibility:visible;display:block';
    hideterneary.style='visibility:vissible;display:block'        // Set the initial visibility to hidden

    })
    share3.addEventListener('dblclick', () => {
        let hideterneary = document.querySelector('.hideterneary');
        // hideterneary.style='visibility:visible;display:none'? hideterneary.style='visibility:hidden;display:none': hideterneary.style='visibility:visible;display:block';
        hideterneary.style='visibility:hidden;display:none'        // Set the initial visibility to hidden
    
        })

let searchbar = document.getElementById('searchbar');
// a casa enter by default event enter kola enventhandelar stop hoa jaba
searchbar.addEventListener('change', (e) => {
    e.preventDefault();
    let jobs = document.getElementById('jobs');
    jobs.innerHTML = `<a>${e.target.value},India</a>`;
    searchbar.value = "";
})

// red circle on click scarch bar focas hoba
circle.addEventListener('click', () => {
    let searchbar = document.getElementById('searchbar');
    // searchbar exixt thak la
    if (searchbar) {
        // cursa will rich on this location
        searchbar.focus();
    }

})



// main.html follow groups start 
let grops = [
    { img: './Rectangle 6.png', name: 'Leisure', button: 'Follow' },
    { img: './Rectangle 6 (1).png', name: 'Activism', button: 'follow' },
    { img: './Rectangle 6 (2).png', name: 'MBA', button: 'follow' },
    { img: './Rectangle 6 (3).png', name: 'Philosophy', button: 'Follow' },
];



// write a post 1 on write button
// aka chalanor janno 190 no line thaka comment
let post = document.getElementById('postform');

post.addEventListener('submit', (e) => {
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
            let div1 = document.createElement('div');
            div1.setAttribute('id', 'postall');

            div1.innerHTML = `<div style="display: flex;flex-direction: column;padding: 5px 7px; margin: 10px 10px; flex-wrap: wrap;border-radius: 10px; border: .01px solid blue;" >
       <a>subject:${select1}</a>
       <a>Inquery:${text1}</a>
       <a>Time:${new Date(8.64e15).toString()}</a>
        

        </div>
        `
            let posts = document.getElementById('posts');

            posts.insertAdjacentHTML('afterend', div1.outerHTML);


        })

})




//  boostrap ar class ar id ta kaj hoba na new id dita hoba kaj koranor janno
 let jobs=document.querySelectorAll('.querys');
 let values=false;

    jobs.forEach(element => {
         element.addEventListener('click',(e)=>{

    values=true;

    
    // e.preventDefault();
          let postdata=document.getElementById('postdata');
          console.log(values)
          if(values==true){
    postdata.style.visibility='visible';
    let te=document.getElementById('text11');
    te.focus();
          }
           
     
        });
 })
 
let jobss=document.querySelector('.jobss');
jobss.addEventListener('click',()=>{
    if(    values=true){
        let postdata=document.getElementById('postdata');
        postdata.style.visibility='hidden';
        values=false;
    }
})

//  insteed of dbl click if else use
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
    if (email === '' || password === '') {
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

    if (email === '' || pass === '') {
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


// for youtubu vedios
// 1.for search {for any serch }
// let searchurl=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${qury}&key=AIzaSyAxTE23s4UXmVX2XYfi1dZbNx1pJxrsj2s`

// channel id hisaba vedio
// let url1 = 'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAxTE23s4UXmVX2XYfi1dZbNx1pJxrsj2s&channelId=UCwfaAHy4zQUb2APNOGXUCCA&part=snippet,id&order=date&maxResults=10';

//2. for all popular vedio {all vedio}
let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyD9k1boQl04rNgL3zHK6dVwrBNMN_rFOxc&maxResults=10';

function fun() {
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      let xy=document.querySelector('.dout');
xy.innerHTML=null;

// for url 1
// let {items}=data;
// let {id}=e;
// emded/${id.vedioId}
      let {items}=data;
      for (let e of items) {
          let a=document.createElement('div');
          
    a.setAttribute('id','vedio');
a.innerHTML=` <iframe  style="width:200px;height:200px;display:flex;flex-wrap:wrap;"   object-cover' src=https://www.youtube.com/embed/${e.id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
`
// let xy=document.querySelector('.dout');
// belllow two same work perform 
// xy.insertAdjacentHTML('afterbegin',a.outerHTML);
xy.append(a);
}

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

fun();
// https://youtube.googleapis.com/youtube/v3/search?maxResults=10&key=AIzaSyAxTE23s4UXmVX2XYfi1dZbNx1pJxrsj2s

// for scarch on youtube
async function seachh(){
  
     let qury=document.getElementById('in').value;
   let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${qury}&key=AIzaSyD9k1boQl04rNgL3zHK6dVwrBNMN_rFOxc`);
    let data=await res.json();
          console.log(data)
let {items}=data;
     for (let ei of items) {
    let {id}=ei;
           let a=document.createElement('div');
        
  a.setAttribute('id1','vedio1');
a.innerHTML=` <iframe  style="width:400px;height:200px;display:flex;flex-wrap:wrap;"   object-cover' src=https://www.youtube.com/embed/${id.videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  `

 let xy=document.querySelector('.dout1');
// belllow two same work perform 
// xy.insertAdjacentHTML('afterbegin',a.outerHTML);
xy.append(a);
}

}


