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
  filter: drop-shadow(1px 1px white)
}
</style>
