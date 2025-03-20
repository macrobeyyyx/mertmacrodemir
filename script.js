document.addEventListener("DOMContentLoaded", function () {
    // Müzik oynatılırken diğerlerini durdurma
    const audioPlayers = document.querySelectorAll("audio");
    audioPlayers.forEach(player => {
      player.addEventListener("play", function () {
        audioPlayers.forEach(otherPlayer => {
          if (otherPlayer !== player) {
            otherPlayer.pause();
          }
        });
      });
    });
  
    // Smooth Scroll: Navigasyondaki bağlantılara tıklandığında yumuşak geçiş
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: "smooth"
        });
      });
    });
  });
  