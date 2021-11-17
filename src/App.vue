<template>
  <div id="app" class="app">
    <app-navbar
      :shopcart-total-count="shopcartTotalCount"
      :favorites-total-count="favoritesTotalCount"
    />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AppNavbar from "@/components/AppNavbar";

export default {
  name: "HomeView",
  components: {
    AppNavbar,
  },
  computed: {
    ...mapGetters({
      shopcartTotalCount: "products/shopcartTotalCount",
      favoritesTotalCount: "products/favoritesTotalCount",
    }),
  },
  created() {
    this.$store.dispatch("init");
  },
};
</script>

<style>
#app {
  --black-hsl: 210deg, 29%, 24%;
  --white-hsl: 0deg, 0%, 100%;
  --silver-hsl: 218deg, 17%, 88%;
  --gray-hsl: 218deg, 17%, 68%;
  --gray-dark-hsl: 218deg, 17%, 58%;
  --primary-hsl: 219deg, 100%, 50%;
  --primary-light-hsl: 219deg, 100%, 60%;
  --primary-dark-hsl: 219deg, 100%, 46%;
  --primary-extra-dark-hsl: 219deg, 100%, 42%;
  --danger-hsl: 359deg, 99%, 71%;
  --gutter: 1rem;
  --gutter-xl: 3rem;

  margin: 2rem 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: hsl(var(--black-hsl));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 64rem;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
