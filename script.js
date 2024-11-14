
// Initialize seating chart with default rows and chairs
document.addEventListener("DOMContentLoaded", () => {
    updateRows();
});

let selectedElement = null;

function updateRows() {
    const rowCount = document.getElementById("row-count").value;
    const seatingChart = document.getElementById("seating-chart");
    seatingChart.innerHTML = ""; // Clear current chart

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.dataset.rowIndex = i;
        seatingChart.appendChild(row);
    }

    updateChairs();
}

function updateChairs() {
    const chairsPerRow = document.getElementById("chairs-per-row").value;
    const rows = document.querySelectorAll(".row");

    rows.forEach(row => {
        row.innerHTML = ""; // Clear current chairs
        for (let j = 0; j < chairsPerRow; j++) {
            const chair = document.createElement("div");
            chair.classList.add("chair");
            chair.dataset.chairIndex = j;
            chair.textContent = `${row.dataset.rowIndex}-${j + 1}`; // Label chairs
            chair.setAttribute("draggable", "true");
            chair.addEventListener("click", () => selectItem(chair));
            chair.addEventListener("dragstart", dragStart);
            chair.addEventListener("dragover", dragOver);
            chair.addEventListener("drop", drop);
            row.appendChild(chair);
        }
    });
}

function selectItem(element) {
    if (selectedElement) {
        selectedElement.classList.remove("selected");
    }
    selectedElement = element;
    selectedElement.classList.add("selected");
}

function deleteSelected() {
    if (selectedElement) {
        selectedElement.remove();
        selectedElement = null;
    } else {
        alert("No item selected for deletion.");
    }
}

// Dragging functionality
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    selectedElement = event.target;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedElement = document.querySelector(".selected");
    if (draggedElement) {
        draggedElement.style.left = `${event.offsetX}px`;
        draggedElement.style.top = `${event.offsetY}px`;
    }
}

function exportToPDF() {
    alert("PDF export functionality will be implemented here.");
}
