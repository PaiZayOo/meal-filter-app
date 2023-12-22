<template>
    <div class=" mt-3 flex justify-center ">
        <input class=" rounded p-3 border-gray-300 w-72" placeholder="Enter your meal" type="text" name="" id="">
    </div>
    <div class="flex gap-1 justify-center mt-3">
        <router-link  :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
</template>

<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVW".split("");
</script>
