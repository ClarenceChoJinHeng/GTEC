<template>
  <section class="bg-blue-950 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-3">
        <div class="h-0.5 w-8 bg-yellow-400"></div>
        <span class="text-yellow-400 text-xs font-bold tracking-widest uppercase">GTEC SDN BHD</span>
      </div>
      <h1 class="text-4xl lg:text-5xl font-black text-white">Our Presence</h1>
    </div>
  </section>

  <section class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-slate-600 max-w-xl mx-auto">
          GTEC operates in Malaysia with offices serving both our corporate entity and our engineering division, both located in Kulim, Kedah.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(office, i) in offices"
          :key="i"
          class="bg-slate-50 rounded-3xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
        >
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-blue-950 rounded-2xl flex items-center justify-center shrink-0">
              <MapPinIcon class="size-6 text-yellow-400" />
            </div>
            <div>
              <div class="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-1">{{ office.type }}</div>
              <h3 class="text-base font-black text-slate-900 mb-3 leading-snug">{{ office.name }}</h3>
              <p class="text-slate-600 text-sm leading-relaxed">{{ office.address }}</p>
              <div class="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                <span>Kulim, Kedah, Malaysia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 bg-blue-950 rounded-3xl p-10 max-w-4xl mx-auto text-white">
        <h2 class="text-2xl font-black mb-2">Get In Touch</h2>
        <p class="text-white/55 mb-8">Reach out to us for your engineering and construction needs.</p>
        <div class="grid sm:grid-cols-2 gap-4 text-sm">
          <div
            v-for="contact in contacts"
            :key="contact.label"
            class="bg-white/5 rounded-2xl p-4 border border-white/10"
          >
            <div class="text-yellow-400 text-xs font-bold mb-1">{{ contact.label }}</div>
            <div class="text-white/80">{{ contact.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'

const offices = [
  {
    type: 'Corporate Entity',
    name: 'Global Tech Engineering & Construction Sdn Bhd',
    address: 'No 931 (Tingkat Bawah) Jalan Lembah Impiana 5, Taman Lembah Impiana III, 09000 Kulim, Kedah.',
  },
  {
    type: 'Engineering Division',
    name: 'Global Tech Engineering',
    address: 'No 931 (Tingkat Bawah) Jalan Lembah Impiana 5, Taman Lembah Impiana III, 09000 Kulim, Kedah.',
  },
]

const contacts = [
  { label: 'Office', value: '04 756 0015' },
  { label: 'Email', value: 'globaltechengineering.ak@gmail.com' },
  { label: 'Mr Aaron (Managing Director)', value: '+60 108068681' },
  { label: 'Ms Christina (Operation Manager)', value: '+60 168504417' },
]
</script>
