<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    // eslint-disable-next-line
		'$route' (to, from) {
			document.title = to.meta.title || 'StoneCap'
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-weight: bolder;
  color: black;
  filter: drop-shadow(1px 1px white);
  margin: 1rem;
}
.body-container {
  min-height: 100vh

}
.bg {
  background: url("./assets/body_bg.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
  padding: 0;
}
.modal-backdrop {
    display: none;
    z-index: 1040 !important;
}

.modal-content {
    margin: 2px auto;
    z-index: 1100 !important;
}
</style>
