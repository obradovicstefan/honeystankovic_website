"use strict";

(() => {
  // Cache DOM elements
  const modal = document.getElementById("product-modal");
  const overlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImage = document.getElementById("modal-image");
  const closeButton = document.querySelector(".btn-close");
  const awardItems = document.querySelectorAll(".award-content");
  const productButtons = document.querySelectorAll(".btn-open");

  // Mobile Menu Functionality
  const initMobileMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuOverlay = document.getElementById("menu-overlay");

    if (!menuToggle || !mobileMenu || !menuOverlay) return;

    const toggleMenu = (e) => {
      if (e) e.stopPropagation();
      menuToggle.classList.toggle("open");
      mobileMenu.classList.toggle("active");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    };

    const closeMenu = () => {
      menuToggle.classList.remove("open");
      mobileMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    };

    menuToggle.addEventListener("click", toggleMenu);
    menuOverlay.addEventListener("click", closeMenu);

    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  };

  // Modal Functions
  const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    modal.classList.remove("modal-award", "modal-product");
  };

  const openModal = (data) => {
    const { title, description, image, isAward, imageClass } = data;

    modalTitle.textContent = title;
    modalDescription.innerHTML = description.replace(/\n/g, "<br>");
    modalImage.src = image;
    modalImage.alt = title;

    // Set modal class based on type
    modal.classList.remove(isAward ? "modal-product" : "modal-award");
    modal.classList.add(isAward ? "modal-award" : "modal-product");

    // Handle image class if provided
    modalImage.className = imageClass || "";

    // Show modal
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  // Event Listeners
  const setupEventListeners = () => {
    // Product buttons
    productButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const product = event.currentTarget.closest(".product-images");
        openModal({
          title: product.dataset.title,
          description: product.dataset.description,
          image: product.dataset.image,
          isAward: false,
        });
      });
    });

    // Award items
    awardItems.forEach((item) => {
      item.addEventListener("click", () => {
        openModal({
          title: item.getAttribute("data-title"),
          description: item.getAttribute("data-description"),
          image: item.getAttribute("data-image"),
          isAward: true,
          imageClass: item.getAttribute("data-class"),
        });
      });
    });

    // Close modal handlers
    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
  };

  // Initialize everything when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    setupEventListeners();
  });
})();
