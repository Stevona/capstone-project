import { defineComponent } from "vue";

export default defineComponent({
  el: "#products",
  name: "ProductS",
  props: ['tempProductsToAdd'],
  data() {
    return {
      message: "",
      products: [],
      searchString: null,
      productsToAdd: [],
      itemQuantity:[]
    };
  },
  watch: {
  },
  computed: {
    resultProducts() {
      if (this.searchString) {
        return this.products.filter(product => {
          return this.searchString
            .toLowerCase()
            .split(" ")
            .every(v => product.productName.toLowerCase().includes(v));
        });
      } else {
        return this.products;
      }
    }
  },
  methods: {
    async getProducts () {
      try {
        const response = await fetch('/api/products', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('user'),
          },
        })
        this.products = await response.json()
        if(this.tempProductsToAdd) {
          this.products.forEach((product, index) => {
            let tempProductToSwitch = this.tempProductsToAdd.filter(tempProduct => {
              return product.productId == tempProduct.productId
            })
            if(tempProductToSwitch.length >=1) {
              this.products[index] = tempProductToSwitch[0]
              this.productsToAdd.push(tempProductToSwitch[0])
            }
          });
        }
        //this.products = [...new Set([...this.products, ...this.tempProductsToAdd])]
        
      } catch(error) {
        if(error.toString().includes('Unexpected token')) {
          localStorage.removeItem('user')
          alert('Please Relogin session has expired')
          window.location.href = '/login';
        }
        console.log(error)
      }
    },
    addProductToOrder: function(productToAdd) {
        let match = this.productsToAdd.filter(product => {
          return productToAdd.productId == product.productId
        });
        if(match.length == 0) {
          productToAdd.quantityAdded = 1
          productToAdd.inOrders = true
          this.productsToAdd.push(productToAdd)
        }
    },
    removeProductFromOrder: function(product) {
      delete product.quantityAdded
      delete product.inOrders

      let tempList = this.productsToAdd.filter(tempProduct => {
        return product.productId !== tempProduct.productId
      });
      this.productsToAdd = tempList
    },
    updateOrder: function() {
      let tempList = this.productsToAdd.filter(product => {
        return product.quantityAdded !== ""
      });
      this.productsToAdd.forEach(product => {
        if(product.quantityAdded == '') {
          delete product.quantityAdded
          delete product.inOrders
        }
      });
      this.productsToAdd = tempList
      this.$emit("productsToAdd", this.productsToAdd);
    }
  },
  mounted() {
    this.message = "Products";
    this.getProducts()
  },
});