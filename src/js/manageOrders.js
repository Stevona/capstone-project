import { defineComponent } from "vue";

export default defineComponent({
  el: "#manageOrders",
  name: "manageOrders",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "Manage Orders";
  },
});