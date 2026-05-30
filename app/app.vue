<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Global Tech Engineering & Construction Sdn Bhd',
      alternateName: 'GTEC Sdn Bhd',
      url: 'https://gtec.com.my',
      telephone: '+60475600015',
      email: 'globaltechengineering.ak@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No 931 (Tingkat Bawah) Jalan Lembah Impiana 5, Taman Lembah Impiana III',
        addressLocality: 'Kulim',
        addressRegion: 'Kedah',
        postalCode: '09000',
        addressCountry: 'MY',
      },
      description: 'GTEC Sdn Bhd is a Malaysian engineering and construction company specialising in civil works, mechanical & electrical, flooring, and facility maintenance.',
      areaServed: 'Malaysia',
      sameAs: [],
    }),
  }],
})
</script>
