import { defineComponent } from "vue";

export default defineComponent({
  el: "#detailOrder",
  name: "detailOrder",
  data() {
    return {
      message: "",
      order: [],
      orderId: this.$route.params.id,
      success: false,
      error: false,
      loading: false,
      totalQuanityofItems: 0,
      totalPriceOfOrder: 0,
    };
  },
  async created() {
    await this.getOrder()
  },
  methods: {
    async getOrder () {
      try {
        const response = await fetch('/api/orders/' + `${this.orderId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('user'),
          },
        })
        this.order = await response.json()
        this.order.Products.forEach(product => {
          this.totalQuanityofItems += product.OrderProduct.quantity
          this.totalPriceOfOrder += (product.OrderProduct.quantity * product.productPrice)
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
    
},
  mounted() {
    this.message = "Order Details";
  },
});