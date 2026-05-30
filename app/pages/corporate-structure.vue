<template>
  <section class="bg-blue-950 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-3">
        <div class="h-0.5 w-8 bg-yellow-400"></div>
        <span class="text-yellow-400 text-xs font-bold tracking-widest uppercase">GTEC SDN BHD</span>
      </div>
      <h1 class="text-4xl lg:text-5xl font-black text-white">Corporate Structure</h1>
    </div>
  </section>

  <section class="bg-white py-20">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">

      <!-- Org chart -->
      <div class="flex flex-col items-center">

        <!-- Managing Directors -->
        <div class="bg-blue-950 text-white rounded-2xl px-8 py-4 font-black text-sm uppercase tracking-wide text-center w-60">
          Managing Directors
        </div>
        <div class="w-px h-8 bg-slate-300"></div>

        <!-- Main row: GM + HR side -->
        <div class="flex items-start gap-6 w-full justify-center">

          <!-- GM branch -->
          <div class="flex flex-col items-center gap-0 min-w-0 flex-1 max-w-lg">
            <div class="bg-blue-700 text-white rounded-2xl px-6 py-3 font-bold text-sm text-center w-full">
              General Manager
            </div>
            <div class="w-px h-8 bg-slate-300"></div>

            <!-- 3 department columns -->
            <div class="grid grid-cols-3 gap-3 w-full">

              <!-- Safety -->
              <div class="flex flex-col items-center gap-1">
                <div class="w-px h-4 bg-slate-300"></div>
                <div class="bg-cyan-700 text-white rounded-xl px-3 py-2 text-center text-xs font-bold w-full">
                  Safety Dept
                </div>
                <div class="w-px h-4 bg-slate-300"></div>
                <div class="bg-slate-100 text-slate-700 rounded-xl px-2 py-2 text-center text-xs font-medium w-full">
                  Safety Supervisor
                </div>
              </div>

              <!-- Project Manager -->
              <div class="flex flex-col items-center gap-1">
                <div class="w-px h-4 bg-slate-300"></div>
                <div class="bg-cyan-700 text-white rounded-xl px-3 py-2 text-center text-xs font-bold w-full">
                  Project Manager
                </div>
                <div class="w-px h-4 bg-slate-300"></div>
                <div class="space-y-1 w-full">
                  <div v-for="role in pmRoles" :key="role" class="bg-slate-100 text-slate-700 rounded-xl px-2 py-1.5 text-center text-xs font-medium">
                    {{ role }}
                  </div>
                </div>
              </div>

              <!-- Project Control -->
              <div class="flex flex-col items-center gap-1">
                <div class="w-px h-4 bg-slate-300"></div>
                <div class="bg-cyan-700 text-white rounded-xl px-3 py-2 text-center text-xs font-bold w-full">
                  Project Control
                </div>
                <div class="w-px h-4 bg-slate-300"></div>
                <div class="bg-slate-100 text-slate-700 rounded-xl px-2 py-2 text-center text-xs font-medium w-full">
                  Admin
                </div>
              </div>

            </div>
          </div>

          <!-- Connector -->
          <div class="h-px w-8 bg-slate-300 mt-[68px] shrink-0"></div>

          <!-- HR + Purchasing -->
          <div class="flex flex-col gap-3 mt-[52px] min-w-[110px]">
            <div class="bg-slate-700 text-white rounded-xl px-4 py-3 text-center font-bold text-xs">
              Human Resource
            </div>
            <div class="bg-slate-700 text-white rounded-xl px-4 py-3 text-center font-bold text-xs">
              Purchasing
            </div>
          </div>

        </div>
      </div>

      <!-- Team grid -->
      <div class="mt-20">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-0.5 w-8 bg-yellow-400"></div>
          <h2 class="text-2xl font-black text-slate-900">Our Team</h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="team in teams"
            :key="team.role"
            class="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-center hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <div class="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" :class="team.color">
              <UserGroupIcon class="size-5 text-white" />
            </div>
            <div class="font-bold text-slate-800 text-sm">{{ team.role }}</div>
            <div class="text-xs text-slate-400 mt-1">{{ team.dept }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Corporate Structure',
  description: "Explore GTEC's corporate structure — from Managing Directors and General Manager through to Project Engineers, Safety Department, and field operations teams.",
  ogTitle: 'Corporate Structure | GTEC Sdn Bhd',
  ogDescription: "A look at GTEC's organisational hierarchy across management, operations, safety, and field teams.",
  ogImage: 'https://gtec.com.my/assets/images/GTEC%20SDN%20BHD%20COMPANY%20PROFILE_page-0001.jpg',
  ogUrl: 'https://gtec.com.my/corporate-structure',
})

import { UserGroupIcon } from '@heroicons/vue/24/outline'

const pmRoles = ['Project Engineers', 'Site Supervisor', 'Skill Workers', 'General Workers']

const teams = [
  { role: 'General Manager', dept: 'Operations', color: 'bg-blue-800' },
  { role: 'Human Resource', dept: 'HR & Admin', color: 'bg-slate-600' },
  { role: 'Purchasing', dept: 'Procurement', color: 'bg-slate-500' },
  { role: 'Project Manager', dept: 'Projects', color: 'bg-cyan-700' },
  { role: 'Project Control', dept: 'Control', color: 'bg-teal-700' },
  { role: 'Safety Department', dept: 'HSSE', color: 'bg-green-700' },
  { role: 'Project Engineers', dept: 'Technical', color: 'bg-blue-600' },
  { role: 'Site Supervisor', dept: 'Field Operations', color: 'bg-indigo-600' },
  { role: 'Safety Supervisor', dept: 'Safety', color: 'bg-emerald-600' },
  { role: 'Admin', dept: 'Administration', color: 'bg-slate-500' },
  { role: 'Skill Workers', dept: 'Field Operations', color: 'bg-amber-600' },
  { role: 'General Workers', dept: 'Field Operations', color: 'bg-orange-600' },
]
</script>
