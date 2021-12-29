<template>
  <div>
    <div class="clock-box"><FlipClock></FlipClock></div>
  </div>
</template>


<script>
  import FlipClock from './flipClock'
  export default {
    components: {
      FlipClock
    },
    name: "Weather"
  }
</script>

<style scoped>
.clock-box {
  margin: 10px 0 20px 0;
}
</style>