document.addEventListener('DOMContentLoaded', function() {
    const cita = JSON.parse(localStorage.getItem('citaGuardada'));
    if (cita) {
        const resumen = document.createElement('div');
        resumen.innerHTML = `
            <p><strong>Trámite:</strong> ${cita.tramite}</p>
            <p><strong>Oficina:</strong> ${cita.oficina} (${cita.provincia})</p>
            <p><strong>Fecha y hora:</strong> ${cita.fecha} a las ${cita.hora}</p>
            <p><strong>DNI/NIE:</strong> ${cita.dni}</p>
            <p><strong>Contacto:</strong> ${cita.telefono} / ${cita.email}</p>
        `;
        document.querySelector('.alert-info').appendChild(resumen);
      
    }
});