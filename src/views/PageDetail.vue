<template>
    <div>

        <div class=" max-w-[800px] mx-auto mt-3 p-3 bg-white rounded-xl">
            <img :src="meal.strMealThumb" alt="" class="w-full h-35 object-cover rounded-xl">
            <div class=" p-3">
                <h1 class=" mt-1 text-left mb-5 font-bold text-2xl">{{ meal.strMeal }}</h1>
                <div class=" flex justify-between my-4 items-center">
                    <div class=" bg-blue-400 p-3 rounded text-white">{{ meal.strCategory }}</div>
                    <div class=" bg-blue-400 p-3 rounded text-white">{{ meal.strArea }}</div>
                    <div class=" bg-blue-400 p-3 rounded text-white">{{ meal.strTags }}</div>
                </div>
                <p class=" my-3">{{ meal.strInstructions }}</p>
                
            </div>
             <div class="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul>
              <template v-for="(el, ind) of new Array(20)">
                <li v-if="meal[`strIngredient${ind + 1}`]">
                {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                </li>
              </template>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-2">Measures</h2>
            <ul>
              <template v-for="(el, ind) of new Array(20)">
                <li v-if="meal[`strMeasure${ind + 1}`]">
                {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                </li>
              </template>
            </ul>
          </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
const route = useRoute();
const meal = ref([])
onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0]

        })
})
</script>

