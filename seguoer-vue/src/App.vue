<script setup>
import { reactive, ref } from 'vue'

const counter = reactive({ count: 0 })
const message = ref('Hello World!')

const titleClass = ref('title')
const contentTitleClass = ref('content-title')

</script>

<template>
  <h1 class="title">{{ message }}</h1>
  <p class="count-title">Count is: {{ counter.count }}</p>
</template>

<style>
.title {
  color: red;
}
.count-title{
  color: blueviolet;
}
</style>
