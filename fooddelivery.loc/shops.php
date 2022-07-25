<?php
include $_SERVER['DOCUMENT_ROOT'] . '/configs/db.php';
include $_SERVER['DOCUMENT_ROOT'] . '/parts/header.php';
include $_SERVER['DOCUMENT_ROOT'] . '/parts/shop_nav.php';
?>

<div class="row">
    <?php
        $sql = "SELECT id, title, image, price FROM food WHERE shop_id=" . $_GET['id'];
        $result = $conn->query($sql);
        while ($row = mysqli_fetch_assoc($result)) {
            include $_SERVER['DOCUMENT_ROOT'] . '/parts/food_card.php';
        }
    ?>
</div>
<?php
include $_SERVER['DOCUMENT_ROOT'] . '/parts/footer.php';
?>
                    