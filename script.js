function highlight() {
    document.querySelectorAll('strong').forEach(el => el.style.color = 'rgb(0, 128, 0)');
}

function return_normal() {
    document.querySelectorAll('strong').forEach(el => el.style.color = 'rgb(0, 0, 0)');
}
