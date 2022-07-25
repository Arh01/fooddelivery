<?php
include $_SERVER['DOCUMENT_ROOT'] . '/configs/db.php';

if (isset($_POST) and $_SERVER["REQUEST_METHOD"]=="POST") {
    $sql = "INSERT INTO `orders` (`name`, `email`, `phone`, `address`, `user_order`) VALUES ('" . $_POST["name"] . "', '" . $_POST["email"] . "', '" . $_POST["phone"] . "', '" . $_POST["address"] . "', '" . $_POST["user_order"] . "');";
    $result = $conn->query($sql);

    if($result) {
        echo "успешная отправка";
    }
}
?>