<template>
  <main>
    <Header />

    <section class="mostRequest">
      <h1 class="titleMostRequest">Mais Pedidas</h1>
      <ul class="cardPizzas">
        <li>
          <img src="../assets/pizza.svg" alt="" />
          <section class="informationPizza">
            <p class="titleTypePizza">Pizza de Milho</p>
            <p class="valuePizza">R$ 30,00</p>
            <button class="btn">Peça já a sua</button>
          </section>
        </li>

        <li>
          <img src="../assets/pizza.svg" alt="" />
          <section class="informationPizza">
            <p class="titleTypePizza">Pizza de Milho</p>
            <p class="valuePizza">R$ 30,00</p>
            <button class="btn">Peça já a sua</button>
          </section>
        </li>

        <li>
          <img src="../assets/pizza.svg" alt="" />
          <section class="informationPizza">
            <p class="titleTypePizza">Pizza de Milho</p>
            <p class="valuePizza">R$ 30,00</p>
            <button class="btn">Peça já a sua</button>
          </section>
        </li>
      </ul>
    </section>
    <PizzaList />
    <Testimony />
    <AboutUs />
    <ContactUs />
    <Footer />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import PizzaList from "../components/PizzaList.vue";
import Testimony from "../components/Testimony.vue";
import AboutUs from "../components/AboutUs.vue";
import ContactUs from "../components/ContactUs.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainContainer",
  components: {
    Header,
    PizzaList,
    Testimony,
    AboutUs,
    ContactUs,
    Footer,
  },
};
</script>

<style scoped>
/* Section -- MostRequest */
.titleMostRequest {
  padding: 90px 0px 30px 0px;
  text-align: center;
  text-transform: uppercase;
  background: #0c0c0c;
  z-index: 2;
  position: relative;
}
.cardPizzas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
}
.cardPizzas li {
  width: 263px;
  height: 329px;
  background: #252525;
}
.informationPizza {
  margin: 27px 0px 0px 24px;
  font-family: "Roboto", sans-serif;
}
.titleTypePizza {
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
.valuePizza {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #feab0e;
}
.informationPizza .btn {
  border: 1px solid #fbad19;
  background: transparent;
  color: #fff;
  padding: 8px 16px;
  margin-top: 24px;
  cursor: pointer;
}
.btn:hover {
  background: #fbad19;
}
</style>