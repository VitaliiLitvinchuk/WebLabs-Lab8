<template>
    <UTable v-model="selectedRows" :rows="rows" :columns="columnsTable" sort-asc-icon="i-heroicons-arrow-up"
        sort-desc-icon="i-heroicons-arrow-down" sort-mode="manual" class="w-full"
        :ui="{ td: { base: 'max-w-[0] truncate' } }" />
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
        <UPagination v-model="page" :page-count="pageCount" :total="total" />
    </div>
</template>

<script setup lang="ts">
import type { IPost } from '~/types';

const { posts } = defineProps<{
    posts: [IPost]
}>();

const columns = [{
    key: 'id',
    label: '#',
}, {
    key: 'user.name',
    label: `Автор`,
}, {
    key: 'category.title',
    label: 'Категорія',
}, {
    key: 'title',
    label: 'Заголовок',
}, {
    key: 'published_at',
    label: 'Опубліковано',
}];

const selectedColumns = ref(columns);
const columnsTable = computed(() => columns.filter((column) => selectedColumns.value.includes(column)));

const page = ref(1);
const total = ref(posts.length);
const pageCount = 12;

const rows = computed(() => {
    return posts.slice((page.value - 1) * pageCount, page.value * pageCount);
});
</script>