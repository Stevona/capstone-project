<template id="ProductS">
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Add Products
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Products</h5>
          <div class="input-group rounded container">
            <input
              type="search"
              v-model="searchString"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            v-on:click="updateOrder()"
          ></button>
        </div>
        <div class="modal-body">
          <div
            class="row row-cols-1 row-cols-md-4 g-4 scrollbar"
          >
            <div class="col" v-for="(product, index) in resultProducts" :key="index">
              <div class="card">
                <img
                  src="../assets/stonecap.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{{product.productName}}</h5>
                  <p class="card-text">
                    {{product.productDescription}}
                  </p>
                  <p class="card-text" style="font-size: 14px">
                    Price: ${{product.productPrice}}
                  </p>
                  <p class="card-text" style="font-size: 14px">
                    Quantity Avaliable: {{product.productQuantity}}
                  </p>
                  <p class="card-text" style="font-size: 14px">
                    Product SKU: {{product.productSKU}}
                  </p>
                  <button v-if="!product.inOrders" type="button" class="btn btn-primary mb-3" v-on:click="addProductToOrder(product)">
                    Add to Order
                  </button>
                  <div v-if="product.inOrders">
                    <div class="form-group mb-3 d-flex justify-content-center">
                      <label for="quantity" class="mt-1">Quantity:</label>
                      <input type="number" name="quantity" v-model="product.quantityAdded"  min="1" class="form-control " style="width: 35%!important;" />
                    </div>
                    <button v-on:click="removeProductFromOrder(product)" type="button" class="btn btn-danger" >
                      Remove From Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" v-on:click="updateOrder()" class="btn btn-primary" data-bs-dismiss="modal">
            Update Order ({{productsToAdd.length}})
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/products.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn-primary{
  border: 2px solid #79091c;
  background-color: #9b0c23;
  color: white;
  cursor:pointer;
}
.btn-primary:hover{
  background-color: #a0273b;
}
</style>
