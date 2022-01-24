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
    })
}