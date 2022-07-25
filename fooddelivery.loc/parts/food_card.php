<div class="col-6">
    <div class="card m-3" style="width: 25rem;">
        <div class="col m-2">
            <img src="<?php echo $row['image'] ?>" class="card-img-top" style="border-radius: 10px;" alt="food">
        </div>
        <div class="card-body">
            <h5 class="card-title"><?php echo $row['title'] ?></h5>
            <p class="card-text">Price <?php echo $row['price'] ?> uah</p>
            <button href="#" class="btn btn-primary float-end" onclick="addToCart(this)" data-id="<?php echo $row['id'] ?>" data-title="<?php echo $row['title'] ?>" data-image="<?php echo $row['image'] ?>" data-price="<?php echo $row['price'] ?>">add to Cart</button>
        </div>
    </div>
</div>