<template id="editOrder">
  <FooterBar />

  <div class="bg">
    <NavBar />

    <div class="bg-light border border-1 rounded container body-container">
      <div class="hello">
        <h1>{{ message }}</h1>
      </div>
      {{order}}
      <form class="container mb-4">
        <div class="row mb-3">
          <div class="col">
            <div class="col-auto">
              <label for="customerName">Customer Email</label>
              <v-select v-model="order.Customer" label="email" :options="customers"></v-select>
            </div>
            {{customerID}}
          </div>
          <div class="col">
            <div class="form-group mb-3">
              <label for="datePlaced">Date Order Placed</label>
              <input v-model="order.datetimeOrderPlaced" type="date" class="form-control" id="datePlaced" />
            </div>
          </div>
          <div class="col">
            <div class="form-group mb-3">
              <label for="datePlaced">Date Order Fulfilled</label>
              <input v-model="order.datetimeOrderFulfilled" type="date" class="form-control" id="datePlaced" />
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
              <div class="col-auto">
                <label for="customerName">Order Status</label>
                <v-select v-model="order.OrderStatusCode" label="orderStatusCode" :options="orderStatusCodes"></v-select>
              </div>
              {{orderStatusCode}}
          </div>
          <div class="col">
            <div class="form-group mb-3">
              <label for="notes">Customer Notes</label>
              <input v-model="order.customerNotes" type="notes" class="form-control" id="notes" />
            </div>
          </div>
        </div>
      </form>
      <form class="row g-10 d-flex justify-content-center">
        <div class="col-auto">
          <router-link :to="{ name: 'DetailOrder', params: { id: orderId, firstName: order.Customer.firstName, lastName: order.Customer.lastName} }">
            <button class="btn btn-primary" type="submit" id="backButton">
              Back To Details Page
            </button>
          </router-link>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">Submit</button>
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
        <tbody>
          <tr v-for="(product, index) in productsToAdd" :key="index">
            <td scope="row">{{product.productSKU}}</td>
            <td>{{product.productName}}</td>
            <td>{{product.quantityAdded}}</td>
            <td>${{product.productPrice}}</td>
            <td>${{(product.quantityAdded * product.productPrice).toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
      <div class="col-auto">
        <ProductS @productsToAdd="updateProducts" :tempProductsToAdd="productsToAdd"/>
      </div>
    </div>
  </div>
</template>

<script src="../js/editOrder.js"></script>

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
</style>
