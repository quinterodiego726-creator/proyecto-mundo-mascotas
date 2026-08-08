document.addEventListener('DOMContentLoaded', () => {

    // Validación del formulario de contacto //
    const formulario = document.getElementById('formulario-contacto');
    const mensajeError = document.getElementById('mensaje-error');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            mensajeError.textContent = '';

            if (nombre === '' || email === '' || mensaje === '') {
                mensajeError.style.color = 'red';
                mensajeError.textContent = 'Todos los campos son obligatorios.';
                return;
            }

            if (!regexEmail.test(email)) {
                mensajeError.style.color = 'red';
                mensajeError.textContent = 'Ingresa un correo electrónico válido.';
                return;
            }

            mensajeError.style.color = 'green';
            mensajeError.textContent = '¡Mensaje enviado correctamente!';
            formulario.reset();
        });
    }

    //  Ocultar y mostrar los horarios de atención//
    const btnHorarios = document.getElementById('btn-horarios');
    const contenidoHorarios = document.getElementById('contenido-horarios');

    if (btnHorarios && contenidoHorarios) {
        btnHorarios.addEventListener('click', () => {
            if (contenidoHorarios.style.display === 'none') {
                contenidoHorarios.style.display = 'block';
                btnHorarios.textContent = 'Ocultar Horarios de Atención';
            } else {
                contenidoHorarios.style.display = 'none';
                btnHorarios.textContent = 'Mostrar Horarios de Atención';
            }
        });
    }

});