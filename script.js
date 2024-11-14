
// Initialize seating chart with default rows and chairs
document.addEventListener("DOMContentLoaded", () => {
    updateRows();
});

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
            chair.addEventListener("click", () => toggleLabel(chair));
            row.appendChild(chair);
        }
    });
}

function toggleLabel(chair) {
    const newLabel = prompt("Enter label for this chair:", chair.textContent);
    if (newLabel !== null) {
        chair.textContent = newLabel;
    }
}

function exportToPDF() {
    alert("PDF export functionality will be implemented here.");
}
