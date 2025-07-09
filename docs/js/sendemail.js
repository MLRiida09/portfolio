
function sendEmail(event) {
    event.preventDefault(); // ❗️This line prevents the form from submitting normally

    let parm = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_w2dh65l", "template_ii51066", parm)
    .then(function(response) {
        showPopup("email-success");
        document.getElementById("contact-form").reset();
    }, function(error) {
        showPopup("email-failure");

    });
        function showPopup(id) {
        const popup = document.getElementById(id);
        popup.style.display = 'block';
        setTimeout(() => {
        popup.style.display = 'none';
    },  3000);
}

}
