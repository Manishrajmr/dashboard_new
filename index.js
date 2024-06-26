const sideLinks = document.querySelectorAll('.sidebar a');
const modes = document.querySelectorAll('.dark-mode .material-icons-sharp');

sideLinks.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all links
        sideLinks.forEach(link => link.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        item.classList.add('active');
    });
});


modes.forEach(mode => {
    mode.addEventListener('click', () => {
        // Remove 'active' class
        modes.forEach(p => p.classList.remove('active'));
        
        // Add 'active' class 
        mode.classList.add('active');
    });
});

