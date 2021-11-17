<template>
  <nav class="navbar">
    <ul class="navbar__list container">
      <li class="navbar__list-item">
        <router-link class="navbar__link" to="/">Главная</router-link>
      </li>

      <li class="navbar__list-item">
        <router-link class="navbar__link" to="/shopcart">
          Корзина
          <span v-if="shopcartTotalCount"> ({{ shopcartTotalCount }}) </span>
        </router-link>
      </li>

      <li class="navbar__list-item">
        <router-link class="navbar__link" to="/favorites">
          Избранное
          <span v-if="favoritesTotalCount"> ({{ favoritesTotalCount }}) </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    shopcartTotalCount: {
      type: Number,
      default: 0,
    },
    favoritesTotalCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.navbar {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
}

.navbar__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar__list-item {
  display: inline-block;
}

.navbar__list-item:nth-child(1n + 2)::before {
  display: inline-block;
  content: "|";
  margin: 0 0.5rem;
  color: hsl(var(--gray-hsl));
}

.navbar__link {
  display: inline-block;
  font-weight: bold;
  color: hsl(var(--black-hsl));
  text-decoration: none;
}

.navbar__link.router-link-exact-active {
  color: hsl(var(--primary-hsl));
}
</style>
