<template>
  <section class="bg-blue-950 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-3">
        <div class="h-0.5 w-8 bg-yellow-400"></div>
        <span class="text-yellow-400 text-xs font-bold tracking-widest uppercase">GTEC SDN BHD</span>
      </div>
      <h1 class="text-4xl lg:text-5xl font-black text-white">Commitment &amp; Goal</h1>
    </div>
  </section>

  <section class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
      <!-- Commitments -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="h-0.5 w-8 bg-yellow-400"></div>
          <h2 class="text-2xl font-black text-slate-900">Our Commitments</h2>
        </div>
        <div class="space-y-4">
          <div
            v-for="(item, i) in commitments"
            :key="i"
            class="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div
              class="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-black shrink-0"
              :class="stepColors[i]"
            >{{ i + 1 }}</div>
            <p class="text-slate-700 font-medium leading-snug pt-1">{{ item }}</p>
          </div>
        </div>
      </div>

      <!-- Goals -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="h-0.5 w-8 bg-yellow-400"></div>
          <h2 class="text-2xl font-black text-slate-900">Our Goals</h2>
        </div>
        <div class="space-y-3">
          <div
            v-for="(item, i) in goals"
            :key="i"
            class="flex items-center gap-4 p-5 rounded-2xl bg-blue-950 text-white"
          >
            <div class="w-2 h-2 bg-yellow-400 rounded-full shrink-0"></div>
            <p class="font-medium leading-snug">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Commitment & Goal',
  description: "Discover GTEC's commitment to clients and our strategic goals — from building our brand and strengthening client relationships to maximising revenue.",
  ogTitle: 'Commitment & Goal | GTEC Sdn Bhd',
  ogDescription: "GTEC is committed to its clients and continuously works towards strategic goals in engineering and construction.",
  ogImage: 'https://gtec.com.my/assets/images/GTEC%20SDN%20BHD%20COMPANY%20PROFILE_page-0001.jpg',
  ogUrl: 'https://gtec.com.my/commitment-goal',
})

const commitments = [
  'Enrolled To The Client Commitments',
  'Implements Principals In The Client Commitments',
  'Measure Performance In The Projects',
  'Examine Behaviours Using Constructing Excellence Health',
  'Analyse to Improvement and Identify Improvement Action',
]

const goals = [
  'Create or Review Your Strategic Plan',
  'Build Your Brand',
  'Strengthen Client Relationships',
  'Maximize Revenue',
  'Research Competitors and Market Trends',
]

const stepColors = [
  'bg-red-600',
  'bg-orange-500',
  'bg-amber-500',
  'bg-yellow-500',
  'bg-slate-400',
]
</script>
