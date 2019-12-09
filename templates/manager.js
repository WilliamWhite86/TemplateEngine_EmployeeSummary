function generateManagerHTML(data) {
    return `<div class="card" style="width: 25%;">
    <div class="card-header"><h1>${data.name}</h1></div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><h2>Manager</h2></li>
            <li class="list-group-item">${data.id}</li>
            <li class="list-group-item">${data.email}</li>
            <li class="list-group-item">${data.officeNumber}</li>
        </ul>
    </div>`
}

module.exports = generateManagerHTML