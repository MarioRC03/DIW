const cita = JSON.parse(localStorage.getItem('citaGuardada'));
  const contenedor = document.getElementById('resumenCita');

  if (cita) {
    contenedor.innerHTML = `
      <strong>Trámite:</strong> ${cita.tramite}<br>
      <strong>Oficina:</strong> ${cita.oficina} (${cita.provincia})<br>
      <strong>Fecha:</strong> ${new Date(cita.fecha).toLocaleDateString('es-ES')}<br>
      <strong>Hora:</strong> ${cita.hora}<br>
      <strong>DNI/NIE:</strong> ${cita.dni}<br>
      <strong>Contacto:</strong> ${cita.telefono} / ${cita.email}
    `;
    localStorage.removeItem('citaGuardada');
  } else {
    contenedor.innerHTML = 'No se encontraron datos de cita. Por favor, realiza una nueva solicitud.';
    contenedor.classList.add('alert-warning');
  }