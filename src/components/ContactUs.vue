<template>
  <section class="contactUs">
    <section class="map">
      <img src="../assets/map.svg" alt="" />
      <h1>Contate-nos</h1>
    </section>

    <section class="formContainer">
      <form action="">
        <input type="text" name="name" id="name" />
        <label for="name">Nome</label>

        <input type="email" name="email" id="email" />
        <label for="email">Email</label>

        <input type="tel" name="telephone" id="telephone" />
        <label for="telephone">Telefone</label>

        <textarea name="message" id="message"></textarea>
        <label for="message">Mensagem</label>

        <section class="btnSubmit">
          <button>Enviar mensagem</button>
        </section>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
.contactUs {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.map {
  z-index: -1;
  position: absolute;
}
.map h1 {
  position: relative;
  bottom: 80px;
  text-transform: uppercase;
  font-family: "Besley";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 54px;
  margin-left: 208px;
}

.formContainer {
  margin-right: 80px;
}
form {
  background: #fff;
  color: #000;
  border-radius: 8px;
  width: 423px;
  height: 520px;
  padding: 40px 0px;

  display: flex;
  flex-direction: column;
}
input, textarea, label {
  margin-left: 30px;
}
form input,
textarea {
  outline: none;
  height: 25px;
  width: 80%;
  border: none;
  border-bottom: 1px solid black;
  resize: none;
  margin-bottom: 30px;
}
label[for="name"],
label[for="email"],
label[for="telephone"] {
  transform: translate(0%, -260%);
}
label[for="message"] {
  transform: translate(0%, -260%);
}
input[type="text"]:focus ~ label[for="name"],
input[type="email"]:focus ~ label[for="email"],
input[type="tel"]:focus ~ label[for="telephone"] {
  transform: translate(0%, -70px);
}
textarea:focus ~ label[for="message"] {
  transform: translate(0%, -196px);
}
textarea:focus {
  height: 150px;
}

.btnSubmit {
  display: flex;
  justify-content: flex-end;
}
.btnSubmit button {
  background: #121011;
  color: #fff;
  max-width: 160px;
  height: 40px;
  padding: 10px 16px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
}
</style>