<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "brent@warfdesigns.com";

    $subject = "New Appointment Request";
    $headers = "From: " . filter_var($_POST["email"], FILTER_SANITIZE_EMAIL) . "\r\n";
    $headers .= "Reply-To: " . filter_var($_POST["email"], FILTER_SANITIZE_EMAIL) . "\r\n";

    $message = "You have a new appointment request:\n\n";
    $message .= "Name: " . htmlspecialchars($_POST["name"]) . "\n";
    $message .= "Email: " . htmlspecialchars($_POST["email"]) . "\n";
    $message .= "Phone: " . htmlspecialchars($_POST["phone"]) . "\n";
    $message .= "Preferred Date: " . htmlspecialchars($_POST["date"]) . "\n";
    $message .= "Preferred Time: " . htmlspecialchars($_POST["time"]) . "\n";
    $message .= "Service Type: " . htmlspecialchars($_POST["service"]) . "\n";
    $message .= "Notes:\n" . htmlspecialchars($_POST["notes"]) . "\n";
    
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to thank-you page
        header("Location: thank-you.html"); 
        exit();
    } else {
        // Redirect to an error page
        header("Location: error.html");
        exit();
    }
}
?>
