<template id="detailOrder">
  <FooterBar />
  <div class="bg">
    <NavBar />

    <div class="bg-light border border-1 rounded container body-container">
      <div class="hello">
        <h1>{{ message }}</h1>
      </div>

      <form class="container mb-4  text-center">
        <div class="row mb-3">
          <div class="col">
            <div class="form-group">
              <label for="state">Customer Email</label>
              <input
                v-model="order.Customer.email"
                readonly
                class="form-control-plaintext"
                id="customerName"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group mb-3">
              <label for="datePlaced">Date Order Placed</label>
              <input
                v-model="order.datetimeOrderPlaced"
                readonly
                class="form-control-plaintext"
                id="datePlaced"
              />
            </div>
          </div>
           <div class="col">
            <div class="form-group mb-3">
              <label for="datePlaced">Date Order Fulfilled</label>
              <input
                v-model="order.datetimeOrderFulfilled"
                readonly
                class="form-control-plaintext"
                id="datePlaced"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group mb-3">
              <label for="datePlaced">Total Order Price</label>
              <input
                v-model="order.totalOrderPrice"
                readonly
                class="form-control-plaintext"
                id="datePlaced"
              />
            </div>
          </div>
        </div>
         <div class="row mb-3">
          <div class="col">
            <div class="form-group mb-3">
              <label for="notes">Order Status</label>
                <input
                  v-model="order.OrderStatusCode.orderStatusCode"
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="notes"
                />
            </div>
          </div>
          <div class="col">
            <div class="form-group mb-3">
             <label for="notes">Customer Notes</label>
              <input
                v-model="order.orderNotes"
                type="text"
                readonly
                class="form-control-plaintext"
                id="notes"
              />
            </div>
          </div>
        </div>
      </form>
      <form class="row g-10 d-flex justify-content-center">
        <div
          class="col-auto g-10 d-flex justify-content-center"
          style="padding-top: 2%"
        ><router-link :to="{ name: 'EditOrder', params: { id: orderId } }"
              >
          <button class="btn btn-primary" type="submit" id="editOrderButton">
            Edit Order
          </button>
          </router-link >
        </div>
      </form>

      <table summary="Products table" class="table table-hover container mt-5">
        <thead>
          <tr>
            <th scope="col">Product SKU</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Item Price</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody v-if="order.Products">
          <tr v-for="(product, index) in order.Products" :key="index">
            <td scope="row">{{product.productSKU}}</td>
            <td>{{product.productName}}</td>
            <td>{{product.productQuantity}}</td>
            <td>${{product.productPrice}}</td>
             <td>${{(product.productQuantity * product.productPrice).toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="../js/detailOrder.js"></script>

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
  color: #9b0c23;
}

label {
  font-weight: bold;
  text-decoration: underline;
}
.btn {
  border: 2px solid #79091c;
  background-color: #9b0c23;
  color: white;
  cursor:pointer;
}

.btn:hover {
  background-color: #a0273b;
}
input { 
    text-align: center; 
}
</style>
