<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/charmander">Charmander</router-link> |
      <router-link to="/charmeleon">Charmeleon</router-link> |
      <router-link to="/charizrd">Charizrd</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/scss/_colors.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
$color-a;
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
