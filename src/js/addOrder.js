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
    }
  },
  mounted() {
    this.message = "Create new Order";
    this.getCustomers()
  },
});