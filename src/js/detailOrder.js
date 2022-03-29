import { defineComponent } from "vue";

export default defineComponent({
  el: "#detailOrder",
  name: "detailOrder",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "Order Details";
  },
});