import { defineComponent } from "vue";

export default defineComponent({
  el: "#addOrder",
  name: "addOrder",
  data() {
    return {
      message: "",
      productsToAdd: [],
      customers: [],
      totalQuanityofItems: 0,
      totalPriceOfOrder: 0,
      orderDate: '',
      orderNotes: '',
      customer: '',
      createOrder: {}
    };
  },
  methods: {
    async getCustomers () {
      try {
        const response = await fetch('/api/customers', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('user'),
          },
        })
        this.customers = await response.json()
        this.customers.forEach(customer => {
          customer.fullName = customer.firstName + ' ' + customer.lastName
        })
        console.log(this.customers)
      } catch(error) {
        if(error.toString().includes('Unexpected token')) {
          localStorage.removeItem('user')
          alert('Please Relogin session has expired')
          window.location.href = '/login';
        }
        console.log(error)
      }
    },
    updateProducts(tempProductsToAdd) {
      this.totalQuanityofItems = 0
      this.totalPriceOfOrder = 0
      console.log("here",tempProductsToAdd)
      tempProductsToAdd.forEach((product, index) => {
        if(product.quantityAdded !== undefined) {
          this.totalQuanityofItems += product.quantityAdded
          this.totalPriceOfOrder += (product.quantityAdded * product.productPrice)
        } else {
          tempProductsToAdd.splice(index, 1);
        }
      });
      this.productsToAdd = tempProductsToAdd
    },
    async submitOrder () {
      this.createOrder.customerId = this.customer.customerId
      this.createOrder.datetimeOrderPlaced = this.orderDate
      this.createOrder.totalOrderPrice = this.totalPriceOfOrder
      this.createOrder.orderStatusCodeId = 2
      this.createOrder.orderNotes = this.orderNotes
      this.createOrder.Products = []
      if(this.productsToAdd.length >= 1) {
        this.productsToAdd.forEach(product => {
          this.createOrder.Products.push({
            productId: product.productId,
            productSKU: product.productSKU,
            productPrice: parseFloat(product.productPrice),
            productName: product.productName,
            productQuantity: product.productQuantity,
            OrderProduct: {
              quantity: product.quantityAdded,
              priceEach: parseFloat(product.productPrice)
            }
          })
        })
      } else {
        this.createOrder = []
        alert("Please Add Products to Order")
        return;
      }
      try {
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('user'),
          },
          body: JSON.stringify(this.createOrder)
        })
        let newOrder = await response.json()
        window.location.href = `/detailOrder/${newOrder.orderId}`;
      } catch(error) {
        if(error.toString().includes('Unexpected token')) {
          localStorage.removeItem('user')
          alert('Please Relogin session has expired')
          window.location.href = '/login';
        }
        console.log(error)
      } 
    },
  },
  mounted() {
    this.message = "Create new Order";
    this.getCustomers()
  },
});