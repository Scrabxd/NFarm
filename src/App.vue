<template>
  <header-component/>
  <hero-component/>

    <main>
      <about-component/>
      <features-component/>
      <counts-component/>
      <details-component/>
      <gallery-component/>
      <team-component/>
      <testimonials-component/>
      <pricing-component/>
      <faq-component/>
      <contact-component/>
    </main>

  <footer-component/>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import HeroComponent from './components/Hero.vue'
import AboutComponent from './components/About.vue'
import FeaturesComponent from './components/Features.vue'
import CountsComponent from './components/Counts.vue'
import DetailsComponent from './components/Details.vue'
import GalleryComponent from './components/Gallery.vue'
import TestimonialsComponent from './components/Testimonials.vue'
import TeamComponent from './components/Team.vue'
import PricingComponent from './components/Pricing.vue'
import FaqComponent from './components/Faq.vue'
import ContactComponent from './components/Contact.vue'
import FooterComponent from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    HeaderComponent, 
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    CountsComponent,
    DetailsComponent,
    GalleryComponent,
    TestimonialsComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  
  }
}
</script>

