import { defineComponent } from "vue";

export default defineComponent({
  el: "#manageOrders",
  name: "manageOrders",
  data() {
    return {
      message: "",
      orders: [],
      searchString: null,
      searchBy: "orderId",
    };
  },
  computed: {
    resultOrders() {
      if (this.searchString) {
        return this.orders.filter(order => {
          return this.searchString
            .toLowerCase()
            .split(" ")
            .every(v => order[this.searchBy].includes(v));
        });
      } else {
        return this.orders;
      }
    }
  },
  methods: {
    async getOrders () {
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
    this.message = "Manage Orders";
    this.getOrders()
  },
});