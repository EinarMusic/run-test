<script setup>
import { current, currentGeo } from "./utils/geo.js"
import { watch, watchGeo } from "./utils/watch.js"

import { addDoc, collection } from "firebase/firestore"; 
import { db } from "./utils/firebase.js"
import { ref } from "vue"

const addError = ref('ok!')

async function addData() {
  console.log(
    {current: current.value,
    watch: watch.value}
  )
try {
  const docRef = await addDoc(collection(db, "run"), {
    current: current.value,
    watch: watch.value
  });
} catch (e) {
  addError.value = "Error adding document"
}
}
</script>

<template>
  <div class="main">
    <div class="add-data">
      <div>
        <span @click="addData" class="btn-add">Save Data</span>
        <span>{{ addError }}</span>
      </div>
    </div>

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
.add-data {
  padding: 20px 10px;  
  border-bottom: 1px solid blue;

}
.current {
  border-bottom: 1px solid blue;
  padding: 20px 10px;  
}
.watch {
  padding: 20px 10px;
  border-bottom: 1px solid blue;
}

.btn-current, .btn-watch, .btn-add {
  display: inline;

  font-size: 25px;
  
  padding: 5px 15px;
  margin: 10px 0;

  border: 1px solid #646cff;
  border-radius: 15px;

  cursor: pointer;
}
</style>
