<template>
    <UTable :rows="categories" :columns="columns" sort-asc-icon="i-heroicons-arrow-up"
        sort-desc-icon="i-heroicons-arrow-down" sort-mode="manual" class="w-full" :ui="{ td: { base: 'truncate' } }">
        <template #title-data="{ row }">
            <NuxtLink :to="`/category?id=${row.id}`">
                {{ row.title }}
            </NuxtLink>
        </template>
        <template #parent_category-data="{ row }">
            <div :class="row.parent_category ? row.parent_category.id === 1 ? 'text-slate-700' : '' : 'text-slate-700'">
                {{ row.parent_category ? row.parent_category.title : 'Корінь' }}
            </div>
        </template>
        <template #actions-data="{ row }">
            <div>
                <button
                    @click="emit('handleDelete', row)"
                    class="mx-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400">
                    Видалити
                </button>
            </div>
        </template>
    </UTable>
</template>

<script setup lang="ts">
import type { IFunctional, ICategory } from '~/types';

const { categories, columns } = defineProps<{
    categories: [ICategory],
    columns: IFunctional[]
}>();

const emit = defineEmits(['handleDelete']);
</script>