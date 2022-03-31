/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  el: "#dashboard",
  name: "DashBoard",
  data() {
    return {
      name: "",
      orders: [],
    };
  },

  computed: {
    resultOrders() {
      this.orders.reverse()
      this.orders = this.orders.slice(0, 6)
      return this.orders;
    }
  },
  methods: {
    async getOrdersDash() {
      try {
        const response = await fetch('/api/orders', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('user'),
          },
        })
        this.orders = await response.json()
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
    this.name = "TJX StoneCap Dashboard";
    this.getOrdersDash()
  },
});