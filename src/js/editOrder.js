import { defineComponent } from "vue";

export default defineComponent({
  el: "#editOrder",
  name: "editOrder",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "Edit Order";
  },
});