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
      tempProductsToAdd.forEach((product, index) => {
        if(product.quantityAdded !== undefined) {
          this.totalQuanityofItems += product.quantityAdded
          this.totalPriceOfOrder += (product.quantityAdded * product.productPrice)
        } else {
          tempProductsToAdd.splice(index, 1);
        }
      });
      this.productsToAdd = tempProductsToAdd
    }
  },
  mounted() {
    this.message = "Create new Order";
  },
});