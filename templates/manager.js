function generateManagerHTML(data) {
    return `<div>${data.name}</div><div>Manager</div><div>${data.id}</div><div>${data.email}</div><div>${data.officeNumber}</div>`
}

    module.exports = generateManagerHTML