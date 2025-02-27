document.getElementById("envelope").addEventListener("click", function() {
    const note = document.getElementById("note");
    const flap = document.querySelector(".flap");

    // Open the envelope and show the note
    flap.style.transform = "rotateX(180deg)";
    note.style.transform = "translateY(-30px)";
    note.style.opacity = "1";

    // Disable further clicks to prevent repeated animations
    this.style.pointerEvents = "none";
});
