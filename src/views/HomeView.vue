<template>
  <div>
      <header-component/>
      <hero-component/>

        <main>
          <about-component/>
          <counts-component/>
          <details-component/>
          <team-component/>
          <testimonials-component/>
          <pricing-component/>
          <faq-component/>
        </main>

      <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import HeroComponent from '@/components/Hero.vue'
import AboutComponent from '@/components/About.vue'
import CountsComponent from '@/components/Counts.vue'
import DetailsComponent from '@/components/Details.vue'
import TestimonialsComponent from '@/components/Testimonials.vue'
import TeamComponent from '@/components/Team.vue'
import PricingComponent from '@/components/Pricing.vue'
import FaqComponent from '@/components/Faq.vue'
import FooterComponent from '@/components/Footer.vue'
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    FooterComponent,
    FaqComponent,
    PricingComponent,
    TeamComponent,
    TestimonialsComponent,
    DetailsComponent,
    CountsComponent,
    AboutComponent,
    HeroComponent,
    HeaderComponent
  }
}
</script>
