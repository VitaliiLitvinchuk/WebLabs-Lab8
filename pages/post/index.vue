<template>
    <div
        class="max-w-5xl mx-auto mt-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
            <UTabs :items="items" class="w-full" v-if="post">
                <template #item="{ item }">
                    <div v-if="item.key === 'main'" class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="relative">
                                <input type="text" id="postCreated"
                                    class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    v-model="formattedCreatedAt" disabled />
                                <label for="postCreated"
                                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Створено</label>
                            </div>
                            <div class="relative">
                                <input type="text" id="postUpdated"
                                    class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    v-model="formattedUpdatedAt" disabled />
                                <label for="postUpdated"
                                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Змінено</label>
                            </div>
                            <div class="relative">
                                <input type="text" id="postPublished"
                                    class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    v-model="formattedPublishedAt" disabled />
                                <label for="postPublished"
                                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Опубліковано</label>
                            </div>
                        </div>
                        <div class="relative">
                            <input type="text" id="postTitle"
                                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" v-model="post.title" />
                            <label for="postTitle"
                                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Заголовок</label>
                        </div>
                        <div class="relative">
                            <textarea id="postContent"
                                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                v-model="post.content_raw"></textarea>
                            <label for="postContent"
                                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Текст статті</label>
                        </div>
                    </div>
                    <div class="space-y-3" v-else>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="relative">
                                <label for="categories"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Категорія</label>
                                <select id="categories" v-model="post.category.id"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option v-for="category in categories" :key="category.id" :value="category.id">
                                        {{ category.title }}
                                    </option>
                                </select>
                            </div>
                            <div class="mx-auto flex items-center">
                                <input id="isPublished" type="checkbox" :value="!!post.is_published"
                                    :checked="!!post.is_published"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="isPublished"
                                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Опубліковано</label>
                            </div>
                        </div>
                        <div class="relative">
                            <input type="text" id="slug"
                                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                v-model="post.slug" />
                            <label for="slug"
                                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Псевдонім</label>
                        </div>
                        <div class="relative">
                            <textarea id="postContent"
                                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                v-model="post.excerpt"></textarea>
                            <label for="postContent"
                                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Короткий текст</label>
                        </div>
                    </div>
                </template>
            </UTabs>
            <Loader v-else />
        </div>
    </div>
</template>

<script setup lang="ts">
import Loader from '~/components/loader/index.vue';
import type { ICategory, IColumn, IPost } from '~/types';

const paramId = useRoute().query.id;
const id = ref<string | null>(Array.isArray(paramId) ? paramId[0] : paramId || null);

if (!id.value)
    navigateTo('/posts');

const post = ref<IPost>();
const categories = ref<[ICategory]>();

const getPost = async () => {
    await $fetch<IPost>(`http://localhost:8000/api/blog/post/${id.value}`)
        .then(response => {
            post.value = response;
        });
};

await getPost();

const getCategories = async () => {
    await $fetch<[ICategory]>(`http://localhost:8000/api/blog/categories`)
        .then(response => {
            categories.value = response;
        });
}

await getCategories();

const items: IColumn[] = [{
    key: 'main',
    label: 'Основні дані'
}, {
    key: 'additional',
    label: 'Додаткові дані'
}];

const formatDate = (dateString: Date | undefined | null): string => {
    if (!dateString)
        return "";

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('uk-UA', options);
};

const formattedCreatedAt = computed(() => formatDate(post.value?.created_at));
const formattedUpdatedAt = computed(() => formatDate(post.value?.updated_at));
const formattedPublishedAt = computed(() => formatDate(post.value?.published_at));
</script>