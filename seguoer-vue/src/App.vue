<script setup>
import { reactive, ref } from 'vue'

const counter = reactive({ count: 0 })
const message = ref('Hello World!')

const titleClass = ref('title')
const contentTitleClass = ref('content-title')
const count = ref(0)

function increment() {
  count.value++
}
const text = ref('')
const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <h1 class="title">{{ message }}</h1>
  <div><button class="count-title" @click="increment">count is: {{ count }}</button></div>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>

<style>
.title {
  color: red;
}
.count-title{
  color: blueviolet;
}
</style>
