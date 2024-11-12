<template>
  <div class="h-screen">
    <NuxtLayout>
      <header>
        <nav class="flex justify-between bg-gray-900 text-white">
          <div class="px-2 xl:px-8 py-5 flex w-full items-center">
            <ul class="hidden md:flex px-4 font-semibold font-heading space-x-6">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/list-of-products">List of Products</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/list-of-products-0.5">List of Products 0.5</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/graphics">Graphics</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/posts">Blog Posts</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/categories">Blog Categories</NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
