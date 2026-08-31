const videos = document.querySelectorAll(".video");

videos.forEach(video => {
    video.addEventListener("click", () => {
        const pagina = video.dataset.pagina;

        window.location.href = pagina;
    });
});