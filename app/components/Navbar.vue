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

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            to="/"
            class="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-yellow-400"
          >Home</NuxtLink>

          <!-- About Us dropdown -->
          <div class="relative" @mouseenter="aboutOpen = true" @mouseleave="aboutOpen = false">
            <button
              class="flex items-center gap-1 text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              :class="{ 'text-yellow-400': aboutOpen }"
            >
              About Us
              <ChevronDownIcon class="size-3.5 transition-transform" :class="{ 'rotate-180': aboutOpen }" />
            </button>
            <Transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div v-if="aboutOpen" class="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
                <NuxtLink
                  v-for="item in aboutLinks"
                  :key="item.href"
                  :to="item.href"
                  class="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                  active-class="text-yellow-600 bg-blue-50"
                >{{ item.name }}</NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Company dropdown -->
          <div class="relative" @mouseenter="companyOpen = true" @mouseleave="companyOpen = false">
            <button
              class="flex items-center gap-1 text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              :class="{ 'text-yellow-400': companyOpen }"
            >
              Company
              <ChevronDownIcon class="size-3.5 transition-transform" :class="{ 'rotate-180': companyOpen }" />
            </button>
            <Transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div v-if="companyOpen" class="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
                <NuxtLink
                  v-for="item in companyLinks"
                  :key="item.href"
                  :to="item.href"
                  class="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                  active-class="text-yellow-600 bg-blue-50"
                >{{ item.name }}</NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink
            to="/project-profiles"
            class="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-yellow-400"
          >Project Profiles</NuxtLink>
        </div>

        <DisclosureButton class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10">
          <Bars3Icon v-if="!open" class="size-6" />
          <XMarkIcon v-else class="size-6" />
        </DisclosureButton>
      </div>
    </div>

    <div v-if="open" class="fixed inset-0 z-40" @click="close" />

    <!-- Mobile menu -->
    <DisclosurePanel class="lg:hidden absolute top-16 inset-x-0 border-t border-white/10 bg-blue-950 shadow-xl z-50">
      <div class="px-2 pt-2 pb-3 space-y-0.5">
        <NuxtLink
          to="/"
          @click="close"
          class="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
          active-class="text-yellow-400 bg-white/5"
        >Home</NuxtLink>

        <div class="px-3 pt-2 pb-1 text-[10px] font-bold text-white/30 uppercase tracking-widest">About Us</div>
        <NuxtLink
          v-for="item in aboutLinks"
          :key="item.href"
          :to="item.href"
          @click="close"
          class="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
          active-class="text-yellow-400 bg-white/5"
        >{{ item.name }}</NuxtLink>

        <div class="px-3 pt-2 pb-1 text-[10px] font-bold text-white/30 uppercase tracking-widest">Company</div>
        <NuxtLink
          v-for="item in companyLinks"
          :key="item.href"
          :to="item.href"
          @click="close"
          class="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
          active-class="text-yellow-400 bg-white/5"
        >{{ item.name }}</NuxtLink>

        <NuxtLink
          to="/project-profiles"
          @click="close"
          class="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
          active-class="text-yellow-400 bg-white/5"
        >Project Profiles</NuxtLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const aboutOpen = ref(false)
const companyOpen = ref(false)

const aboutLinks = [
  { name: 'Mission & Vision', href: '/mission-vision' },
  { name: 'Commitment & Goal', href: '/commitment-goal' },
  { name: 'Quality Policy', href: '/quality-policy' },
]

const companyLinks = [
  { name: 'Our Presence', href: '/our-presence' },
  { name: 'Banking Facilities', href: '/banking-facilities' },
  { name: 'Corporate Structure', href: '/corporate-structure' },
]
</script>

<style scoped>
</style>
