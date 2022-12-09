<template>
  <main>
    <Header />
    <MostRequest />
    <PizzaList />
    <Testimony />
    <AboutUs />
    <ContactUs />
    <Footer />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import MostRequest from "../components/MostRequest.vue";
import PizzaList from "../components/PizzaList.vue";
import Testimony from "../components/Testimony.vue";
import AboutUs from "../components/AboutUs.vue";
import ContactUs from "../components/ContactUs.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainContainer",
  components: {
    Header,
    MostRequest,
    PizzaList,
    Testimony,
    AboutUs,
    ContactUs,
    Footer,
  },
};
</script>