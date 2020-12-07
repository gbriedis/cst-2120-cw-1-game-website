const tBodyEl = document.querySelector("tbody");


window.onload = function() {
    let scores = JSON.parse(localStorage.getItem("scores") || "[]");
    scores.forEach((item, index) => {
        tBodyEl.innerHTML += `
            <tr>
                <td>${index}</td>
                <td>${item.username}</td>
                <td>${item.score}</td>
            </tr>
        `; 
    });

}
