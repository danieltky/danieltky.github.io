
const swup = new Swup();

document.addEventListener('swup:contentReplaced', function () {
    // Force a page refresh
    window.location.reload();
});