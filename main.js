const { createApp } = Vue;

import MainContainer from './components/MainContainer.vue'

createApp({
    template: `
            <nav>
                <ul>
                    <li><img src="" alt=""></li>
                    <li>Início</li>
                    <li>Menu</li>
                    <li>Contato</li>
                    <li>Sobre nós</li>
                </ul>
            </nav>
          <header>
            <img src="" alt="">
          </header>  
          <MainContainer/>
        `,
    data() {
        return {};
    },
    components: {
        MainContainer
    }
}).mount("#app");
