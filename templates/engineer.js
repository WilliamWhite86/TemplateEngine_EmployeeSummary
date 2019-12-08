function generateEngineerHTML(data) {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header"><h1>${data.name}</h1></div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><h2>Engineer</h2></li>
                <li class="list-group-item">${data.id}</li>
                <li class="list-group-item">${data.email}</li>
                <li class="list-group-item">${data.github}</li>
            </ul>
        </div>`
}

module.exports = generateEngineerHTML