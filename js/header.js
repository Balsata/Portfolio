const colorSwitch = document.querySelector('#switch input[type="checkbox"]');

function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'light');
    } else {
        document.documentElement.setAttribute('tema', 'dark');
    }
}

// Establecer el tema predeterminado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('tema', 'light'); // Establecer el tema predeterminado como light
    colorSwitch.checked = true; // Asegurarse de que el switch esté marcado para reflejar el tema predeterminado
    colorSwitch.addEventListener('change', cambiaTema); // Agregar el evento change después de establecer el estado predeterminado
});