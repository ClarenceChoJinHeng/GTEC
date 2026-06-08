<template>
  <!-- Hero -->
  <section class="relative overflow-hidden">
    <!-- Background carousel -->
    <div class="absolute inset-0">
      <div
        v-for="(img, i) in heroImages"
        :key="img"
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
        :class="i === activeSlide ? 'opacity-100' : 'opacity-0'"
        :style="{ backgroundImage: `url('${img}')` }"
      />
    </div>
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/55"></div>
    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-10 pb-20 lg:py-32 grid lg:grid-cols-2 gap-12 flex flex-col">
      <div>
        <div class="flex flex-col  gap-5 mb-6">
          <div class="max-w-[100px]">
            <img src="/assets/images/logo.webp" alt="gtec-logo">
          </div>
          <div>
            <div class="h-0.5 w-10 bg-yellow-400"></div>
            <span class="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase">Quality | Trust |
              Impressives</span>
          </div>
        </div>
        <h1 class="text-5xl lg:text-7xl font-black text-yellow-400 tracking-tight mb-3">GTEC</h1>
        <h2 class="text-lg lg:text-xl font-semibold text-white/80 mb-6 leading-snug">
          Global Tech Engineering &amp; Construction Sdn Bhd
        </h2>
        <p class="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
          A competitive engineering and construction company delivering quality, trust, and impressive results through
          skilled manpower and technical expertise.
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/project-profiles"
            class="bg-yellow-400 text-blue-950 px-6 py-3 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors">
            View Projects
          </NuxtLink>
          <NuxtLink to="/mission-vision"
            class="border border-white/25 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-white/10 transition-colors">
            About Us
          </NuxtLink>
        </div>
      </div>
      <div class="  w-full">
        <div
          class="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 cursor-pointer"
          @pointerdown="dragStart"
          @pointerup="dragEnd"
          @pointerleave="dragCancel"
          @click="openLightbox"
        >
          <!-- Slide track -->
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${certSlide * 100}%)` }"
          >
            <img
              v-for="img in certImages"
              :key="img"
              :src="img"
              draggable="false"
              class="w-full flex-shrink-0 object-contain select-none pointer-events-none"
              alt="GTEC Certificate"
            />
          </div>
          <!-- Arrows -->
          <button
            class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-yellow-400 hover:text-blue-950 text-white rounded-full p-2 transition-all"
            @click.stop="prev"
          >
            <ChevronLeftIcon class="size-4" />
          </button>
          <button
            class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-yellow-400 hover:text-blue-950 text-white rounded-full p-2 transition-all"
            @click.stop="next"
          >
            <ChevronRightIcon class="size-4" />
          </button>
          <!-- Counter -->
          <div class="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {{ certSlide + 1 }} / {{ certImages.length }}
          </div>
        </div>
        <!-- Pill dots -->
        <div class="flex items-center justify-center gap-1.5 mt-4">
          <button
            v-for="(_, i) in certImages"
            :key="i"
            @click="certSlide = i"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="i === certSlide ? 'bg-yellow-400 w-6' : 'bg-white/30 hover:bg-white/50 w-1.5'"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- About -->
  <section class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="h-0.5 w-8 bg-yellow-400"></div>
          <span class="text-blue-900 text-xs font-bold tracking-widest uppercase">Who We Are</span>
        </div>
        <h2 class="text-3xl font-black text-slate-900 mb-6">Driven by Passion &amp; Commitment</h2>
        <p class="text-slate-600 leading-relaxed mb-4">
          Since its founding, GLOBAL TECH ENGINEERING &amp; CONSTRUCTION SDN BHD is formerly known as GLOBAL TECH
          ENGINEERING and has been overseeing this business last 4 years. This enterprise company recently converted to
          Sdn Bhd. GTEC has become competitive in the field of Engineering and construction. This operation, is
          organized and well delivered with passion and commitment. Experience and motivation lead the company into a
          greater prospect to be one of the best services.
        </p>
        <p class="text-slate-600 leading-relaxed mb-4">
          Its initial operation was concentrated mainly with civil works involving renovation and masonry works which
          engage the company to be a specialist in that field. However, in its plight to gain more prestige and to widen
          its scope, the company started to venture into Mechanical and Electrical field like finishing works.
        </p>
        <p class="text-slate-600 leading-relaxed">
          In addition, a workforce of professional officers and staff, and skill full workers combined with technical
          expertise produce distinction in the construction industry. GTEC is company committed to contribute towards
          the attainment of superior quality service through the delivery of highly competent manpower and reliable
          maintenance, engineering &amp; construction services. We are committed in serving all our clients in the most
          satisfactory manner of customer services.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-1">
        <div class="bg-blue-950 text-white rounded-2xl p-6 text-center">
          <div class="text-4xl font-black text-yellow-400 mb-2">4+</div>
          <div class="text-xs font-medium text-white/60 uppercase tracking-wide">Years in Business</div>
        </div>
        <div class="bg-yellow-400 text-blue-950 rounded-2xl p-6 text-center">
          <div class="text-4xl font-black mb-2">6+</div>
          <div class="text-xs font-bold uppercase tracking-wide">Major Clients</div>
        </div>
        <div class="bg-slate-100 rounded-2xl p-6 text-center">
          <div class="text-2xl font-black text-blue-900 mb-2">M&amp;E</div>
          <div class="text-xs font-medium text-slate-500 uppercase tracking-wide">Mechanical &amp; Electrical</div>
        </div>
        <div class="bg-slate-100 rounded-2xl p-6 text-center">
          <div class="text-2xl font-black text-blue-900 mb-2">Civil</div>
          <div class="text-xs font-medium text-slate-500 uppercase tracking-wide">Construction Works</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section nav cards -->
  <section class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="h-0.5 w-8 bg-yellow-400"></div>
          <span class="text-blue-900 text-xs font-bold tracking-widest uppercase">Company Profile</span>
          <div class="h-0.5 w-8 bg-yellow-400"></div>
        </div>
        <h2 class="text-3xl font-black text-slate-900">Explore Our Profile</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <NuxtLink v-for="item in sections" :key="item.title" :to="item.href"
          class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 hover:border-blue-200 transition-all text-center">
          <div
            class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
            <component :is="item.icon" class="size-6 text-blue-800" />
          </div>
          <div class="text-sm font-semibold text-slate-800 group-hover:text-blue-800 transition-colors">{{ item.title }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        @click.self="isLightboxOpen = false"
      >
        <!-- Download -->
        <a
          :href="certPdfs[certSlide]"
          :download="certPdfNames[certSlide]"
          class="absolute top-4 right-16 bg-white/10 hover:bg-yellow-400 hover:text-blue-950 text-white rounded-full p-2 transition-all"
          @click.stop
        >
          <ArrowDownTrayIcon class="size-6" />
        </a>
        <!-- Close -->
        <button
          class="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
          @click="isLightboxOpen = false"
        >
          <XMarkIcon class="size-6" />
        </button>
        <!-- Image -->
        <img
          :src="certImages[certSlide]"
          draggable="false"
          class="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl select-none"
          alt="GTEC Certificate"
        />
        <!-- Prev -->
        <button
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-yellow-400 hover:text-blue-950 text-white rounded-full p-3 transition-all"
          @click.stop="prev"
        >
          <ChevronLeftIcon class="size-6" />
        </button>
        <!-- Next -->
        <button
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-yellow-400 hover:text-blue-950 text-white rounded-full p-3 transition-all"
          @click.stop="next"
        >
          <ChevronRightIcon class="size-6" />
        </button>
        <!-- Counter -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
          {{ certSlide + 1 }} / {{ certImages.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-enter-active, .lightbox-leave-active { transition: opacity 0.25s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
</style>

<script setup lang="ts">

const heroImages = [
  "/assets/images/home-carousel/5.webp", 
  "/assets/images/home-carousel/6.webp", 
  "/assets/images/home-carousel/4.webp", 
  "/assets/images/home-carousel/3.webp", 
  "/assets/images/home-carousel/2.webp", 
  "/assets/images/home-carousel/1.webp",
]
const activeSlide = ref(0)
let slideInterval: ReturnType<typeof setInterval>

const certImages = [
  '/assets/images/110426016012.webp',
  '/assets/images/GLOBAL%20TECH%20ENGINEERING%20%26%20CONSTRUCTION%20SDN.%20BHD.%20cidb-1.webp',
  '/assets/images/GLOBAL%20TECH%20ENGINEERING%20%26%20CONSTRUCTION%20SDN.%20BHD.%20cidb-2.webp',
]
const certPdfs = [
  '/assets/files/110426016012.pdf',
  '/assets/files/GLOBAL%20TECH%20ENGINEERING%20%26%20CONSTRUCTION%20SDN.%20BHD.%20cidb.pdf',
  '/assets/files/GLOBAL%20TECH%20ENGINEERING%20%26%20CONSTRUCTION%20SDN.%20BHD.%20cidb.pdf',
]
const certPdfNames = [
  '110426016012.pdf',
  'GLOBAL TECH ENGINEERING & CONSTRUCTION SDN. BHD. cidb.pdf',
  'GLOBAL TECH ENGINEERING & CONSTRUCTION SDN. BHD. cidb.pdf',
]
const certSlide = ref(0)
let certInterval: ReturnType<typeof setInterval> | undefined

function prev() {
  certSlide.value = (certSlide.value - 1 + certImages.length) % certImages.length
}
function next() {
  certSlide.value = (certSlide.value + 1) % certImages.length
}

let dragStartX = 0
let isDragging = false
function dragStart(e: PointerEvent) {
  dragStartX = e.clientX
  isDragging = true
}
function dragEnd(e: PointerEvent) {
  if (!isDragging) return
  const diff = dragStartX - e.clientX
  if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  isDragging = false
}
function dragCancel() {
  isDragging = false
}

const isLightboxOpen = ref(false)
function openLightbox() {
  if (isDragging) return
  isLightboxOpen.value = true
}
function handleKeydown(e: KeyboardEvent) {
  if (!isLightboxOpen.value) return
  if (e.key === 'Escape') isLightboxOpen.value = false
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  slideInterval = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroImages.length
  }, 5000)
  certInterval = setInterval(() => {
    certSlide.value = (certSlide.value + 1) % certImages.length
  }, 4000)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  clearInterval(slideInterval)
  clearInterval(certInterval)
  window.removeEventListener('keydown', handleKeydown)
})

useSeoMeta({
  title: 'Engineering & Construction Specialists',
  description: 'GTEC Sdn Bhd is a Malaysian engineering and construction company based in Kulim, Kedah. Specialising in civil works, M&E, flooring, and facility maintenance.',
  ogTitle: 'GTEC Sdn Bhd — Engineering & Construction Specialists',
  ogDescription: 'A competitive engineering and construction company delivering quality, trust, and impressive results through skilled manpower and technical expertise.',
  ogImage: 'https://gtec.com.my/favicon.ico',
  ogUrl: 'https://gtec.com.my/',
  twitterTitle: 'GTEC Sdn Bhd — Engineering & Construction Specialists',
  twitterDescription: 'A competitive engineering and construction company based in Kulim, Kedah, Malaysia.',
  twitterImage: 'https://gtec.com.my/favicon.ico',
})

import {
  FlagIcon,
  StarIcon,
  ShieldCheckIcon,
  MapPinIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  FolderOpenIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from '@heroicons/vue/24/outline'

const sections = [
  { title: 'Mission & Vision', href: '/mission-vision', icon: FlagIcon },
  { title: 'Commitment & Goal', href: '/commitment-goal', icon: StarIcon },
  { title: 'Quality Policy', href: '/quality-policy', icon: ShieldCheckIcon },
  { title: 'Our Presence', href: '/our-presence', icon: MapPinIcon },
  { title: 'Banking Facilities', href: '/banking-facilities', icon: BuildingLibraryIcon },
  { title: 'Corporate Structure', href: '/corporate-structure', icon: BuildingOffice2Icon },
  { title: 'Project Profiles', href: '/project-profiles', icon: FolderOpenIcon },
]
</script>
