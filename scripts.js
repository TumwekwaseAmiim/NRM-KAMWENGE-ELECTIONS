console.log(
  "%cNRM Kamwenge Election page loaded successfully.",
  "color: green; font-weight: bold; font-size: 14px;"
);

// Show alert when an image is clicked
document.querySelectorAll(".images-container img").forEach(img => {
  img.addEventListener("click", () => {
    alert("🟨🖤 Support NRM! Vote Hon. Frank Tumwebaze – May 23, 2025 🖤🟨");
  });

  // Optional: Log hover for developer debugging
  img.addEventListener("mouseenter", () => {
    console.log("Hovering over an NRM campaign image.");
  });
});

// Image loading error handler
document.querySelectorAll(".images-container img").forEach(img => {
  img.onerror = () => {
    console.warn("⚠️ Image failed to load:", img.src);
    img.style.display = "none"; // hide broken image
  };
});
