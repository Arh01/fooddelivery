<?php
include $_SERVER['DOCUMENT_ROOT'] . '/configs/db.php';
include $_SERVER['DOCUMENT_ROOT'] . '/parts/header.php';
?>

<form>
    <div class="container">
        <div class="d-flex">
            <div class="col-5 mx-4">
                <div class="row border border-secondary">
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input name="name" type="text" class="form-control" id="exampleInputName">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email</label>
                        <input name="email" type="email" class="form-control" id="exampleInputEmail">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPhone" class="form-label">Phone</label>
                        <input name="phone" type="tel" class="form-control" id="exampleInputPhone">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputAddress" class="form-label">Address</label>
                        <input name="address" type="text" class="form-control" id="exampleInputAddress">
                    </div>
                </div>
            </div>

            <div class="col-6 mx-4 products-side">


            </div>
        </div>
    </div>

    <button type="submit" id="submit" class="btn btn-primary ms-5 btn-lg float-end" onclick="createOrder()" style="width: 13rem; margin-bottom: 50px;">Submit</button>
    <h5 class="col mx-5 float-end">Total price: <span id="total-price"></span> uah</h5>
</form>



<?php
include $_SERVER['DOCUMENT_ROOT'] . '/parts/footer.php';
?>
