import { defineComponent } from "vue";

export default defineComponent({
  el: "#detailCustomer",
  name: "detailCustomer",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "Customer Details";
  },
});