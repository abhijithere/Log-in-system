const emailinput = document.getElementById("email");
const pwinput = document.getElementById("password");
const submitButton = document.getElementById("login");

submitButton.addEventListener("mouseover",(button)=>{
        let email=emailinput.value;
        let password=pwinput.value;
        // let validate = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+). ([a-z]+)?/.
        // test(email) && /[a-zA-Z0-9]{8}/.test(password);
        if(email=='sinhaabhijit2002@gmail.com' && password=="12345"){
            button.target.classList.add("stop");
            submitButton.style.background="green";
            document.getElementById("login").onclick = function () {
                location.href='login.html';
            };
        }
        else{
            button.target.classList.toggle("move");
            submitButton.style.background="red";
        }
})
