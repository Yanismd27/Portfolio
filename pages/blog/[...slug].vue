
<template>
    <div class="min-h-screen bg-white">
      <article class="mx-auto max-w-4xl px-6 py-24">
        <div class="mb-12">
          <NuxtLink 
            to="/blog"
            class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Retour aux articles
          </NuxtLink>
  
          <img v-if="post?.cover" :src="post.cover" :alt="post.title" 
               class="w-full h-64 md:h-96 object-cover rounded-lg mb-8"/>
          
          <h1 class="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-italiana">
            {{ post?.title }}
          </h1>
          
          <div class="flex items-center gap-4 text-gray-600 mb-8">
            <time v-if="post?.date" :datetime="post.date">
              {{ new Date(post.date).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) }}
            </time>
            <span v-if="post?.readingTime">· {{ post.readingTime }} min de lecture</span>
          </div>
        </div>
  
        <div class="prose prose-lg max-w-none font-prata text-gray-800">
          <ContentRenderer v-if="post" :value="post" />
        </div>
  
        <div v-if="post?.tags" class="mt-12 pt-8 border-t">
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag"
                  class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </template>
  
  <script setup>
  const { path } = useRoute()
  const { data: post } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())
  
  // Redirection 404 si l'article n'existe pas
  if (!post.value) {
    throw createError({ statusCode: 404, message: 'Article non trouvé' })
  }
  </script>
  
  <style>
  .prose {
    max-width: none;
  }
  
  .font-italiana {
    font-family: 'Italiana', serif;
  }
  
  .font-prata {
    font-family: 'Prata', serif;
  }
  </style>