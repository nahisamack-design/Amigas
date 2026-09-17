 // ==========================================
// ELEMENTOS
// ==========================================

const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const envelope = document.getElementById("envelope");
const messageCard = document.getElementById("messageCard");
const final = document.getElementById("final");


// ==========================================
// ABRIR REGALO
// ==========================================

function abrirRegalo() {

    // Explosión de flores
    crearParticulas(25);

    intro.style.transition = "1s ease";
    intro.style.opacity = "0";
    intro.style.transform = "scale(.85)";

    setTimeout(() => {

        intro.classList.add("hidden");

        letter.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        crearParticulas(15);

    }, 800);
}


// ==========================================
// ABRIR SOBRE
// ==========================================

envelope.addEventListener("click", () => {

    // Evitar múltiples clics
    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    crearParticulas(20);

    // Cambiar texto
    const hint = document.querySelector(".envelope-hint");

    hint.style.opacity = "0";

    // Mostrar carta después de la animación
    setTimeout(() => {

        envelope.style.display = "none";

        hint.style.display = "none";

        messageCard.classList.remove("hidden");

        crearParticulas(15);

    }, 1200);

});


// ==========================================
// SORPRESA FINAL
// ==========================================

function mostrarSorpresa() {

    messageCard.style.transition = "1s ease";

    messageCard.style.opacity = "0";

    messageCard.style.transform =
        "scale(.8) translateY(-40px)";

    crearParticulas(35);

    setTimeout(() => {

        letter.classList.add("hidden");

        final.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Gran lluvia de flores
        crearParticulasFinales(55);

    }, 900);
}


// ==========================================
// VOLVER A EMPEZAR
// ==========================================

function reiniciar() {

    final.classList.add("hidden");

    intro.classList.remove("hidden");

    intro.style.opacity = "1";
    intro.style.transform = "scale(1)";

    envelope.classList.remove("open");

    envelope.style.display = "block";

    messageCard.classList.add("hidden");

    messageCard.style.opacity = "1";
    messageCard.style.transform = "none";

    const hint = document.querySelector(".envelope-hint");

    hint.style.display = "block";
    hint.style.opacity = ".55";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// PARTICULAS NORMALES
// ==========================================

function crearParticulas(cantidad) {

    const container =
        document.getElementById("particles");

    const elementos = [
        "🌼",
        "🌻",
        "💛",
        "✨"
    ];

    for (let i = 0; i < cantidad; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.textContent =
            elementos[
                Math.floor(
                    Math.random() * elementos.length
                )
            ];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.fontSize =
            (Math.random() * 18 + 12) + "px";

        particle.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        particle.style.animationDelay =
            Math.random() * .8 + "s";

        container.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 7000);
    }
}


// ==========================================
// PARTICULAS DE LA SORPRESA FINAL
// ==========================================

function crearParticulasFinales(cantidad) {

    const container =
        document.getElementById("finalParticles");

    const elementos = [
        "🌻",
        "🌼",
        "✨",
        "💛",
        "🌿"
    ];

    for (let i = 0; i < cantidad; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.textContent =
            elementos[
                Math.floor(
                    Math.random() * elementos.length
                )
            ];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.fontSize =
            (Math.random() * 22 + 12) + "px";

        particle.style.animationDuration =
            (Math.random() * 4 + 4) + "s";

        particle.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 10000);
    }
}


// ==========================================
// FLORES AL CARGAR
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        crearParticulas(8);

    }, 1000);

});