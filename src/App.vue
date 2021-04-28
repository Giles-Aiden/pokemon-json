<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <router-view />
    </transition>
    <!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/charmander">Charmander</router-link> |
      <router-link to="/charmeleon">Charmeleon</router-link> |
      <router-link to="/charizrd">Charizrd</router-link>
    </div> -->
  </div>
</template>

<style lang="scss">
@import "@/scss/_color.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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

body {
  background-color: red;
}
</style>
