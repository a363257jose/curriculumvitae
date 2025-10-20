// ===== Acordeón personalizado =====
document.querySelectorAll(".acordeon-btn").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");

    const content = button.nextElementSibling;
    content.classList.toggle("show");

    // Cerrar los otros acordeones (opcional)
    document.querySelectorAll(".acordeon-content").forEach(other => {
      if (other !== content) {
        other.classList.remove("show");
        other.previousElementSibling.classList.remove("active");
      }
    });
  });
});