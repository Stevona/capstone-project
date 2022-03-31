import { defineComponent } from "vue";

export default defineComponent({
  el: "#addOrder",
  name: "addOrder",
  data() {
    return {
      message: "",
      productsToAdd: [],
      totalQuanityofItems: 0,
      totalPriceOfOrder: 0
    };
  },
  methods: {
    updateProducts(tempProductsToAdd) {
      this.totalQuanityofItems = 0
      this.totalPriceOfOrder = 0
      console.log("here",tempProductsToAdd)
      tempProductsToAdd.forEach(product => {
        this.totalQuanityofItems += product.quantityAdded
        this.totalPriceOfOrder += (product.quantityAdded * product.productPrice)
      });
      this.productsToAdd = tempProductsToAdd
    }
  },
  mounted() {
    this.message = "Create new Order";
  },
});