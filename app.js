document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Reloj en tiempo real
    function updateClock() {
        const timeDisplay = document.getElementById('currentTime');
        if (timeDisplay) {
            const now = new Date();
            timeDisplay.textContent = now.toLocaleTimeString('es-CL');
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Navegación entre pestañas
    const navItems = document.querySelectorAll('.nav-item');
    const dashboardPage = document.getElementById('page-dashboard');
    const placeholderPage = document.getElementById('page-placeholder');
    const pageTitle = document.getElementById('pageTitle');
    const placeholderTitle = document.getElementById('placeholderTitle');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageTarget = item.getAttribute('data-page');
            
            // Actualizar clase activa en el menú
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Actualizar título
            const label = item.querySelector('strong').textContent;
            pageTitle.textContent = label;

            // Alternar vista entre Dashboard y Módulos en construcción
            if (pageTarget === 'dashboard') {
                dashboardPage.classList.add('active');
                placeholderPage.classList.remove('active');
            } else {
                dashboardPage.classList.remove('active');
                placeholderPage.classList.add('active');
                placeholderTitle.textContent = label;
            }
        });
    });

    // 3. Botón de refresco manual
    const refreshButton = document.getElementById('refreshButton');
    if (refreshButton) {
        refreshButton.addEventListener('click', () => {
            const lastSync = document.getElementById('lastSync');
            const now = new Date();
            
            refreshButton.textContent = '↻ Actualizando...';
            
            setTimeout(() => {
                refreshButton.textContent = '↻ Actualizar';
                lastSync.textContent = now.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
                
                // Simulación de cambio de tráfico
                const networkVal = document.getElementById('networkValue');
                if (networkVal) {
                    networkVal.textContent = Math.floor(Math.random() * (850 - 650) + 650);
                }
            }, 600);
        });
    }
});
