// Tạo các trái tim rơi
function createFallingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");

  // Tạo vị trí ngẫu nhiên cho mỗi trái tim
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heart.style.opacity = Math.random() * 0.5 + 0.5;

  document.body.appendChild(heart);

  // Xóa trái tim sau khi hoàn tất animation
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

// Tạo trái tim rơi liên tục
setInterval(createFallingHeart, 300);
