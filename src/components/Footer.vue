<template>
  <section class="footer">
    <section class="ourAddress">
      <p class="titleOurAddress">Nosso Endereço</p>
      <p class="address">
        Nº 19 <br />
        Boa Sorte <br />
        R. J Martins
      </p>
      <p class="city">Araguaína - TO</p>
    </section>
    <section class="ourContacts">
      <p class="titleOurContacts">Nossos Contatos</p>
      <p>
        mypizza@gmail.com <br />
        +55 (63) 9999-9999
      </p>
      <section class="socialMedia">
        <img src="../assets/icons/iconFacebook.svg" alt="" />
        <img src="../assets/icons/iconInstagram.svg" alt="" />
        <img src="../assets/icons/iconWhatsapp.svg" alt="" />
      </section>
    </section>
  </section>
  <section class="spanCopyright">
    <span>MyPizza 2022 | Todos os direitos reservados </span>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: flex-start;
  gap: 85px;
  margin-bottom: 50px;
}
.ourAddress {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 208px;
}
.titleOurAddress,
.titleOurContacts {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
}
.address,
.city,
.ourContacts:nth-child(2) {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.ourContacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.socialMedia {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
}

.spanCopyright {
  text-align: center;
}
.spanCopyright span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
</style>