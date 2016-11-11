<template lang="html">
  <div class="">
    <h2 class="title">Recent Ribbits</h2>
    <div class="ribbit-grid">
      <div class="ribbit-grid__item ribbit-grid__item--sidebar">
        <div class="card">
          <form @submit.prevent="submitRibbit">
            <p class="card__title">New Ribbit</p>
            <div class="card__content">
                <label class="card__header" for="ribbit-post">What's Going On?</label>
                <textarea rows="8" class="card__input" id="ribbit-post" v-model="formValues.body"></textarea>
            </div>
            <div class="card-btn">
              <a class="card-btn__back" @click="reset">Clear</a>
              <button class="card-btn__submit">Save</button>
            </div>
          </form>
        </div>
      </div>

      <div class="ribbit-grid__item ribbit-grid__item--main">
        <div class="card">
          <p class="card__title">See What's Happening</p>
          <div class="card__content--btn">
            <a href="/app" class="card-btn__back card-btn__back--full">Load New Ribbits</a>
          </div>
          <div class="card__row" v-for="item in ribbits">
            <h3 class="card__username">{{ item.user.username }}</h3>
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
    getData() {
      fetch('/api/ribbits', {
        credentials: 'same-origin',
      })
      .then((r) => r.json())
      .then((ribbits) => {
        this.ribbits = ribbits;
      });
    },
    submitRibbit(formValues) {
      fetch('/api/ribbits', {
        credentials: 'same-origin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formValues),
      })
      .then((r) => r.json())
      .then((ribbit) => {
        this.ribbits = [ribbit, ...this.ribbits];
        this.reset();
      });
    },

    reset() {
      this.formValues = {};
    }
  },
};
</script>
