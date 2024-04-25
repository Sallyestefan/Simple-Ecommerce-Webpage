<?php

$username = htmlspecialchars($_POST['firstName']);
$password = htmlspecialchars($_POST['password']);


// Create connection
$conn = new mysqli("localhost", "root", "", "test1");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM Registration WHERE firstName='$username' AND password='$password'";


$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result) > 0) {   
    echo "Login successful";
} else {
    echo "Invalid username/email or password";
}

mysqli_close($conn);
?>