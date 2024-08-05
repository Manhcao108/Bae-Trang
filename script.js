document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${Math.random() * 2 + 3}s`;
    });
});
