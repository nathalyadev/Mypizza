<template>
    <nav>
      <section class="logo">
        <img src="/favicon.png" alt="" />
      </section>
    <ul class="navbar">
      <li>Início</li>
      <li>Menu</li>
      <li>Contato</li>
      <li>Sobre nós</li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>

nav {
  background: #0C0C0C;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 1;
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
</style>