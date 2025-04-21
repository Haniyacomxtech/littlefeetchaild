<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/vendor/phpmailer/src/Exception.php';
require_once __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/vendor/phpmailer/src/SMTP.php';

header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
    
// passing true in constructor enables exceptions in PHPMailer

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);
    
$mail = new PHPMailer(true);
//$to = 'rajeshrajac2019@gmail.com';
//$subject = 'Test Sub';
//$message = 'Test mail ';
//$from = 'rajeshrajac2019@gmail.com';

$ParentsName = $data-> ParentsName;
$Relationship = $data-> Relationship;
$ChildsName = $data-> ChildsName;
$Dob = $data-> Dob;
$HoursPerDay = $data-> HoursPerDay;
$ContactNumber = $data-> ContactNumber;
$Email = $data -> Email;
$Comments = $data-> Comments;

// $ParentsName = 'ParentsName';
// $Relationship = 'Relationship';
// $ChildsName = 'ChildsName';
// $Dob = 'Dob';
// $HoursPerDay = 'HoursPerDay';
// $ContactNumber = 'ContactNumber';
 //$Email = 'rajesh.raja@sunmobility.com';
// $Comments = 'Comments';





try {
    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; // for detailed debug output
    //$mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = 'rajeshrajac2019@gmail.com'; // YOUR gmail email
    $mail->Password = 'Chottu@2019'; // YOUR gmail password

    // Sender and recipient settings
    $mail->setFrom($Email, $ParentsName);
    $mail->addAddress('rajesh.raja@sunmobility.com', 'Rajesh Raja');
    $mail->addReplyTo($Email, $ParentsName); // to set the reply to
    // Setting the email content
    $mail->IsHTML(true);
    $mail->Subject = "Mail from Inquiry form";
    $mail->Body = '<html>
                    
                    <body>
                    <p>Hi Little Feet Child care, </p>
                    <br>
                        <table  border="1" cellspacing="3" width="60%">
                            <tr>
                                <td>Parents Name:</td>
                                <td>'. $ParentsName . '</td>
                            </tr>
                            <tr>
                                <td>Relationship:</td>
                                <td>'. $Relationship . '</td>
                            </tr>
                            <tr>
                                <td>Childs Name:</td>
                                <td>'. $ChildsName . '</td>
                            </tr>
                            <tr>
                                <td>Dob:</td>
                                <td>'. $Dob . '</td>
                            </tr>
                            <tr>
                                <td>Hours Per Day/Week:</td>
                                <td>'. $HoursPerDay . '</td>
                            </tr>
                            <tr>
                                <td>Contact Number:</td>
                                <td>'. $ContactNumber . '</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>'. $Email . '</td>
                            </tr>
                            <tr>
                                <td>Comments:</td>
                                <td>'. $Comments . '</td>
                            </tr>
                        </table>
                       <p><b>Thanks & Regards,</b> <br>
                       '. $ParentsName . '<br>
                       '. $ContactNumber . '
                    </body>
                </html>';
                
    $mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';
  
    $mail->send();
    echo "Email message sent.";
} catch (Exception $e) {
    echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}
?>