function sendEmail(event) {
    event.preventDefault(); // منع الإرسال التقليدي

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        showPopup("email-failure", "يرجى ملء جميع الحقول");
        return;
    }

    const params = {
        name: name,
        email: email,
        message: message,
    };

    emailjs.send("service_w2dh65l", "template_ii51066", params)
        .then(function () {
            showPopup("email-success", "✅ تم إرسال الرسالة بنجاح");
            document.getElementById("contact-form").reset();
        }, function (error) {
            console.error("فشل الإرسال:", error);
            showPopup("email-failure", "❌ حدث خطأ أثناء الإرسال");
        });
        // عرض رسالة منبثقة
function showPopup(id, msg) {
    const popup = document.getElementById(id);
    if (!popup) return;

    popup.textContent = msg;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}
}
