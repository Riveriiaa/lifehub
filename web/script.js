const addEventButton = document.querySelector('button');
const eventForm = document.querySelector('#event-form');

function handleAddEvent() {
    eventForm.hidden = false;
}

addEventButton.addEventListener('click', handleAddEvent);

function handleSaveEvent(event) {
    event.preventDefault();
    const input = document.querySelector('#event-date');

    const result = document.querySelector('p');
    result.textContent = input.value;
}

eventForm.addEventListener('submit', handleSaveEvent);