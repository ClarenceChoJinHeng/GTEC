<template>
  <!-- Hero -->
  <section class="relative bg-blue-950 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"></div>
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div class="flex items-center gap-3 mb-6">
          <div class="h-0.5 w-10 bg-yellow-400"></div>
          <span class="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase">Quality | Trust | Impressive</span>
        </div>
        <h1 class="text-5xl lg:text-7xl font-black text-yellow-400 tracking-tight mb-3">GTEC</h1>
        <h2 class="text-lg lg:text-xl font-semibold text-white/80 mb-6 leading-snug">
          Global Tech Engineering &amp; Construction Sdn Bhd
        </h2>
        <p class="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
          A competitive engineering and construction company delivering quality, trust, and impressive results through skilled manpower and technical expertise.
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/project-profiles" class="bg-yellow-400 text-blue-950 px-6 py-3 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors">
            View Projects
          </NuxtLink>
          <NuxtLink to="/mission-vision" class="border border-white/25 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-white/10 transition-colors">
            About Us
          </NuxtLink>
        </div>
      </div>
      <div>
        <img
          src="/assets/images/GTEC SDN BHD COMPANY PROFILE_page-0001.jpg"
          alt="GTEC - Global Tech Engineering & Construction"
          class="rounded-2xl shadow-2xl w-full object-cover"
        />
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
          Since its founding, GLOBAL TECH ENGINEERING &amp; CONSTRUCTION SDN BHD is formerly known as GLOBAL TECH ENGINEERING and has been overseeing this business last 4 years. This enterprise company recently converted to Sdn Bhd. GTEC has become competitive in the field of Engineering and construction. This operation, is organized and well delivered with passion and commitment. Experience and motivation lead the company into a greater prospect to be one of the best services.
        </p>
        <p class="text-slate-600 leading-relaxed mb-4">
          Its initial operation was concentrated mainly with civil works involving renovation and masonry works which engage the company to be a specialist in that field. However, in its plight to gain more prestige and to widen its scope, the company started to venture into Mechanical and Electrical field like finishing works.
        </p>
        <p class="text-slate-600 leading-relaxed">
          In addition, a workforce of professional officers and staff, and skill full workers combined with technical expertise produce distinction in the construction industry. GTEC is company committed to contribute towards the attainment of superior quality service through the delivery of highly competent manpower and reliable maintenance, engineering &amp; construction services. We are committed in serving all our clients in the most satisfactory manner of customer services.
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
        <NuxtLink
          v-for="item in sections"
          :key="item.title"
          :to="item.href"
          class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 hover:border-blue-200 transition-all text-center"
        >
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
            <component :is="item.icon" class="size-6 text-blue-800" />
          </div>
          <div class="text-sm font-semibold text-slate-800 group-hover:text-blue-800 transition-colors">{{ item.title }}</div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  FlagIcon,
  StarIcon,
  ShieldCheckIcon,
  MapPinIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  FolderOpenIcon,
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
