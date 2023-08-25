<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CountUp from 'vue-countup-v2'
</script>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },

    data() {
      return {
        settings: {
          arrows: false,
          dots: true,
          edgeFriction: 0.35,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1
        },
      }
    },
  }
</script>

<template>
  <main>
    <Header />
    
    <div class="main-cover">
      <!-- slider -->
      <section class="slider">
        <div class="container">
          <div class="row position-relative">
            <div class="col-lg-9 col-md-10">
              <div class="block">
                <span class="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
                <h1 class="mb-5">Our work is <br>presentation of our <br>capabilities.</h1>
                <router-link to="#" class="btn btn-main d-inline-flex">
                  Get started
                  <b-icon icon="chevron-right" class="ms-2"></b-icon>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /slider -->

      <!-- intro -->
      <section class="section intro">
        <div class="container">
          <div class="row ">
            <div class="col-lg-7">
              <div class="section-title">
                <span class="h6 text-color ">We are creative &amp; expert people</span>
                <h2 class="mt-3 content-title">We work with business &amp; provide solution to client with their business problem
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="intro-item mb-5 mb-lg-0">
                <i class="fa-solid fa-desktop color-one"></i>
                <h4 class="mt-4 mb-3">Modern &amp; Responsive design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="intro-item mb-5 mb-lg-0">
                <i class="fa-solid fa-medal color-one"></i>
                <h4 class="mt-4 mb-3">Awarded licensed company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="intro-item">
                <i class="fa-solid fa-layer-group color-one"></i>
                <h4 class="mt-4 mb-3">Build your website Professionally</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /intro -->

      <!-- About Setcion -->
      <section class="section about position-relative">
        <div class="bg-about"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-6 offset-md-0">
              <div class="about-item ">
                <span class="h6 text-color">What we are</span>
                <h2 class="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
                <div class="about-content">
                  <h4 class="mb-3 position-relative">We are Perfect Solution</h4>
                  <p class="mb-5">We provide consulting services in the area of IFRS and management reporting, helping
                    companies to reach their highest level. We optimize business processes, making them easier.</p>
                  <router-link to="#" class="btn btn-main btn-round-full">Get started</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /About Setcion -->

      <!-- Counter Start -->
      <section class="section counter">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0">
                <h3 class="mb-0">
                  <count-up :end-val="1730" class="counter-stat fw-bold"></count-up>+
                </h3>
                <p class="text-muted">Project Done</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0">
                <h3 class="mb-0">
                  <count-up :end-val="125" class="counter-stat fw-bold"></count-up>M
                </h3>
                <p class="text-muted">User Worldwide</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0">
                <h3 class="mb-0">
                  <count-up :end-val="39" class="counter-stat fw-bold"></count-up>
                </h3>
                <p class="text-muted">Availble Country</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center">
                <h3 class="mb-0">
                  <count-up :end-val="14" class="counter-stat fw-bold"></count-up>
                </h3>
                <p class="text-muted">Award Winner </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /Counter Start -->

      <!-- Section Services -->
      <section class="section service border-top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 text-center">
              <div class="section-title">
                <span class="h6 text-color">Our Services</span>
                <h2 class="mt-3 content-title ">We provide a wide range of creative services </h2>
              </div>
            </div>
          </div>
      
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-5">
                <i class="fa-solid fa-desktop"></i>
                <h4 class="mb-3">Web development.</h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>
      
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-5">
                <i class="fa-solid fa-layer-group"></i>
                <h4 class="mb-3">Interface Design.</h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>
      
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-5">
                <i class="fa-solid fa-chart-simple"></i>
                <h4 class="mb-3">Business Consulting.</h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>
      
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-5 mb-lg-0">
                <i class="fa-solid fa-bezier-curve"></i>
                <h4 class="mb-3">Branding.</h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>
      
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-5 mb-lg-0">
                <i class="fa-brands fa-android"></i>
                <h4 class="mb-3">App development.</h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>
      
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-5 mb-lg-0">
                <i class="fa-solid fa-pen-to-square"></i>
                <h4 class="mb-3">Content creation.</h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /Section Services -->

      <!-- cta -->
      <section class="section cta">
        <div class="container position-relative">
          <div class="row">
            <div class="col-xl-5 col-lg-6">
              <div class="cta-item  bg-white p-5 rounded">
                <span class="h6 text-color">We create for you</span>
                <h2 class="mt-2 mb-4">Entrust Your Project to Our Best Team of Professionals</h2>
                <p class="lead mb-4">Have any project on mind? For immidiate support :</p>
                <h3><i class="fa-solid fa-mobile-screen me-3 text-color"></i>+23 876 65 455</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /cta -->

      <!-- testimonial -->
      <section class="section testimonial">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 ">
              <div class="section-title">
                <span class="h6 text-color">Clients testimonial</span>
                <h2 class="mt-3 content-title">Check what's our clients say about us</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <VueSlickCarousel class="row testimonial-wrap" v-bind="settings">
            <div class="testimonial-item position-relative">
              <i class="fa-solid fa-quote-left text-color"></i>
              <div class="testimonial-item-content">
                <p class="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque
                  consequuntur natus iusto recusandae numquam corrupti facilis blanditiis.</p>
      
                <div class="testimonial-author">
                  <h5 class="mb-0 text-capitalize">Thomas Johnson</h5>
                  <p>Excutive Director,themefisher</p>
                </div>
              </div>
            </div>
            <div class="testimonial-item position-relative">
              <i class="fa-solid fa-quote-left text-color"></i>
              <div class="testimonial-item-content">
                <p class="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis
                  error alias debitis atque consequuntur natus iusto recusandae .</p>
                <div class="testimonial-author">
                  <h5 class="mb-0 text-capitalize">Mickel hussy</h5>
                  <p>Excutive Director,themefisher</p>
                </div>
              </div>
            </div>
            <div class="testimonial-item position-relative">
              <i class="fa-solid fa-quote-left text-color"></i>      
              <div class="testimonial-item-content">
                <p class="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque
                  consequuntur natus iusto recusandae numquam corrupti.</p>      
                <div class="testimonial-author">
                  <h5 class="mb-0 text-capitalize">James Watson</h5>
                  <p>Excutive Director,themefisher</p>
                </div>
              </div>
            </div>
            <div class="testimonial-item position-relative">
              <i class="fa-solid fa-quote-left text-color"></i>
      
              <div class="testimonial-item-content">
                <p class="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis
                  error alias debitis atque consequuntur natus iusto recusandae .</p>
      
                <div class="testimonial-author">
                  <h5 class="mb-0 text-capitalize">Mickel hussy</h5>
                  <p>Excutive Director,themefisher</p>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </section>
      <!-- /testimonial -->

      <!-- blog -->
      <section class="section latest-blog bg-2">
        <div class="container position-relative">
          <div class="row justify-content-center">
            <div class="col-lg-7 text-center">
              <div class="section-title">
                <span class="h6 text-color">Latest News</span>
                <h2 class="mt-3 content-title text-white">Latest articles to enrich knowledge</h2>
              </div>
            </div>
          </div>
      
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 mb-5">
              <div class="card bg-transparent border-0">
                <img loading="lazy" src="../assets/1.jpg" alt="blog" class="img-fluid rounded">
      
                <div class="card-body mt-2">
                  <div class="blog-item-meta">
                    <a href="#" class="text-white-50">Design<span class="ms-2 me-2">/</span></a>
                    <a href="#" class="text-white-50">Ui/Ux<span class="ms-2">/</span></a>
                    <a href="#" class="text-white-50 ms-2"><i class="fa fa-user me-2"></i>admin</a>
                  </div>
      
                  <h3 class="mt-3 mb-5 lh-36"><a href="#" class="text-white ">How to improve design with typography?</a></h3>
      
                  <a href="blog-single.html" class="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                </div>
              </div>
            </div>
      
            <div class="col-lg-4 col-md-6 mb-5">
              <div class="card border-0 bg-transparent">
                <img loading="lazy" src="../assets/2.jpg" alt="blog" class="img-fluid rounded">
      
                <div class="card-body mt-2">
                  <div class="blog-item-meta">
                    <a href="#" class="text-white-50">Design<span class="ms-2 me-2">/</span></a>
                    <a href="#" class="text-white-50">Ui/Ux<span class="ms-2">/</span></a>
                    <a href="#" class="text-white-50 ms-2"><i class="fa fa-user me-2"></i>admin</a>
                  </div>
      
                  <h3 class="mt-3 mb-5 lh-36"><a href="#" class="text-white">Interactivity design may connect consumer</a>
                  </h3>
      
                  <a href="blog-single.html" class="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                </div>
              </div>
            </div>
      
            <div class="col-lg-4 col-md-6 mb-5">
              <div class="card border-0 bg-transparent">
                <img loading="lazy" src="../assets/3.jpg" alt="blog" class="img-fluid rounded">
      
                <div class="card-body mt-2">
                  <div class="blog-item-meta">
                    <a href="#" class="text-white-50">Design<span class="ms-2 me-2">/</span></a>
                    <a href="#" class="text-white-50">Ui/Ux<span class="ms-2">/</span></a>
                    <a href="#" class="text-white-50 ms-2"><i class="fa fa-user me-2"></i>admin</a>
                  </div>
      
                  <h3 class="mt-3 mb-5 lh-36"><a href="#" class="text-white">Marketing Strategy to bring more affect</a></h3>
      
                  <a href="blog-single.html" class="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /blog -->
      <section class="mt-70 position-relative">
        <div class="container">
          <div class="cta-block-2 bg-gray p-5 rounded border-1">
            <div class="row justify-content-center align-items-center ">
              <div class="col-lg-7">
                <span class="text-color">For Every type business</span>
                <h2 class="mt-2 mb-4 mb-lg-0">Entrust Your Project to Our Best Team of Professionals</h2>
              </div>
              <div class="col-lg-4">
                <router-link to="/Contact" class="btn btn-main btn-round-full float-lg-end">Contact Us</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
