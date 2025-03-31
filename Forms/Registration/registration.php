<?php
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "my_website";

// Connect to database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get data from request
$user = $_POST['username'];
$pass = password_hash($_POST['password'], PASSWORD_DEFAULT); // secure hashing

// Insert user into DB
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $user, $pass);

if ($stmt->execute()) {
  echo "User registered successfully!";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
