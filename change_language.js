function openPopup() {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    var popup = document.querySelector('.popup-container');
    popup.style.display = 'block';
}

function closePopup() {
    var overlay = document.querySelector('.overlay');
    overlay.parentNode.removeChild(overlay);

    var popup = document.querySelector('.popup-container');
    popup.style.display = 'none';
}

// Открываем модальное окно при загрузке страницы
window.onload = function() {
    openPopup();
}
