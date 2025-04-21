// document.addEventListener("DOMContentLoaded", function () {
   
//      function onRecaptchaLoadCallback() {
//         var formContainer = document.createElement("div");
//         formContainer.id = "XYZ-form-container";
//         formContainer.innerHTML = `
//             <div style="max-width:500px;margin:40px auto;padding:20px;border-radius:10px;background:#ffffff;box-shadow:0 0 10px rgba(0,0,0,0.1);">
//                 <h1 style="text-align:center; font-family: sans-serif;">Contact Form</h1>
//                 <form id="myForm" method="POST" action="#" class="pqr">
//                     <label for="name">Name:</label><br>
//                     <input type="text" id="name" name="name" required style="width:100%;padding:8px;margin:8px 0;"><br>
//                     <label for="email">Email:</label><br>
//                     <input type="email" id="email" name="email" required style="width:100%;padding:8px;margin:8px 0;"><br>
//                     <label for="message">Message:</label><br>
//                     <textarea id="message" name="message" required style="width:100%;padding:8px;margin:8px 0;"></textarea><br>
//                     <!-- Google reCAPTCHA widget -->
//                     <div class="g-recaptcha" data-sitekey="6Lem7Q0rAAAAAMkS6r4WbgOmK9SFxRxdFh-6grBm" style="margin:16px 0;"></div>
//                     <button type="submit" style="width:100%;padding:10px;background:#007BFF;color:#fff;border:none;border-radius:5px;">Submit</button>
//                 </form>
//             </div>
//         `;

//         const containerDiv = document.querySelector('div[_ngcontent-ng-c2790991553].container');
 
//         // Insert the form immediately after the containerDiv
//         containerDiv.insertAdjacentElement('afterend', formContainer);

//       //Add submit event listener to the form
//         // var myForm = document.getElementById("myForm");
//         // if (myForm) {
//         //     myForm.addEventListener("submit", function (e) {
//         //         e.preventDefault();
//         //         alert("Form submitted!");
//         //     });
//         // }
//     var myForm = document.getElementById("myForm");
//     if (myForm) {
//         myForm.addEventListener("submit", function (e) {
//             var response = grecaptcha.getResponse();
//             if (!response) {
//                 e.preventDefault();
//                 alert("Please complete the CAPTCHA before submitting.");
//                 return false;
//             }

//             e.preventDefault();
//             alert("Form submitted!");
//         });
//     }
// });




// function onRecaptchaLoadCallback() {
//     // Wait until the full DOM is loaded
//     document.addEventListener("DOMContentLoaded", function () {
//         // Create the form
//         var formContainer = document.createElement("div");
//         formContainer.id = "XYZ-form-container";
//         formContainer.innerHTML = `
//             <div style="max-width:500px;margin:40px auto;padding:20px;border-radius:10px;background:#ffffff;box-shadow:0 0 10px rgba(0,0,0,0.1);">
//                 <h1 style="text-align:center; font-family: sans-serif;">Contact Form</h1>
//                 <form id="myForm" method="POST" action="./PHP/submit_form.php" class="pqr">
//                     <label for="name">Name:</label><br>
//                     <input type="text" id="name" name="name" required style="width:100%;padding:8px;margin:8px 0;"><br>
//                     <label for="email">Email:</label><br>
//                     <input type="email" id="email" name="email" required style="width:100%;padding:8px;margin:8px 0;"><br>
//                     <label for="message">Message:</label><br>
//                     <textarea id="message" name="message" required style="width:100%;padding:8px;margin:8px 0;"></textarea><br>
                    
//                     <!-- CAPTCHA placeholder -->
//                     <div id="recaptcha-container" style="margin:16px 0;"></div>

//                     <button type="submit" style="width:100%;padding:10px;background:#007BFF;color:#fff;border:none;border-radius:5px;">Submit</button>
//                 </form>
//             </div>
//         `;

//         // Add the form to the page
//         const containerDiv = document.querySelector('div[_ngcontent-ng-c2790991553].container');
//          // Insert the form immediately after the containerDiv
//          containerDiv.insertAdjacentElement('afterend', formContainer);

//         // Render the reCAPTCHA widget
//         grecaptcha.render('recaptcha-container', {
//             sitekey: '6LexMg4rAAAAAEhV42szkvDIajqE5d_wMYDjR2JW'
//         });

//         // Add form submit handling
//         var myForm = document.getElementById("myForm");
//         if (myForm) {
//             myForm.addEventListener("submit", function (e) {
//                 var response = grecaptcha.getResponse();
//                 if (!response) {
//                     e.preventDefault();
//                     console.log("CAPTCHA not completed.");
//                 }

//                 e.preventDefault();
//                 console.log("Form submitted successfully.");
//             });
//         }
//     });
// }

function onRecaptchaLoadCallback() {
    // Wait until the full DOM is loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Create the form
        var formContainer = document.createElement("div");
        formContainer.id = "XYZ-form-container";
        formContainer.innerHTML = `
            <div style="max-width:500px;margin:40px auto;padding:20px;border-radius:10px;background:#ffffff;box-shadow:0 0 10px rgba(0,0,0,0.1);">
                <h1 style="text-align:center; font-family: sans-serif;">Contact Form</h1>
                <form id="myForm" class="pqr">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" required style="width:100%;padding:8px;margin:8px 0;"><br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" required style="width:100%;padding:8px;margin:8px 0;"><br>
                    <label for="message">Message:</label><br>
                    <textarea id="message" name="message" required style="width:100%;padding:8px;margin:8px 0;"></textarea><br>

                    <!-- CAPTCHA placeholder -->
                    <div id="recaptcha-container" style="margin:16px 0;"></div>

                    <button type="submit" style="width:100%;padding:10px;background:#007BFF;color:#fff;border:none;border-radius:5px;">Submit</button>
                    <p id="response-msg" style="text-align:center;margin-top:10px;"></p>
                </form>
            </div>
        `;

        // Add the form to the page
        const containerDiv = document.querySelector('div[_ngcontent-ng-c2790991553].container');
        containerDiv.insertAdjacentElement('afterend', formContainer);

        // Render the reCAPTCHA widget
        grecaptcha.render('recaptcha-container', {
            sitekey: '6LexMg4rAAAAAEhV42szkvDIajqE5d_wMYDjR2JW'
        });

        // Handle form submission using fetch
        var myForm = document.getElementById("myForm");
        if (myForm) {
            myForm.addEventListener("submit", function (e) {
                e.preventDefault();

                var response = grecaptcha.getResponse();
                if (!response) {
                    document.getElementById("response-msg").innerText = "Please complete the CAPTCHA.";
                    return;
                }

                // Build form data
                var formData = new FormData(myForm);
                formData.append("g-recaptcha-response", response);

                fetch("./PHP/submit_form.php", {
                    method: "POST",
                    body: formData
                })
                .then(res => res.text())
                .then(data => {
                    document.getElementById("response-msg").innerText = data;
                    myForm.reset();
                    grecaptcha.reset(); // Reset the CAPTCHA
                })
                .catch(error => {
                    console.error("Error:", error);
                    document.getElementById("response-msg").innerText = "Something went wrong. Please try again.";
                });
            });
        }
    });
}



