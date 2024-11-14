document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
});

document.getElementById('stage').addEventListener('dragover', event => {
    event.preventDefault();
});

document.getElementById('stage').addEventListener('drop', event => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const countSpan = document.getElementById(`${id}-count`);
    let count = parseInt(countSpan.textContent);
    if (count > 0) {
        countSpan.textContent = count - 1;
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.textContent = id.charAt(0).toUpperCase() + id.slice(1);
        event.target.appendChild(newItem);
    } else {
        alert(`No more ${id}s available`);
    }
});
