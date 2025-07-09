// feature.js
// New feature functionality for our demo project

function greetUser(name) {
    return `Hello, ${name}! Welcome to our demo project.`;
}

function getCurrentDate() {
    return new Date().toLocaleDateString();
}

module.exports = { greetUser, getCurrentDate };