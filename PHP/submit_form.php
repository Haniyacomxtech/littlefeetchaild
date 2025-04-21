<?php
$servername = "localhost";
$username = "demo1comxdesigns_abc";     
$password = "Spl?XWs85Iq-";  
$dbname = "demo1comxdesigns_abc"; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    // Send confirmation email
    $to = $email;
    $subject = "Thank You for Contacting Us!";
    $headers = "From: haniya@comxtech.com\r\n";
    $headers .= "Reply-To: haniya@comxtech.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "
    <html>
    <head>
      <title>Thank You</title>
    </head>
    <body>
      <h2>Hello $name,</h2>
      <p>Thank you for reaching out to us. We've received your message:</p>
      <blockquote>$message</blockquote>
      <p>We'll get back to you as soon as possible.</p>
      <br>
      <p>Best regards,<br>Your Website Team</p>
    </body>
    </html>
    ";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message submitted successfully! A confirmation email has been sent.";
    } else {
        echo "Message submitted, but email failed to send.";
    }

} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
