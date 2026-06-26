<template>
  <section class="bg-blue-950 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-3">
        <div class="h-0.5 w-8 bg-gray-300"></div>
        <span class="text-gray-300 text-xs font-bold tracking-widest uppercase">GTEC SDN BHD</span>
      </div>
      <h1 class="text-4xl lg:text-5xl font-black text-white">Banking Facilities</h1>
    </div>
  </section>

  <section class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center mb-14">
        <p class="text-slate-600 max-w-xl mx-auto">
          GTEC maintains banking facilities with leading financial institutions in Malaysia to ensure seamless and reliable business transactions.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div
          v-for="bank in banks"
          :key="bank.name"
          class="bg-slate-50 rounded-3xl p-10 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col items-center text-center"
        >
          <div class="w-20 h-20 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-6">
            <BuildingLibraryIcon class="size-10 text-blue-900" />
          </div>
          <h3 class="text-2xl font-black text-slate-900 mb-3">{{ bank.name }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ bank.desc }}</p>
        </div>
      </div>

      <div class="mt-16 bg-slate-50 rounded-3xl p-10 max-w-2xl mx-auto border border-slate-200 text-center">
        <CurrencyDollarIcon class="size-10 text-blue-900 mx-auto mb-4" />
        <h3 class="text-lg font-black text-slate-900 mb-2">Financial Credibility</h3>
        <p class="text-slate-500 text-sm leading-relaxed">
          Our banking relationships with Maybank and OCBC Bank reflect our financial credibility and commitment to transparent business operations.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Banking Facilities',
  description: 'GTEC Sdn Bhd maintains banking facilities with Maybank and OCBC Bank, reflecting our financial credibility and commitment to transparent business operations.',
  ogTitle: 'Banking Facilities | GTEC Sdn Bhd',
  ogDescription: 'GTEC maintains banking facilities with leading Malaysian financial institutions — Maybank and OCBC Bank.',
  ogImage: 'https://gtec.com.my/favicon.ico',
  ogUrl: 'https://gtec.com.my/banking-facilities',
})

import { BuildingLibraryIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'

const banks = [
  {
    name: 'Maybank',
    desc: "Malayan Banking Berhad — Malaysia's largest financial services group and a leading ASEAN bank.",
  },
  {
    name: 'OCBC Bank',
    desc: 'Oversea-Chinese Banking Corporation — one of Southeast Asia\'s leading financial services groups.',
  },
]
</script>
