import { defineComponent } from "vue";

export default defineComponent({
  el: "#products",
  name: "ProductS",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "Products";
  },
});