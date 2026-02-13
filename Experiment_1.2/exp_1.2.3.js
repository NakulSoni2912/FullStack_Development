const svg = document.getElementById("drawingArea");
const undoBtn = document.getElementById("undoBtn");
const countText = document.getElementById("count");

let circles = [];
svg.addEventListener("click", function (event) {
    const rect = svg.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 10);
    circle.setAttribute("fill", "#1e5bff");

    svg.appendChild(circle);
    circles.push(circle);

    updateCount();
});

undoBtn.addEventListener("click", function () {
    if (circles.length > 0) {
        const lastCircle = circles.pop();
        svg.removeChild(lastCircle);
        updateCount();
    }
});

function updateCount() {
    countText.textContent = circles.length;
}