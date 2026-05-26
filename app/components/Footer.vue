<template>
  <footer class="bg-blue-950 text-white">
    <div class="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div class="text-yellow-400 font-black text-2xl tracking-wider mb-1">GTEC</div>
          <div class="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-4">Global Tech Engineering &amp; Construction Sdn Bhd</div>
          <p class="text-white/60 text-sm leading-relaxed">
            Committed to delivering superior quality services through highly competent manpower and reliable engineering &amp; construction solutions.
          </p>
          <div class="mt-5 flex items-center gap-2">
            <div class="h-0.5 w-6 bg-yellow-400"></div>
            <span class="text-yellow-400 text-[10px] font-bold tracking-[0.15em] uppercase">Quality | Trust | Impressive</span>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-bold text-white uppercase tracking-widest mb-5">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in links" :key="item.name">
              <NuxtLink :to="item.href" class="text-white/55 hover:text-yellow-400 text-sm transition-colors">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact Us</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex gap-2">
              <span class="text-yellow-400 shrink-0 font-semibold">Office</span>
              <span class="text-white/60">04 756 0015</span>
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-400 shrink-0 font-semibold">Mr Aaron (MD)</span>
              <span class="text-white/60">+60 108068681</span>
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-400 shrink-0 font-semibold">Ms Christina</span>
              <span class="text-white/60">+60 168504417</span>
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-400 shrink-0 font-semibold">Email</span>
              <span class="text-white/60 break-all">globaltechengineering.ak@gmail.com</span>
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-400 shrink-0 font-semibold">Address</span>
              <span class="text-white/60">No 931 (Tingkat Bawah) Jalan Lembah Impiana 5, Taman Lembah Impiana III, 09000 Kulim, Kedah.</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-white/10 text-center text-white/30 text-xs">
        &copy; {{ new Date().getFullYear() }} Global Tech Engineering &amp; Construction Sdn Bhd. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { name: 'Mission & Vision', href: '/mission-vision' },
  { name: 'Commitment & Goal', href: '/commitment-goal' },
  { name: 'Quality Policy', href: '/quality-policy' },
  { name: 'Our Presence', href: '/our-presence' },
  { name: 'Banking Facilities', href: '/banking-facilities' },
  { name: 'Corporate Structure', href: '/corporate-structure' },
  { name: 'Project Profiles', href: '/project-profiles' },
]
</script>

<style scoped>
</style>
