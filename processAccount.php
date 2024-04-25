
<?php

// Create connection
$conn = new mysqli("localhost", "root", "", "test1");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

//get from data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$password = $_POST['password'];
$address = $_POST['address'];
$phoneNumber = $_POST['phoneNumber'];

$sql = "INSERT INTO Registration(firstName, lastName, password, address, phoneNumber) 
VALUES ('$firstName', '$lastName', '$password', '$address','$phoneNumber')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
