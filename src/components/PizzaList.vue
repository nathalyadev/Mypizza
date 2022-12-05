<template>
  <section class="pizzaList">
    <img src="../assets/pizza2.svg" alt="" />
    <ul class="menuPizza">
      <h1>Pizza</h1>
      <li>
        <img src="../assets/pepperoniPizza.svg" alt="" />
        <section class="somePizza">
          <p class="typePizza">Calabresa</p>
          <p class="descriptionPizza">
            Molho de tomate, mussarela, calabresa, cebola e orégano
          </p>
        </section>
        <p class="valuePizza">R$ 20,00</p>
      </li>

      <li>
        <img src="../assets/pepperoniPizza.svg" alt="" />
        <section class="somePizza">
          <p class="typePizza">Calabresa</p>
          <p class="descriptionPizza">
            Molho de tomate, mussarela, calabresa, cebola e orégano
          </p>
        </section>
        <p class="valuePizza">R$ 20,00</p>
      </li>

      <li>
        <img src="../assets/pepperoniPizza.svg" alt="" />
        <section class="somePizza">
          <p class="typePizza">Calabresa</p>
          <p class="descriptionPizza">
            Molho de tomate, mussarela, calabresa, cebola e orégano
          </p>
        </section>
        <p class="valuePizza">R$ 20,00</p>
      </li>

      <li>
        <img src="../assets/pepperoniPizza.svg" alt="" />
        <section class="somePizza">
          <p class="typePizza">Calabresa</p>
          <p class="descriptionPizza">
            Molho de tomate, mussarela, calabresa, cebola e orégano
          </p>
        </section>
        <p class="valuePizza">R$ 20,00</p>
      </li>
      <section class="btnContainer">
        <button class="btnAllPizzas" >Ver menu completo</button>
      </section>
    </ul>

    <section class="modal" v-show="modal">
      <section class="modalContainer">
        <section class="modalHeader">
          <span class="close">&times;</span>
        </section>
        <section class="modalBody">
          <img src="../assets/Menu.png" alt="" />
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "PizzaList",
  data() {
    return {
      modal: false
    }
  }
};
</script>

<style scoped>
.pizzaList {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 170px;
  margin-top: 100px;
}
.menuPizza h1 {
  font-family: "Besley";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 37px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.menuPizza li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  gap: 30px;
}
.typePizza,
.valuePizza {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #fbad19;
}
.descriptionPizza {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #dddddd;
}

.btnContainer {
  text-align: right;
}
.btnContainer button {
  border: 1px solid #fbad19;
  color: #fff;
  background: transparent;
  padding: 8px 25px;
}

/* Modal */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;
}
</style>