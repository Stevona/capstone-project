import { defineComponent } from "vue";

export default defineComponent({
  el: "#editOrder",
  name: "editOrder",
  data() {
    return {
      message: "",
      order: [],
      productsToAdd: [],
      orderId: this.$route.params.id,
      success: false,
      error: false,
      loading: false,
      customers:[],
      orderStatusCode: '',
      orderStatusCodes:[
        {orderStatusCodeId: 1, orderStatusCode: 'Draft'},
        {orderStatusCodeId: 2, orderStatusCode: 'Open'},
        {orderStatusCodeId: 3, orderStatusCode: 'Finalized'},
        {orderStatusCodeId: 4, orderStatusCode: 'Preparint to ship'},
        {orderStatusCodeId: 5, orderStatusCode: 'Ready for shipping'},
        {orderStatusCodeId: 6, orderStatusCode: 'Shipped'},
        {orderStatusCodeId: 7, orderStatusCode: 'Delivered'},
        {orderStatusCodeId: 8, orderStatusCode: 'Closed'},
      ]
    };
  },
  created() {
    this.getOrder()
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
    async getOrder () {
      try {
        const response = await fetch('/api/orders/' + `${this.orderId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('user'),
          },
        })
        this.order = await response.json()
        this.order.Products.forEach(product => {
          product.quantityAdded = product.OrderProduct.quantity
          product.inOrders = true
          this.productsToAdd.push(product)
        })
       // this.productsToAdd = this.order.Product.OrderProduct
        console.log("here", this.productsToAdd )
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
    }
  },
  mounted() {
    this.message = "Edit Order";
    this.getCustomers()
  },
});