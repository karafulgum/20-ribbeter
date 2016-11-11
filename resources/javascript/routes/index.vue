<template lang="html">
  <div class="">
    <h2 class="title">Recent Ribbits</h2>
    <div class="ribbit-grid">
      <div class="ribbit-grid__item ribbit-grid__item--sidebar">
        <div class="card">
          <p class="card__title">New Ribbit</p>
          <div class="card__content">
            <form>
              <label class="card__header" for="ribbit-post">What's Going On?</label>
              <textarea rows="8" class="card__input" id="ribbit-post"></textarea>
            </form>
        </div>
        <div class="card-btn">
          <a href="#" class="card-btn__back">Clear</a>
          <a href="#" class="card-btn__submit">Save</a>
        </div>
      </div>
    </div>

      <div class="ribbit-grid__item ribbit-grid__item--main">
        <div class="card">
          <p class="card__title">See What's Happening</p>
          <div class="card__content--btn">
            <a href="#" class="card-btn__back card-btn__back--full">Load New Ribbits</a>
          </div>
          <div class="card__row">
            <h3 class="card__username">$karafulgum</h3>
            <p class="card__text">What the user inputted goes here</p>
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
    };
  },

  methods: {

  },
};
</script>
