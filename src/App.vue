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
    FooterComponent,
  }
}
</script>

