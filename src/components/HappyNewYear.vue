<template>
  <div id="happy-new-year">
    <p class="text">
      Hi Miriam!<br><br>
      I hope everything is okay.<br>
      I wish you merry Christmas and happy New Year!<br>
      ❄️🎄<br><br>
      Your Secret Santa 🎅🏼
    </p>
  </div>
</template>

<script>
export default {
  name: 'HappyNewYear',
}
</script>

<style lang="scss" scoped>
@import url(//db.onlinewebfonts.com/c/fe3894fd3780a37b921eebcc272f6e3e?family=DK+Lemon+Yellow+Sun);

#happy-new-year {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;

  background-color: #374b5f;
}

.text {
  color: white;
  font-family: 'DK Lemon Yellow Sun', sans-serif;
  font-size: 36px;
  letter-spacing: 2px;
  line-height: 50px;
}
</style>
