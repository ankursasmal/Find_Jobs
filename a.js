let signInform = document.getElementById('signIn');
let password = document.getElementById('n4');
let cpassword = document.getElementById('n5');
let pass = document.getElementById('pass');
let cpass = document.getElementById('pass');
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

function onsubmit2() {
    var email = document.getElementById("signemail").value;
    var password = document.getElementById("signpassword").value;

    if (email === "" || !isValidEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password === "") {
        alert("Please enter your password");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// for form validation

function validateForm() {
    var firstName = document.getElementById("n1").value;
    var lastName = document.getElementById("n2").value;
    var email = document.getElementById("n3").value;
    var password = document.getElementById("n4").value;
    var confirmPassword = document.getElementById("n5").value;

     
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return false;
    }

    if (email.length<11 || email[email.length-4]!=='.' ||email.substr(email.length-9,email.length-1)!=='gmail.com' ||email[email.length-10]!=='@'|| !isValidEmail(email)) {
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
         var firstName1 = document.getElementById('name').value;
        var lastName1 = document.getElementById('lastname').value;
        var email1 = document.getElementById('email').value;
        var password1 = document.getElementById('pass').value;
        var confirmPassword1 = document.getElementById('cpass').value;

         if (firstName1 === '' || lastName1 === '' || email1 === '' || password1 === '' || confirmPassword1 === '') {
            alert('All fields must be filled out');
            return false;
        }
        if (email1.length<11 || email1[email1.length-4]!=='.' ||email1.substr(email1.length-9,email1.length-1)!=='gmail.com' ||email1[email1.length-10]!=='@'|| !isValidEmail(email1)) {
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
 

 