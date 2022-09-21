(() => {
    // Select HTML Elements
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector("header");
    const navList = document.querySelector(".nav-list");

    // Handles Mobile Navigation Bar
    const toggleMobileNav = () => {
        header.classList.toggle("open");
    };

    // Event Listeners
    hamburger.addEventListener("click", toggleMobileNav);
    navList.addEventListener("click", toggleMobileNav);

    // Loading Animation
    window.addEventListener("load", () => {
        if (document.readyState === "complete") {
            document.body.classList.add("loaded");
            AOS.init({
                delay: 100,
                once: true,
            });
        }
    });

    // Download Popup
    const downloadBtns = document.querySelectorAll(".download");
    const downloadPopup = document.querySelector(".download-popup-container");
    const downloadPopupCloseBtn = document.querySelector(".popup-close");

    downloadBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            downloadPopup.classList.add("show");
        });
    });

    downloadPopupCloseBtn.addEventListener("click", () => {
        downloadPopup.classList.remove("show");
    });
})();
