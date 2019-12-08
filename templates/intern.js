function generateInternHTML(data) {
    return `<div>${data.name}</div><div>Intern</div><div>${data.id}</div><div>${data.email}</div><div>${data.school}</div>`
}

    module.exports = generateInternHTML