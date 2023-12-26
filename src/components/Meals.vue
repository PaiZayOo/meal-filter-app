<template>
    <div>
        <div class=" grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 mt-4">
            <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
           
        </div>
         <div v-if="!meals.length" class=" text-center">
                    There are no meals
        </div>
    </div>
</template>

<script setup>
import MealCard from './MealCard.vue';
const { meals } = defineProps({
    meals: {
        required: true,
        type: Array
    }
})
</script>

<style lang="scss" scoped></style>