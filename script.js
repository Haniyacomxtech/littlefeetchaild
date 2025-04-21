document.addEventListener("DOMContentLoaded", function () {
    // Select the placeholder div
    let formContainer = document.getElementById("form-container");

    // Create the form HTML
    let formHTML = `
        <form id="myForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="name">Last Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Submit</button>
        </form>
    `;

    // Inject the form into the placeholder
    formContainer.innerHTML = formHTML;

    // Add an event listener for form submission
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted!");
    });
});
