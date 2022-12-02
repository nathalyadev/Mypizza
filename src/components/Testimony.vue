<template>
  <section class="testimony">
    <h1 class="title">Depoimentos</h1>
    <ul class="someTestimony">
      <li>
        <img src="../assets/icons/iconProfile.svg" alt="" />
        <p class="nameProfile">Rebeca</p>
        <p class="messageComment">
          “Melhor custo benefício. Sem dúvidas a melhor da cidade”
        </p>
      </li>
      <li>
        <img src="../assets/icons/iconProfile.svg" alt="" />
        <p class="nameProfile">Nathálya</p>
        <p class="messageComment">
          “Melhor atendimento, pizza muito saborosa e o melhor preço da cidade”
        </p>
      </li>
      <li>
        <img src="../assets/icons/iconProfile.svg" alt="" />
        <p class="nameProfile">Rebeca</p>
        <p class="messageComment">“Melhor pizza da cidade.”</p>
      </li>
    </ul>

    <section class="dots">
      <section class="dot"></section>
      <section class="dot"></section>
      <section class="dot"></section>
    </section>
  </section>
</template>

<script>
export default {
  name: "Testimony",
  components: {},
};
</script>

<style scoped>
.someTestimony {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.someTestimony li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 200px;
}
.nameProfile {
  font-family: "Besley";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  margin-top: 16px;
}
.messageComment {
  margin-top: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.dot {
  text-align: center;
  margin-top: 50px;
  background: #626262;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.dot:nth-child(1) {
  background: #D9D9D9;

}
</style>