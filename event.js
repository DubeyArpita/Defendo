document.querySelector('.search-btn').addEventListener('click', function () {
    const searchValue = document.getElementById('eventSearch').value.toLowerCase();
    const locationValue = document.getElementById('locationSelect').value;

    const events = document.querySelectorAll('.event');
    events.forEach(event => {
        const eventLocation = event.querySelector('p').innerText.toLowerCase();
        const eventName = event.querySelector('h3').innerText.toLowerCase();

        if ((searchValue === '' || eventName.includes(searchValue)) &&
            (locationValue === '' || eventLocation.includes(locationValue))) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });
