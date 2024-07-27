function sendMail(){
    var params = {
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        body: document.getElementById("body").value
    }
    emailjs.send("service_kyv692r", "template_1a1l5mj",params).then(function (res){
        alert("Successfully sent.")
    })
    console.log("success")
}
