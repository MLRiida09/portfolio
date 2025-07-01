function sendEmail(event) {
  event.preventDefault(); // تمنع الإرسال الافتراضي للنموذج

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_w2dh65l", "template_ii51066", params)
    .then(function (response) {
      showPopup("email-success");
      document.getElementById("contact-form").reset();
    }, function (error) {
      showPopup("email-failure");
    });
}

// ✅ دالة عرض النافذة المنبثقة
function showPopup(id) {
  const popup = document.getElementById(id);
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}

