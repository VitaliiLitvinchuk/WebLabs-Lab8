<template>
    <UCard class="w-full" :ui="{
        base: '',
        ring: '',
        divide: 'divide-y divide-gray-200 dark:divide-gray-700',
        header: { padding: 'px-4 py-5' },
        body: { padding: '', base: 'divide-y divide-gray-200 dark:divide-gray-700' },
        footer: { padding: 'p-4' }
    }">
        <button class="btn btn-primary" @click="toggleSwitcher">Toggle Switcher</button>
        <Table v-if="switcher" :posts="posts"></Table>
        <NuxtTable v-else="switcher" :posts="posts"></NuxtTable>
    </UCard>
</template>

<script setup lang="ts">
import Table from "./table/index.vue";
import NuxtTable from "./nuxtTable/index.vue";
import type { IPost } from "~/types";

const posts = ref<[IPost]>();
const getPosts = async () => {
    await $fetch<[IPost]>('http://localhost:8000/api/blog/posts')
        .then(response => {
            posts.value = response;
        });
};

getPosts();

const switcher = ref<boolean>(true);
const toggleSwitcher = () => {
    switcher.value = !switcher.value;
};
</script>