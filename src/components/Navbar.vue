<template>
    <div>
        <nav class=" bg-gray-300 mx-auto p-4 shadow-md">
            <div class=" flex justify-between items-center">
                <div>
                    <h1 class=" text-xl font-bold text-orange-700">Home</h1>
                </div>
                <div class=" flex items-center gap-6">
                    <router-link :to="{ name: 'byName' }" class=" hover:text-orange-500 cursor-pointer">
                        Search

                    </router-link>
                    <router-link :to="{ name: 'byLetter' }" class=" hover:text-orange-500 cursor-pointer">
                        Search by letter

                    </router-link>
                    <router-link :to="{ name: 'byIngredient' }" class=" hover:text-orange-500 cursor-pointer">
                        Search by Ingredient

                    </router-link>
                </div>
            </div>

        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>