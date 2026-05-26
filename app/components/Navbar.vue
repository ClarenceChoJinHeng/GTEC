<template>
  <Disclosure as="nav" class="bg-blue-950 sticky top-0 z-50 shadow-xl" v-slot="{ open, close }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 shrink-0">
          <span class="text-yellow-400 font-black text-2xl tracking-wider">GTEC</span>
          <span class="hidden sm:block text-white/50 text-[10px] leading-tight border-l border-white/20 pl-3">
            GLOBAL TECH<br>ENGINEERING &amp; CONSTRUCTION
          </span>
        </NuxtLink>

        <div class="hidden lg:flex items-center gap-0.5">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-gray-300 hover:text-yellow-400 px-2.5 py-2 text-xs font-medium transition-colors whitespace-nowrap"
            active-class="text-yellow-400"
          >{{ item.name }}</NuxtLink>
        </div>

        <DisclosureButton class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10">
          <Bars3Icon v-if="!open" class="size-6" />
          <XMarkIcon v-else class="size-6" />
        </DisclosureButton>
      </div>
    </div>

    <div v-if="open" class="fixed inset-0 z-40" @click="close" />

    <DisclosurePanel class="lg:hidden absolute top-16 inset-x-0 border-t border-white/10 bg-blue-950 shadow-xl z-50">
      <div class="px-2 pt-2 pb-3 space-y-0.5">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          @click="close"
          class="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
          active-class="text-yellow-400 bg-white/5"
        >{{ item.name }}</NuxtLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
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
