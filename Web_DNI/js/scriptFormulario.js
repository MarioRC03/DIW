
let pasoActual = 1;
let tramite = '';


function actualizarProgreso() {
    const porcentaje = ((pasoActual) / 4) * 100;
    const progressBar = document.getElementById('progressBar');
    
    progressBar.style.width = porcentaje + '%';
    progressBar.textContent = `Paso ${pasoActual} de 4`;
}


function seleccionarTramite(tr) {
    tramite = tr;
    console.log('Trámite seleccionado:', tramite); 
    avanzarPaso(1);
}

function avanzarPaso(desde) {
    if (desde === 1) {
        document.getElementById('paso1').classList.add('d-none');
        document.getElementById('paso2').classList.remove('d-none');
        pasoActual = 2;
        actualizarProgreso();
    } 
    else if (desde === 2) {
        const provincia = document.getElementById('provincia').value;
        const oficina = document.getElementById('oficina').value;
        
        if (!provincia || !oficina) {
            alert('Por favor, selecciona provincia y oficina');
            return;
        }
        
        document.getElementById('paso2').classList.add('d-none');
        document.getElementById('paso3').classList.remove('d-none');
        pasoActual = 3;
        actualizarProgreso();
    } 
    else if (desde === 3) {
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        
        if (!fecha || !hora) {
            alert('Por favor, selecciona fecha y hora');
            return;
        }
        
        document.getElementById('paso3').classList.add('d-none');
        document.getElementById('paso4').classList.remove('d-none');
        pasoActual = 4;
        actualizarProgreso();
    }
}

function volverPaso(desde) {
    if (desde === 2) {
        document.getElementById('paso2').classList.add('d-none');
        document.getElementById('paso1').classList.remove('d-none');
        pasoActual = 1;
        actualizarProgreso();
    } 
    else if (desde === 3) {
        document.getElementById('paso3').classList.add('d-none');
        document.getElementById('paso2').classList.remove('d-none');
        pasoActual = 2;
        actualizarProgreso();
    } 
    else if (desde === 4) {
        document.getElementById('paso4').classList.add('d-none');
        document.getElementById('paso3').classList.remove('d-none');
        pasoActual = 3;
        actualizarProgreso();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarProgreso();
    
    document.getElementById('formCita').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!this.checkValidity()) {
            e.stopPropagation();
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
});