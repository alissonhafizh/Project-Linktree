document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#0056b3';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '#007bff';
        });
    });
});