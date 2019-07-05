<template>
  <div id="app">
    <h1 style="font-family: 'Poppins', sans-serif;"><b>BUG REPORT</b></h1>
    <router-view />
  </div>
</template>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #113c4a;
    background-color: #dddddd;
    /* width: 100vh; */
  }

  .h1 {
    font-family:
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #113c4a;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>