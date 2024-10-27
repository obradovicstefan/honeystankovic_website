"use strict";

const modal = document.getElementById("product-modal");
const overlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");


function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


document.querySelectorAll(".btn-open").forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = event.currentTarget.closest(".product-images");
    const title = product.dataset.title;
    const description = product.dataset.description.replace(/\n/g, '<br>'); 
    const imageSrc = product.dataset.image;


    // Update modal content
    modalTitle.textContent = title;
    modalDescription.innerHTML = description;
    modalImage.src = imageSrc;
    modalImage.alt = title;
    

    // Show modal and overlay
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

// Close modal logic
document.querySelector('.btn-close').addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

