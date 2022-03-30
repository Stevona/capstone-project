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
    };
  },
  created() {
    this.getOrder()
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
      } catch(error) {
        console.log(error)
      }
    },
},
  mounted() {
    this.message = "Order Details";
  },
});