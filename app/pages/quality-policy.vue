<template>
  <section class="bg-blue-950 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-3">
        <div class="h-0.5 w-8 bg-yellow-400"></div>
        <span class="text-yellow-400 text-xs font-bold tracking-widest uppercase">GTEC SDN BHD</span>
      </div>
      <h1 class="text-4xl lg:text-5xl font-black text-white">Quality Policy</h1>
    </div>
  </section>

  <section class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center mb-14">
        <p class="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
          GTEC is committed to the highest standards of quality in all our products, services and operations. Our quality policy is built on three core pillars.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(pillar, i) in pillars"
          :key="i"
          class="rounded-3xl p-8 text-center border-2 hover:-translate-y-1 transition-transform duration-200"
          :class="pillar.cardClass"
        >
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" :class="pillar.iconBg">
            <component :is="pillar.icon" class="size-8" :class="pillar.iconColor" />
          </div>
          <h3 class="text-lg font-black mb-4 uppercase tracking-wide" :class="pillar.titleColor">{{ pillar.title }}</h3>
          <p class="text-sm leading-relaxed" :class="pillar.textColor">{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Quality Policy',
  description: "GTEC's quality policy is built on three core pillars: Customer First, Efficient Processes, and Continuous Improvement — ensuring the highest standards in every project.",
  ogTitle: 'Quality Policy | GTEC Sdn Bhd',
  ogDescription: 'GTEC is committed to the highest standards of quality through customer-first thinking, efficient processes, and continuous improvement.',
  ogImage: 'https://gtec.com.my/assets/images/GTEC%20SDN%20BHD%20COMPANY%20PROFILE_page-0001.jpg',
  ogUrl: 'https://gtec.com.my/quality-policy',
})

import { StarIcon, CogIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'

const pillars = [
  {
    title: 'Customer First',
    desc: 'We provide products, services and solutions that satisfy and exceed customer expectations.',
    icon: StarIcon,
    cardClass: 'border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    titleColor: 'text-blue-900',
    textColor: 'text-blue-800/70',
  },
  {
    title: 'Efficient Processes',
    desc: 'We follow efficient and reliable processes that are capable of meeting requirements of business.',
    icon: CogIcon,
    cardClass: 'border-blue-950 bg-blue-950',
    iconBg: 'bg-yellow-400',
    iconColor: 'text-blue-950',
    titleColor: 'text-yellow-400',
    textColor: 'text-white/70',
  },
  {
    title: 'Continuous Improvement',
    desc: 'We improve our service, processes and people through continuous improvements based on Agile and Lean principles.',
    icon: ArrowPathIcon,
    cardClass: 'border-yellow-200 bg-yellow-50',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    titleColor: 'text-slate-900',
    textColor: 'text-slate-600',
  },
]
</script>
