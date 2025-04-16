"use strict";

const modal = document.getElementById("product-modal");
const overlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const awardItems = document.querySelectorAll(".award-content");

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  modal.classList.remove("modal-award", "modal-product");
}

document.querySelectorAll(".btn-open").forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = event.currentTarget.closest(".product-images");
    const title = product.dataset.title;
    const description = product.dataset.description.replace(/\n/g, "<br>");
    const imageSrc = product.dataset.image;

    // Set content
    modalTitle.textContent = title;
    modalDescription.innerHTML = description;
    modalImage.src = imageSrc;
    modalImage.alt = title;

    // Assign product-specific class
    modal.classList.remove("modal-award");
    modal.classList.add("modal-product");

    // Show modal
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

awardItems.forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.getAttribute("data-title");
    const description = item.getAttribute("data-description").replace(/\n/g, "<br>");
    const image = item.getAttribute("data-image");
    const imageClass = item.getAttribute("data-class");

    // Set content
    modalTitle.textContent = title;
    modalDescription.innerHTML = description;
    modalImage.src = image;
    modalImage.alt = title;

    // Assign award-specific class
    modal.classList.remove("modal-product");
    modal.classList.add("modal-award");

    modalImage.className = "";
    if (imageClass) {
      modalImage.classList.add(imageClass);
    }

    // Show modal
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

// Close modal logic
document.querySelector(".btn-close").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

