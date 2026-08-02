// Hiệu ứng chào mừng
console.log("KhánhMod Premium đã tải thành công!");

// Cuộn mượt
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
