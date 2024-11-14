
let objectLimits = { chair: 5, table: 2, stand: 10, shield: 3 };
let objectCounts = { chair: 0, table: 0, stand: 0, shield: 0 };

// Function to handle drag and drop
document.querySelectorAll('.draggable-item').forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('type', item.dataset.type);
    });
});

document.getElementById('stage-area').addEventListener('dragover', event => {
    event.preventDefault();
});

document.getElementById('stage-area').addEventListener('drop', event => {
    event.preventDefault();
    const type = event.dataTransfer.getData('type');

    if (objectCounts[type] < objectLimits[type]) {
        const newItem = document.createElement('div');
        newItem.classList.add('draggable-item');
        newItem.style.left = `${event.offsetX}px`;
        newItem.style.top = `${event.offsetY}px`;
        newItem.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        event.target.appendChild(newItem);
        objectCounts[type]++;
    } else {
        alert(`Limit reached for ${type}s!`);
    }
});

function exportToPDF() {
    // Placeholder function for PDF export
    alert("PDF export functionality will be implemented here.");
}
