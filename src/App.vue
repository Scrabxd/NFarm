<template>
    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1>
          <router-link to="/">NFarm</router-link>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto menu-item active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto menu-item" href="#about">About</a></li>
          <li><a class="nav-link scrollto menu-item" href="#team">Team</a></li>
          <li><a class="nav-link scrollto menu-item" href="#pricing">Pricing</a></li>
          <router-link to="/upload-my-cattle">Upload my cattle</router-link>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
  <router-view/>
</template>
