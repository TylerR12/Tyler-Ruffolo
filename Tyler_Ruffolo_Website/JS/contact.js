//Send Email
function sendEmail(params){
    var tempParams = {
        from_name: document.getElementById("first_name").value,
        from_email: document.getElementById("user_email").value,
        to_name: "Tyler",
        message: document.getElementById("message-text").value,

    };

    emailjs.send('service_9hwpqnb','template_56k20ss',tempParams)
    .then(function(res){
        console.log("success", res.status);
        reset();
    })
}

function reset(){
    var success = document.getElementById("success");
    success.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("user_email").value = "";
    document.getElementById("message-text").value = "";
}

function close_pop(){
    document.getElementById("success").style.display = "none";
    document.getElementById("overlay").style.display = "none";

}