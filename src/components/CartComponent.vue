<script setup lang="ts">
// Importación de interfaz de libro
import type { Book } from '@/models/BookModel';

//
</script>

<template>
    <div class="cart">
        <!-- Itera colección de libros -->
        <div class="list-cart"> <!-- v-for="book in books" -->
            <div class="item-cart">
                <ul>
                    <li><img src="" alt=""></li>
                    <li>Nombre:</li>
                    <li>Descripción:</li>
                    <li>Precio:</li>
                    <li>Cantidad:</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    padding: 0.5rem;
}

</style>