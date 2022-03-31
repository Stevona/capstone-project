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
      firstName: this.$route.params.firstName,
      lastName: this.$route.params.lastName
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        const m = newValue.match(/(\S*)\s+(.*)/);

        this.firstName = m[1];
        this.lastName = m[2];
      }
    }
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