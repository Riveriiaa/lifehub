const addEventButton = document.querySelector('button');
const eventForm = document.querySelector('#event-form');

function handleAddEvent() {
    eventForm.hidden = false;
}

addEventButton.addEventListener('click', handleAddEvent);

function handleSaveEvent(event) {
    event.preventDefault();
    const titleInput = document.querySelector('#event-title');
    const dateInput = document.querySelector('#event-date');
    const result = document.querySelector('p');
        result.textContent = titleInput.value + ' | ' + dateInput.value;
        eventForm.hidden=true
}

eventForm.addEventListener('submit', handleSaveEvent);