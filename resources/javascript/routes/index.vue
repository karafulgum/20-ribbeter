<template lang="html">
  <div class="">
    <h2 class="title">Recent Ribbits</h2>
    <div class="ribbit-grid">
      <div class="ribbit-grid__item ribbit-grid__item--sidebar">
        <div class="card">
          <p class="card__title">New Ribbit</p>
          <div class="card__content">
            <form class="card__form">
              <label for="ribbit-post">What's Going On?</label>
              <textarea rows="4"></textarea>
            </form>
        </div>
        <div class="card-btn">
          <a href="#" class="card-btn__back">Clear</a>
          <a href="#" class="card-btn__submit">Save</a>
        </div>
      </div>

      <div class="ribbit-grid__item ribbit-grid__item--main">

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
