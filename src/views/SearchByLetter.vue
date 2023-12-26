<template>
    <div>
        <div class="flex gap-1 justify-center mt-3">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
    <Meals :meals="meals"/>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import store from '../store';
import { onMounted } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';
import Meals from '../components/Meals.vue';


const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVW".split("");

const meals = computed(() => {
    return store.state.mealsByLetter
})

watch(route, () => {
    store.dispatch('searchByLetter', route.params.letter)

})

onMounted(() => {
    store.dispatch('searchByLetter', route.params.letter)
});

</script>

