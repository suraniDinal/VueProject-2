<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main>
    <div>
      <Header />

      <div class="main-cover">
        <section class="page-title bg-1">
          <div class="container position-relative">
            <div class="row">
              <div class="col-md-12">
                <div class="block text-center">
                  <span class="text-white">About Us</span>
                  <h1 class="text-capitalize mb-4 text-lg">Our Company</h1>
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <router-link to="/" class="nav-link text-white">Home</router-link>
                    </li>
                    <li class="list-inline-item"><span class="text-white">/</span></li>
                    <li class="list-inline-item text-white-50">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section About -->
        
        <!-- /Section About -->
      </div>

      <Footer />
    </div>
  </main>
</template>

<style>

</style>
