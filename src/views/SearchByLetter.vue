<template>
    <div>
        <div class="flex gap-1 justify-center mt-3">
                <router-link :to="{ name: 'byLetter' }" v-for="letter of letters" :key="letter">
                    {{ letter }}
                </router-link>
            </div>
    </div>
</template>

<script setup>
    const letters = "ABCDEFGHIJKLMNOPQRSTUVW".split("");

</script>

