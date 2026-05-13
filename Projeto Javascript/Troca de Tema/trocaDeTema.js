function trocarTema() {
    document.body.classList.toggle('dark');

    const btn = document.getElementById('btn-tema');
    const isDark = document.body.classList.contains('dark');
    btn.textContent = isDark ? '☀️ Modo claro' : '🌙 Modo escuro';
}