<template>
    <div class="container">
        <div class="flex justify-center">
            <div class="w-full">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-auto">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Автор</th>
                                    <th>Категорія</th>
                                    <th>Заголовок</th>
                                    <th>Дата публікації</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="post in posts">
                                    <td>{{ post.id }}</td>
                                    <td>{{ post.user.name }}</td>
                                    <td>{{ post.category.title }}</td>
                                    <td><a :href="'/admin/blog/posts/' + post.id + '/edit'">{{ post.title }}</a></td>
                                    <td>{{ post.published_at }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IPost } from '~/types';

defineProps<{
  posts: [IPost]
}>();
</script>