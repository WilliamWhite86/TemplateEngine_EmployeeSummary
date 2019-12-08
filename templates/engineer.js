function generateEngineerHTML(data) {
    return `<div>${data.name}</div><div>Engineer</div><div>${data.id}</div><div>${data.email}</div><div>${data.github}</div>`
}

    module.exports = generateEngineerHTML