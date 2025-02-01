// EmailJS boshlang‘ich sozlash
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("04NXoosdF_RSP8MF4"); // Public Key'ni joylashtiring
});

// Form yuborish funksiyasi
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const statusMessage = document.getElementById("status");
    statusMessage.textContent = "Yuborilmoqda...";
    statusMessage.className = "status-message";

    emailjs.sendForm("service_7eylf4x", "template_w4bskyi", this)
        .then(function () {
            statusMessage.textContent = "Xabar muvaffaqiyatli yuborildi!";
            statusMessage.classList.add("success");
        })
        .catch(function (error) {
            console.error("Xatolik yuz berdi:", error);
            statusMessage.textContent = "Xabar yuborishda xatolik yuz berdi. Qayta urinib ko‘ring.";
            statusMessage.classList.add("error");
        });
});
