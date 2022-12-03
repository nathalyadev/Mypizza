<template>
  <header>
    <section class="banner">
      <section class="bannerLeft">
        <h1>
          A felicidade na <br />
          palma <br />
          da sua mão
        </h1>
        <h2>Faça o seu pedido pelo delivery</h2>
        <button class="btnHeader">Peça já a sua</button>
      </section>
      <section class="imgBannerContainer">
        <img class="imgBanner" src="../assets/AppDelivery.svg" alt="" />
      </section>
    </section>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.banner {
  background: #252525;
  max-height: 350px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bannerLeft {
}
.bannerLeft h1 {
  font-family: "Besley";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  text-transform: capitalize;
}
.bannerLeft h2 {
  font-family: "Besley";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  margin: 16px 0px;
}
.btnHeader {
  font-family: "Besley";
  font-weight: 500;
  font-size: 18px;
  padding: 10px 21px;

  color: #fff;
  background: #f27405;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
.imgBannerContainer {
  transform: rotate(31.46deg);
  max-width: 360px;
  max-height: 540px;
}
/* 
.imgBannerContainer::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-top: 200px solid #5386e4;
  position: absolute;
  bottom: 200px;
  right: 1rem;
  transform: rotate(-32.46deg);
} */
</style>