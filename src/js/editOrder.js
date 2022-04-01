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
      totalQuanityofItems: 0,
      totalPriceOfOrder: 0,
      customers:[],
      orderStatusCode: '',
      orderStatusCodes:[
        {orderStatusCodeId: 1, orderStatusCode: 'Draft'},
        {orderStatusCodeId: 2, orderStatusCode: 'Open'},
        {orderStatusCodeId: 3, orderStatusCode: 'Finalized'},
        {orderStatusCodeId: 4, orderStatusCode: 'Preparing to ship'},
        {orderStatusCodeId: 5, orderStatusCode: 'Ready for shipping'},
        {orderStatusCodeId: 6, orderStatusCode: 'Shipped'},
        {orderStatusCodeId: 7, orderStatusCode: 'Delivered'},
        {orderStatusCodeId: 8, orderStatusCode: 'Closed'},
      ],
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
          this.totalQuanityofItems += product.quantityAdded
          this.totalPriceOfOrder += (product.quantityAdded * product.productPrice)
          this.productsToAdd.push(product)
        })
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
    async submitOrderUpdate () {
      this.order.Products = []
      this.order.totalOrderPrice = this.totalPriceOfOrder
      this.order.orderStatusCodeId = this.order.OrderStatusCode.orderStatusCodeId
      if(this.productsToAdd.length >= 1) {
        this.productsToAdd.forEach(product => {
          this.order.Products.push({
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
        return;
      }
      try {
        const response = await fetch('/api/orders/' + `${this.order.orderId}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('user'),
          },
          body: JSON.stringify(this.order)
        })
        let updatedOrder = await response.json()
        window.location.href = `/detailOrder/${updatedOrder.orderId}`;
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
    this.message = "Edit Order";
    this.getCustomers()
  },
});