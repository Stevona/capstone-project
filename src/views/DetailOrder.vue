<template id="detailOrder">
  <NavBar />
  <div class="hello">
    <h1>{{message}}</h1>
  </div>
  <FooterBar />
  <form class="container mb-4">
  <div class="row mb-3">
  <div class ="col">
      <div class="form-group">
          <label for="state">Customer Name</label>
          <!-- <-- <input v-model="customer.firstName" readonly class="form-control-plaintext" id="customerName" /> --> 
        </div> 
  </div>
  <div class="col">
  <div class="form-group mb-3">
    <label for="datePlaced">Date</label>
    <input v-model="order.datetimeOrderPlaced" readonly class="form-control-plaintext" id="datePlaced" />
  </div>
  </div>
  </div>
  <div class="form-group">
        <label for="notes">Customer Notes</label>
      <input v-model="order.orderNotes" type="text" readonly class="form-control-plaintext" id="notes" />
    </div>
</form>
<form class="row g-10 d-flex justify-content-center">
  <div class="col-auto g-10 d-flex justify-content-center" style="padding-top: 2%;">
         <button class="btn btn-primary" type="submit" id="editOrderButton">
      <router-link :to="{ name: 'EditOrder', params: { id: order.orderId }}">Edit Order</router-link>
         </button>
    </div>
</form>

 <table summary="Products table" class="table table-hover container mt-5">
    <thead>
      <tr>
        <th scope="col">Product SKU</th>
        <th scope="col">Product Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">24535</th>
        <td>Shirt</td>
        <td>2</td>
        <td>$420.69</td>
      </tr>
      <tr>
        <th scope="row">24535</th>
        <td>Pants</td>
        <td>2</td>
        <td>$420.69</td>
      </tr>
      <tr>
        <th scope="row">24535</th>
        <td>Socks</td>
        <td>1</td>
        <td>$420.69</td>
      </tr>
    </tbody>
  </table>

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
  color: white;
}
</style>