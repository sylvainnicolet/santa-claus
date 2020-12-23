<template>
  <div id="home">
    <div class="container">
      <router-link to="/happy-new-year"><img class="present" alt="Vue logo" src="../assets/present.png"></router-link>
      <img class="click-to-open" src="../assets/click_to_open.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
  #home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-color: #374b5f;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .present {
    width: 150px;
    position: relative;
    right: 140px;
  }

  .click-to-open {
    margin-top: 10px;
    width: 300px;
  }
</style>
