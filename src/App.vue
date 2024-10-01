<script setup>
import { current, currentGeo } from "./utils/geo.js"
import { watch, watchGeo } from "./utils/watch.js"
</script>

<template>
  <div class="main">
    <div class="current">
      <div>
        <span @click="currentGeo" class="btn-current">Start Current</span>
      </div>
      <span>{{ current }}</span>
    </div>

    <div class="watch">
      <div>
        <span @click="watchGeo" class="btn-watch">Start Watch</span>
      </div>
      <span>{{ watch }}</span>
    </div>
  </div>
</template>

<style scoped>
.current {
  border-bottom: 1px solid blue;
  padding: 20px 10px;  
}
.watch {
  padding: 20px 10px;
}

.btn-current, .btn-watch {
  display: inline;

  font-size: 25px;
  
  padding: 5px 15px;
  margin: 10px 0;

  border: 1px solid #646cff;
  border-radius: 15px;

  cursor: pointer;
}
</style>
