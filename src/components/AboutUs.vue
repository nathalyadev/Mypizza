<template>
  <section class="aboutUs">
    <section class="aboutImage">
      <img src="../assets/logo.svg" alt="" />
    </section>
    <section class="about">
      <h1>Sobre nós</h1>
      <p>
        Aqui na MyPizza, nós acreditamos em um serviço de atendimento aos
        clientes de altíssima qualidade – mas também somos da opinião de que
        todos os nossos clientes merecem vivenciar uma experiência de compra
        inesquecível, e é por isso que tentamos proporcionar produtos excelentes
        a um preço acessível.
      </p>
    </section>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.aboutUs {
  margin: 100px 0;
  display: flex;
  justify-content: space-evenly;
}
.about h1 {
  width: 73px;
  font-family: "Besley";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  text-transform: capitalize;
  margin-bottom: 30px;
}
.about p {
  max-width: 450px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}

.aboutImage {
  background: #252525;
  border-radius: 8px;
  width: 300px;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>