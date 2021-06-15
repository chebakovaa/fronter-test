<template>
  <div class="nav">
    <router-link to="/">Memory Game</router-link> |
    <router-link to="/adverts">Adverts</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.nav {
  padding: 15px 20px 20px;
  background-color: rgb(240, 236, 236);

}

.nav a {
  font-weight: bold;
  color: gray;
}

.nav a.router-link-exact-active {
  color: black;
}
</style>
