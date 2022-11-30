<template>
    <section class="contactUs">
        <h1>Contate-nos</h1>

        <form action="">
            <input type="text" name="name" id="name">
            <input type="email" name="email" id="email">
            <input type="tel" name="telephone" id="telephone">
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <input type="button" value="Enviar mensagem">
        </form>
    </section>
</template>

<script>
export default {
    name: "ContactUs",
}
</script>

<style scoped>

</style>