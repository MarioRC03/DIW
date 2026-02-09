let pasoActual = 1;
  let tramite = '';

  function elegir(tr) {
    tramite = tr;
    avanzar(1);
  }

  function avanzar(desde) {
    if (desde === 1) {
      document.getElementById('pasoTramite').classList.remove('activo');
      document.getElementById('pasoUbicacion').classList.add('activo');
      document.getElementById('progreso').style.width = '50%';
      document.getElementById('progreso').textContent = 'Paso 2 de 4';
      pasoActual = 2;
    } else if (desde === 2) {
      if (!document.getElementById('provincia').value || !document.getElementById('oficina').value) {
        alert('Selecciona provincia y oficina');
        return;
      }
      document.getElementById('pasoUbicacion').classList.remove('activo');
      document.getElementById('pasoFecha').classList.add('activo');
      document.getElementById('progreso').style.width = '75%';
      document.getElementById('progreso').textContent = 'Paso 3 de 4';
      pasoActual = 3;
    } else if (desde === 3) {
      document.getElementById('pasoFecha').classList.remove('activo');
      document.getElementById('pasoDatos').classList.add('activo');
      document.getElementById('progreso').style.width = '100%';
      document.getElementById('progreso').textContent = 'Paso 4 de 4';
      pasoActual = 4;
    }
  }

  function volver(desde) {
    if (desde === 2) {
      document.getElementById('pasoUbicacion').classList.remove('activo');
      document.getElementById('pasoTramite').classList.add('activo');
      document.getElementById('progreso').style.width = '25%';
      document.getElementById('progreso').textContent = 'Paso 1 de 4';
    } else if (desde === 3) {
      document.getElementById('pasoFecha').classList.remove('activo');
      document.getElementById('pasoUbicacion').classList.add('activo');
      document.getElementById('progreso').style.width = '50%';
      document.getElementById('progreso').textContent = 'Paso 2 de 4';
    } else if (desde === 4) {
      document.getElementById('pasoDatos').classList.remove('activo');
      document.getElementById('pasoFecha').classList.add('activo');
      document.getElementById('progreso').style.width = '75%';
      document.getElementById('progreso').textContent = 'Paso 3 de 4';
    }
  }

  document.getElementById('formularioCita').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.checkValidity()) {
      this.classList.add('was-validated');
      return;
    }

    const datos = {
      tramite: tramite,
      provincia: document.getElementById('provincia').value,
      oficina: document.getElementById('oficina').value,
      fecha: document.getElementById('fecha').value,
      hora: document.getElementById('hora').value,
      dni: document.getElementById('dni').value,
      telefono: document.getElementById('telefono').value,
      email: document.getElementById('email').value
    };

    localStorage.setItem('citaGuardada', JSON.stringify(datos));
    window.location.href = 'confirmacion.html';
  });