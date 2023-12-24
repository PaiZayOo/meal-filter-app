<template>
    <div>
        <div class=" mt-3 flex justify-center w-100 ">
            <input v-model="keyword"  class=" rounded p-3 border-gray-300 w-72" placeholder="Enter your meal" type="text" name="" id="">
            <button @click="searchMeal">Search</button>
        </div>
        <pre>{{meals}}</pre>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { computed } from "@vue/reactivity";

import {store} from '../store/index'
const keyword = ref('')
const meals = computed(() => {
    store.state.searchMeal
})

function searchMeal() {
     store.dispatch('searchByName',keyword.value)
}
onMounted(() => {
    console.log(store.state.searchMea);
})
</script>

