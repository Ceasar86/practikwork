document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    const details = document.getElementById('details');

    if (button && details) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            if (details.style.display === 'block') {
                details.style.display = 'none';
                button.textContent = 'Подробнее';
            } else {
                details.style.display = 'block';
                button.textContent = 'Скрыть';
            }
        });
    }
});