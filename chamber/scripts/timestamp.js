document.addEventListener('DOMContentLoaded', () => {
    const timestampInput = document.getElementById('timestamp');
    
    // Obtener la fecha y hora actuales
    const now = new Date();
    const formattedTimestamp = now.toISOString(); // Formato ISO (YYYY-MM-DDTHH:MM:SSZ)
    
    // Asignar el timestamp al campo oculto
    timestampInput.value = formattedTimestamp;
});