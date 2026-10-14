
const navContainer = document.querySelector('#nav-container');
const navItems = document.querySelectorAll('.nav-li');
const line = document.querySelector('#line');

function moveLine(item, animate = true) {
    if (!item || !line || !navContainer) return;

    const link = item.querySelector('a');

    const itemRect = link.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();

    const left = itemRect.left - containerRect.left;

    if (!animate) {
        line.style.transition = 'none';
    }

    line.style.left = `${left}px`;
    line.style.width = `${itemRect.width}px`;

    if (!animate) {
        line.offsetHeight;
        line.style.transition = '';
    }
}

navItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        const link = item.querySelector('a');

        if (!link) return;

        const target = document.querySelector(
            link.getAttribute('href')
        );

        // Atualiza o item selecionado
        navItems.forEach((navItem) => {
            navItem.classList.remove('active-nav');
        });

        item.classList.add('active-nav');

        // Move a linha vermelha
        moveLine(item);

        // Se o destino não existir, evita um erro de navegação
        if (!target) {
            event.preventDefault();
        }
    });
});

// Inicializa a linha no item ativo
function initializeMenu() {
    const activeItem = document.querySelector(
        '#nav-container .active-nav'
    );

    moveLine(activeItem, false);
}

window.addEventListener('load', initializeMenu);
window.addEventListener('resize', initializeMenu);
