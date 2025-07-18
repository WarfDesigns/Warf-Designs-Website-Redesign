<?php
// ✅ Keep this file on your server only — not viewable to browsers

$api_key = 'd73b9f6871b21da276840a'; // Hidden from the browser
$domain = isset($_GET['domain']) ? trim($_GET['domain']) : '';

if (!$domain) {
    echo json_encode(['error' => 'No domain provided']);
    exit;
}

// Build NameSilo API URL
$url = "https://www.namesilo.com/api/checkRegisterAvailability?version=1&type=json&key=$api_key&domains=" . urlencode($domain);

// Call the API
$response = file_get_contents($url);

if ($response === false) {
    echo json_encode(['error' => 'API call failed']);
} else {
    echo $response; // Forward JSON response to browser
}