/* slider */
.slider {
  background: url("../assets/home-1.jpg") no-repeat;
  background-size: cover;
  background-position: 10% 0%;
  padding: 200px 0;
  position: relative;
}
.slider h1{
  font-size: 70px;
  line-height: 80px;
  font-weight: 600;
  color: #fff;

}
.slider p{
  margin-bottom:30px;
  color:#b9b9b9;
  font-size: 18px;
  line-height: 27px;
  font-weight: 300;
}
.slider span{
  letter-spacing: 1px;
}
.slider .btn-main {
  border-radius: 50px;
}
/* /slider */

/* About Setcion */
.bg-about {
  position: absolute;
  content:"";
  left: 0px;
  top: 0px;
  width: 45%;
  min-height: 650px;
  background: url("../assets/home-8.jpg") no-repeat;
  background-size: cover;
}
.about-content {
  padding: 20px 0px 0px 80px;
}
.about-content h4 {
  font-weight: 600;
}
.about-content h4:before {
  position: absolute;
  content:"\f576";
  font-family: "Font Awesome 5 Free";
  font-size: 30px;
  position: absolute;
  top: 8px;
  left: -65px;
  font-weight: 700;
}
/* /About Setcion */

/* Counter Start */
.counter-item .counter-stat {
		font-size: 50px;
}
.counter-item p {
  margin-bottom: 0px;
}
.bg-counter {
	background: url("../assets/counter.jpg")no-repeat;
	background-size: cover;
}
/* /Counter Start */

