document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os links do menu e todas as seções
    const menuLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section, header");

    // Função para mostrar apenas a seção clicada
    function mostrarSecao(id) {
        sections.forEach(secao => secao.style.display = "none"); // Esconde todas
        document.getElementById(id).style.display = "flex"; // Mostra a escolhida
    }

    // Exibe a primeira seção (Home) ao carregar a página
    mostrarSecao("header");

    // Adiciona evento de clique nos links do menu
    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            mostrarSecao(targetId);

            // Rolagem suave
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Ajuste para navbar fixa
                    behavior: "smooth"
                });
            }
        });
    });

    // Efeito de fade-in ao rolar a página
    const elementosAnimados = document.querySelectorAll(".fade-in");

    const observerOptions = {
        threshold: 0.2 // Definição da porcentagem do elemento visível para ativar a animação
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
            }
        });
    }, observerOptions);

    // Observando os elementos para aplicar o efeito de fade-in
    elementosAnimados.forEach((el) => observer.observe(el));

    // Lógica para o botão Home funcionar ao clicar
    const homeButton = document.querySelector("a[href='#header']");
    if (homeButton) {
        homeButton.addEventListener("click", (event) => {
            event.preventDefault();
            mostrarSecao("header");

            // Rolagem suave até a seção Home
            window.scrollTo({
                top: 0, // Topo da página
                behavior: "smooth"
            });
        });
    }
});
