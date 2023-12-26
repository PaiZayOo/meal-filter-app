<template>
    <div>
        <div class=" mt-3 flex justify-center w-100 ">
            <input v-model="keyword" @change="searchMeal" class=" rounded p-3 border-gray-300 w-72"
                placeholder="Enter your meal" type="text" name="" id="">

        </div>
       <Meals :meals="meals"/>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { computed } from "@vue/reactivity";

import { store } from '../store'
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';
const route = useRoute();
const keyword = ref('');
const meals = computed(() => {
    return store.state.searchMeals
})

function searchMeal() {
    return store.dispatch('searchMeals', keyword.value)
}
onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeal();
    }
})
</script>