/* Section Services */
.service-item {
	position: relative;
	padding-left: 80px;
}
.service-item i{
  position: absolute;
  left: 0px;
  top:5px;
  font-size: 50px;
  opacity: .4;
}
/* /Section Services */

/* cta */
.cta{
	background: url("../assets/home-3.jpg") fixed 50% 50%;
	background-size: cover;
	padding: 120px 0px;
}
.cta-block{
	background: url("../assets/home-3.jpg")no-repeat;
	background-size: cover;
}
/* /cta */

/* testimonial */
.testimonial-item {
	padding:50px 30px;
}
.testimonial-item i {
  font-size: 40px;
  position: absolute;
  left: 30px;
  top:30px;
  z-index: 1;
}
.testimonial-item .testimonial-text {
  font-size: 20px;
  line-height: 38px;
  color: #000;
  margin-bottom: 30px;
  font-style: italic;
}
.testimonial-item .testimonial-item-content {
  padding-left: 65px;
}
/* /testimonial */

/* blog */
.blog-item-content h3 {
    line-height: 36px;
}

.blog-item-content h3 a {
  transition: all .4s ease 0s;
}
.blog-item-content h3 a:hover {
  color: #f75757 !important;
}
.lh-36 {
  line-height: 36px;
}
.tags a {
  background: #f5f8f9;
  display: inline-block;
  padding: 8px 23px;
  border-radius: 38px;
  margin-bottom: 10px;
  border: 1px solid #eee;
  font-size: 14px;
  text-transform: capitalize;
}
.pagination .nav-links a,
.pagination .nav-links span.current {
  font-size: 20px;
  font-weight: 500;
  color: #c9c9c9;
  margin: 0 10px;
  text-transform: uppercase;
  letter-spacing: 1.2px;

}
.pagination .nav-links span.current,
.pagination .nav-links a.next,
.pagination .nav-links a.prev {
  color: #000;
}
h3.quote {
  font-size: 24px;
  line-height: 40px;
  font-weight: normal;
  padding: 0px 25px 0px 85px;
  margin: 65px 0 65px 0 !important;
  position: relative;
}
h3.quote::before {
  content: '';
  width: 55px;
  height: 2px;
  background: #f75757;
  position: absolute;
  top: 25px;
  left: 0;
}
.nav-posts-title {
  line-height: 25px;
  font-size: 18px;
}
.latest-blog {
  position: relative;
  padding-bottom: 150px;
}
.mt-70 {
  margin-top: -70px;
}
.border-1 {
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.blog-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05)
}
/* /blog */

@media (max-width: 767px) {
  .slider {
    padding:150px 0;
  }
  h3.quote {
    padding: 0;
    padding-left: 20px;
  }
  h3.quote::before {
    top: 5px;
    width: 2px;
    height: 35px;
  }
}
</style>