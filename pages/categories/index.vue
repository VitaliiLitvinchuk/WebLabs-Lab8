<template>
    <UCard class="w-full" :ui="{
        base: '',
        ring: '',
        divide: 'divide-y divide-gray-200 dark:divide-gray-700 h-min-full h-full',
        header: { padding: 'px-4 py-5' },
        body: { padding: '', base: 'divide-y divide-gray-200 dark:divide-gray-700' },
        footer: { padding: 'p-4' }
    }">
        <div v-if="total > 0" class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <div class="me-auto">
                <NuxtLink :to="'/category'"
                    class="mx-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
                    Створити
                </NuxtLink>
            </div>
            <UPagination v-model="page" :page-count="pageCount" :total="total" />
        </div>
        <div v-if="categories">
            <NuxtTable v-if="switcher && categories" :categories="categories" :columns="columns" :page="page" @handleDelete="deleteCategory"></NuxtTable>
        </div>
        <Loader v-else />
    </UCard>
</template>

<script setup lang="ts">
import Loader from "~/components/loader/index.vue"
import NuxtTable from "./components/nuxtTable/index.vue";
import { type ICategory, type IFunctional } from "~/types";

const columns: IFunctional[] = [{
    key: 'id',
    label: '#',
}, {
    key: 'title',
    label: 'Категорія'
}, {
    key: 'parent_category',
    label: 'Батьківська'
},
// {
//     key: 'actions',
//     label: '',
// }
];

const page = ref<number>(1);
const total = ref<number>(0);
const pageCount = ref<number>(13);
const categories = ref<[ICategory]>();

const getCategories = async () => {
    await $fetch<{ data: [ICategory], total: number }>(`http://localhost:8000/api/blog/categories`, {
        query: {
            'page': page.value,
            'per_page': pageCount.value,
        }
    }).then(response => {
        categories.value = response.data;
        total.value = response.total;
    });
}

watch(page, async () => {
    await getCategories();
});

await getCategories();

const deleteCategory = async (row: ICategory) => {
    await $fetch(`http://localhost:8000/api/blog/category/${row.id}`, {
        method: 'delete'
    }).then(async (response) => {
        await getCategories();
    });
}

const switcher = ref<boolean>(true);
const toggleSwitcher = () => {
    switcher.value = !switcher.value;
};
</script>