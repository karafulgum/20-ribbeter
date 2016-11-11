<template lang="html">
  <div class="">
    <h2 class="title">Recent Ribbits</h2>
    <div class="ribbit-grid">
      <div class="ribbit-grid__item ribbit-grid__item--sidebar">
        <div class="card">
          <div class="card__content--btn">
            <a href="/app" class="card-btn__submit card-btn__submit--full">See All Ribbits</a>
          </div>
        </div>
      </div>

      <div class="ribbit-grid__item ribbit-grid__item--main">
        <div class="card" v-for="item in ribbits">
          <p class="card__title">${{ item.user.username }}</p>
          <div class="card__content--btn">
            <button href="/app" class="card-btn__back card-btn__back--full" @click="getData">Load New Ribbits</button>
          </div>
          <div class="card__row" v-for="item in ribbits">
            <router-link :to="{ name: 'user', params: { username: item.user.username }}"><h3 class="card__username">${{ item.user.username }}</h3></router-link>
            <p class="card__body">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ribbits: [],
      formValues: {},
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData(username) {
      fetch(`/api/ribbits?user=${this.$route.params.username}`, {
        credentials: 'same-origin',
      })
      .then((r) => r.json())
      .then((ribbits) => {
        this.ribbits = ribbits;
      });
    },
  },
};
</script>
