<template>
    <div class=" p-2 m-2 bg-white shadow rounded-xl hover:scale-105 transition-all ">
        <router-link :to="{ name: 'byId', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" alt="" class=" w-full h-48 object-cover">

        </router-link>
        <div class=" p-3">
            <h1 class=" font-bold my-3">{{ meal.strMeal }}</h1>

            <button class=" bg-red-500 p-3 rounded-md my-4 cursor-pointer text-white">
                <a :href="meal.strYoutube" target="_blank">YouTube</a>
            </button>
        </div>

    </div>
</template>

<script setup>
const { meal } = defineProps({

    meal: {
        required: true,
        type: Object
    }
})
</script>

<style lang="scss" scoped></style>

