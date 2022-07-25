<div class="col-3">
    <div class="row text-center mx-5">
        <p style="cursor: default">Shops:</p>
    </div>
    <div class="nav flex-column nav-pills mx-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <?php
            $sql = "SELECT * FROM shops";
            $result = $conn->query($sql);
            while ($row = mysqli_fetch_assoc($result)) {
                if(isset($_GET['id']) && $_GET['id'] == $row['id']){
                    $status_btn = "active";
                } else {
                    $status_btn = "";
                }
                ?>
                    <a class="nav-link my-1 text-center border border-secondary <?php echo $status_btn ?>" href="/shops.php?id=<?php echo $row['id'] ?>"><?php echo $row['title'] ?></a>
                <?php
            }
        ?>
    </div>
</div> <!-- /.col-3 -->
<div class="col-9">
    <div class="container">