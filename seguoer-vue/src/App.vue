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
</script>

<template>
  <h1 class="title">{{ message }}</h1>
  <button class="count-title" @click="increment">count is: {{ count }}</button>
</template>

<style>
.title {
  color: red;
}
.count-title{
  color: blueviolet;
}
</style>
