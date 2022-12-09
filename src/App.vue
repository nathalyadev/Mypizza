<template>
  <Navbar />
  <MainContainer />
</template>

<script>
import MainContainer from "./components/MainContainer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    MainContainer,
    Navbar
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
body {
  background: #0C0C0C;
  color: #fff;
}

.title {
  margin: 90px 0px 30px 0px;
  text-align: center;
  text-transform: uppercase;
}
</style>
