<script lang="ts" setup>
import { ref } from 'vue';

export interface IProduct {
    title: string,
    description: string,
    price: number,
    rating: number,
    brand: string,
    category: string,
    thumbnail: string
}

export interface IProductResponse {
    products: IProduct[]
    limit: number,
    skip: number,
    total: number
}

const columns = [{
    key: 'price',
    label: 'Ціна',
}, {
    key: 'title',
    label: 'Назва',
}, {
    key: 'description',
    label: 'Опис',
}, {
    key: 'rating',
    label: 'Оцінка',
}, {
    key: 'brand',
    label: 'Бренд',
}, {
    key: 'category',
    label: 'Категорія',
}, {
    key: 'thumbnail',
    label: 'Фото',
}];

const selectedColumns = ref(columns)
const columnsTable = computed(() => columns.filter((column) => selectedColumns.value.includes(column)))

const selectedRows = ref<IProduct[]>([])

const search = ref('')

const page = ref(1)
const pageCount = ref(10)
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() => page.value * pageCount.value)
const total = ref(0);
const products = ref<IProduct[]>([]);
const loading = ref(true);
const searching = ref(false);

const resetFilters = async () => {
    search.value = '';
    searching.value = false;
    await getData(page.value, pageCount.value);
}

const searchProducts = async () => {
    page.value = 1;
    searching.value = true;
    await getData(page.value, total.value, `https://dummyjson.com/products/search?q=${search.value}`);
}

const setData = (data: IProductResponse | null, pending: boolean) => {
    loading.value = pending;

    if (data) {
        total.value = data.total;
        products.value = data.products;
    }
}

const getData = async (currentPage: number, pageCount: number, request: string = `https://dummyjson.com/products`) => {
    const { data, pending } = await useLazyAsyncData<IProductResponse>('products', () => $fetch(request, {
        query: {
            'limit': pageCount,
            'skip': (currentPage - 1) * pageCount,
        }
    }), {
        default: () => null,
    });

    watch(pending, () => {
        setData(data.value, pending.value);
    });

    setData(data.value, pending.value);
}

await getData(page.value, pageCount.value);

watch(page, async (newPage) => {
    await getData(newPage, pageCount.value);
})
</script>

<template>
    <title>List of students</title>
    <UCard class="w-full" :ui="{
        base: '',
        ring: '',
        divide: 'divide-y divide-gray-200 dark:divide-gray-700',
        header: { padding: 'px-4 py-5' },
        body: { padding: '', base: 'divide-y divide-gray-200 dark:divide-gray-700' },
        footer: { padding: 'p-4' }
    }">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-900 dark:text-white leading-tight">
                Product List
            </h2>
        </template>

        <div class="flex items-center gap-3 px-4 py-3">
            <UInput v-model="search" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search..." />
            <UButton color="gray" size="xs" :disabled="search === ''" @click="searchProducts">
                Search
            </UButton>
        </div>

        <div class="flex justify-between items-center w-full px-4 py-3">
            <div class="flex gap-1.5 items-center">
                <UButton icon="i-heroicons-funnel" color="gray" size="xs" :disabled="!searching" @click="resetFilters">
                    Reset
                </UButton>
            </div>
            <div class="flex gap-1.5 items-center">
                <USelectMenu v-model="selectedColumns" :options="columns" :disabled="loading" multiple>
                    <UButton icon="i-heroicons-view-columns" color="gray" size="xs">
                        Columns
                    </UButton>
                </USelectMenu>
            </div>
        </div>

        <UTable v-model="selectedRows" :rows="products" :columns="columnsTable" :loading="loading"
            sort-asc-icon="i-heroicons-arrow-up" sort-desc-icon="i-heroicons-arrow-down" sort-mode="manual"
            class="w-full" :ui="{ td: { base: 'max-w-[0] truncate' } }">
            <template #thumbnail-data="{ row }">
                <img class="w-[100px] h-[100px]" :src="row.thumbnail" alt="Thumbnail" />
            </template>
            <template #rating-data="{ row }">
                <span :class="row.rating < 4.5 ? 'text-red-700' : 'text-green-700'">{{ row.rating }}</span>
            </template>
        </UTable>

        <template #footer>
            <div class="flex flex-wrap justify-between items-center">
                <div>
                    <span class="text-sm leading-5">
                        Showing
                        <span class="font-medium">{{ pageFrom }}</span>
                        to
                        <span class="font-medium">{{ pageTo }}</span>
                        of
                        <span class="font-medium">{{ total }}</span>
                        results
                    </span>
                </div>

                <UPagination v-model="page" :disabled="loading" :page-count="pageCount" :total="total" :ui="{
        wrapper: 'flex items-center gap-1',
        rounded: '!rounded-full min-w-[32px] justify-center',
        default: {
            activeButton: {
                variant: 'outline'
            }
        }
    }" />
            </div>
        </template>
    </UCard>
</template>