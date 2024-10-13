// Dynamically populate the current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

function generateCalendar() {
    const calendarHeader = document.getElementById('calendar-header');
    const calendarGrid = document.getElementById('calendar-grid');
    const today = new Date();

    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();

    // Set calendar header
    calendarHeader.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    // Clear previous grid
    calendarGrid.innerHTML = '';

    // Get first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add day names (Sun, Mon, etc.)
    dayNames.forEach(day => {
      const dayElement = document.createElement('div');
      dayElement.textContent = day;
      calendarGrid.appendChild(dayElement);
    });

    // Add empty spaces before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      calendarGrid.appendChild(emptyCell);
    }

    // Add days of the month
    for (let date = 1; date <= lastDate; date++) {
      const dateElement = document.createElement('div');
      dateElement.textContent = date;
      dateElement.classList.add('calendar-day');

      // Highlight today's date
      if (date === currentDate) {
        dateElement.classList.add('today');
      }

      calendarGrid.appendChild(dateElement);
    }
}

// Generate the calendar when the page loads
window.onload = generateCalendar;
