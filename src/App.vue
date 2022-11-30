<template>
  <nav>
      <section class="logo">
        <img src="../public/favicon.png" alt="" />
      </section>
    <ul class="navbar">
      <li>Início</li>
      <li>Menu</li>
      <li>Contato</li>
      <li>Sobre nós</li>
    </ul>
  </nav>
  <MainContainer />
</template>

<script>
import MainContainer from "./components/MainContainer.vue";

export default {
  name: "App",
  components: {
    MainContainer,
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
nav {
  background: #0C0C0C;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar li {
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}
.navbar > li:hover {
  border-bottom: 1.5px solid #fff;
}
.logo {
  margin-left: 50px;
  margin-top: 40px;
}
.logo img {
  max-width: 80px;
  max-height: 75px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-right: 100px;
}


.title {
  margin: 90px 0px 30px 0px;
  text-align: center;
  text-transform: uppercase;
}
</style>
