
let selectedElement = null;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.outerHTML);
    selectedElement = event.target;
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const element = document.createElement("div");
    element.innerHTML = data;
    const newChair = element.firstChild;
    newChair.classList.add("placed-chair");
    newChair.setAttribute("draggable", "true");
    newChair.style.position = "absolute";
    newChair.style.left = `${event.offsetX}px`;
    newChair.style.top = `${event.offsetY}px`;
    newChair.addEventListener("click", () => selectItem(newChair));
    newChair.addEventListener("dragstart", drag);
    newChair.addEventListener("dragover", allowDrop);
    newChair.addEventListener("drop", drop);
    event.target.appendChild(newChair);
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

function exportToPDF() {
    alert("PDF export functionality will be implemented here.");
}
