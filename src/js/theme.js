function toggleTheme() {
    const theme = document.body.classList.toggle('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    $('#toggleTheme').html('<i class="bi bi-circle-half" style="font-size: 1rem;"></i> Cambiar Tema');
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

export { toggleTheme, initializeTheme };
