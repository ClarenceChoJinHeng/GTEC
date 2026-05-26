<template>
  <section class="bg-blue-950 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-3">
        <div class="h-0.5 w-8 bg-yellow-400"></div>
        <span class="text-yellow-400 text-xs font-bold tracking-widest uppercase">GTEC SDN BHD</span>
      </div>
      <h1 class="text-4xl lg:text-5xl font-black text-white">Project Profiles</h1>
      <p class="text-white/55 mt-3 text-base">A showcase of our completed projects across multiple industries and clients.</p>
    </div>
  </section>

  <section class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">

      <div v-for="project in projects" :key="project.id" class="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">

        <!-- Project header -->
        <div class="bg-blue-950 px-8 py-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div class="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-1">{{ project.client }}</div>
            <h2 class="text-xl font-black text-white">{{ project.title }}</h2>
          </div>
          <div class="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
            <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            <span class="text-white/70 text-xs font-medium">{{ project.works.length }} work package{{ project.works.length !== 1 ? 's' : '' }}</span>
          </div>
        </div>

        <!-- Photo grid -->
        <div class="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="work in project.works"
            :key="work.label"
            @click="openLightbox(work)"
            class="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div class="aspect-video overflow-hidden bg-slate-100">
              <img
                :src="work.image"
                :alt="work.label"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-3 flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0"></div>
              <p class="text-xs font-medium text-slate-700">{{ work.label }}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightbox"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        @click.self="closeLightbox"
      >
        <div class="relative max-w-5xl w-full">
          <button
            @click="closeLightbox"
            class="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium flex items-center gap-1.5"
          >
            <XMarkIcon class="size-5" />
            Close
          </button>
          <img
            :src="lightbox.image"
            :alt="lightbox.label"
            class="w-full rounded-2xl shadow-2xl"
          />
          <div class="mt-3 flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0"></div>
            <p class="text-white/80 text-sm font-medium">{{ lightbox.label }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

interface Work {
  label: string
  image: string
}

const lightbox = ref<Work | null>(null)

function openLightbox(work: Work) {
  lightbox.value = work
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.value = null
  document.body.style.overflow = ''
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => document.addEventListener('keydown', onKeyDown))
onUnmounted(() => document.removeEventListener('keydown', onKeyDown))

const projects = [
  {
    id: 'inokom',
    client: 'Sime Darby | Inokom',
    title: 'INOKOM-BMW Plant Expansion',
    works: [
      { label: 'Concrete flooring works', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0012.jpg' },
      { label: 'Office construction works', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0013.jpg' },
      { label: 'Office electrical works', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0014.jpg' },
      { label: 'New plant ESD flooring works', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0015.jpg' },
    ],
  },
  {
    id: 'basf',
    client: 'BASF',
    title: 'Scrubber System Refurbishment Project',
    works: [
      { label: 'Scrubber system servicing and repairing works', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0017.jpg' },
    ],
  },
  {
    id: 'schaefer',
    client: 'Schaefer Kalk',
    title: 'Civil Works — Site Development',
    works: [
      { label: 'Site clearing works', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0019.jpg' },
      { label: 'Crusher run compaction works', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0020.jpg' },
    ],
  },
  {
    id: 'kinetics',
    client: 'Kinetics Malaysia',
    title: 'Emergency Door & Panic Push Bar Works',
    works: [
      { label: 'Emergency door and panic push bar installation', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0022.jpg' },
    ],
  },
  {
    id: 'dominos',
    client: "Domino's Pizza",
    title: 'Kitchen Renovation Works',
    works: [
      { label: "Replace kitchen damage tiles — Seberang Jaya outlet", image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0025.jpg' },
    ],
  },
  {
    id: 'intel',
    client: 'Intel',
    title: 'Intel KM — Facilities Maintenance & Construction',
    works: [
      { label: 'Overlap roller shutter gap at KM1 warehouse ramp door', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0030.jpg' },
      { label: 'Replace floor carpet tiles at KM3 Gym', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0040.jpg' },
      { label: 'Tarmac surface resurface at KM2 Motorbike parking', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0050.jpg' },
      { label: 'Repair flooring & composite panel at KM1 Switch room', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0060.jpg' },
      { label: 'Building external refurbishment at Intel PG8 MSCP', image: '/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0070.jpg' },
    ],
  },
]
</script>
