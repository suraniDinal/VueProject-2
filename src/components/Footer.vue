<script setup>

</script>

<template>
    <footer class="footer section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="widget">
                <h4 class="text-capitalize mb-4">Company</h4>
      
                <ul class="list-unstyled footer-menu lh-35">
                  <li>
                    <router-link to="/about">Terms &amp; Conditions</router-link>
                  </li>
                  <li>
                    <router-link to="/about">Privacy Policy</router-link>
                  </li>
                  <li>
                    <router-link to="#">Support</router-link>
                  </li>
                  <li>
                    <router-link to="#">FAQ</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="widget">
                <h4 class="text-capitalize mb-4">Quick Links</h4>
      
                <ul class="list-unstyled footer-menu lh-35">
                  <li>
                    <router-link to="/about">About</router-link>
                  </li>
                  <li>
                    <router-link to="/services" class="nav-link">Services</router-link>
                  </li>
                  <li>
                    <router-link to="/blog" class="nav-link">Blogs</router-link>
                  </li>
                  <li>
                    <router-link to="/Contact" class="nav-link">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 mx-auto">
              <div class="widget">
                <h4 class="text-capitalize mb-4">Subscribe Us</h4>
                <p>Subscribe to get latest news article and resources </p>
      
                <form action="#" class="sub-form">
                  <input type="text" class="form-control mb-3" placeholder="Subscribe Now ...">
                  <router-link to="#" class="btn btn-main btn-small">subscribe</router-link>
                </form>
              </div>
            </div>
      
            <div class="col-lg-3 col-sm-6">
              <div class="widget">
                <div class="logo mb-4">
                  <h3>Mega<span>kit.</span></h3>
                </div>
                <h6><a href="mailto:support@gmail.com">Support@megakit.com</a></h6>
                <a href="tel:+23-345-67890"><span class="text-color h4">+23-456-6588</span></a>
              </div>
            </div>
          </div>
      
          <div class="footer-btm pt-4">
            <div class="row">
              <div class="col-lg-6">
                <div class="copyright">
                  Copyright © 2020, Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a>
                </div>
              </div>
              <div class="col-lg-6 text-start text-lg-end">
                <ul class="list-inline footer-socials">
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com/themefisher"><i class="fab fa-facebook-f me-2"></i>Facebook</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://twitter.com/themefisher"><i class="fab fa-twitter me-2"></i>Twitter</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.pinterest.com/themefisher/"><i class="fab fa-pinterest-p me-2 "></i>Pinterest</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding-bottom: 10px;
}
.footer .copyright a {
    font-weight: 600;
}
.lh-35 {
    line-height: 35px;
}
.logo {
    color: #242424;
    font-weight: 600;
    letter-spacing: 1px;
}
.logo span {
    color: #f75757;
}
.sub-form {
    position: relative;
}
.sub-form .form-control {
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #f5f8f9;
}
.sub-form .form-control:focus {
  box-shadow: none;
  border: 1px solid #f75757;
}
.footer-btm {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.footer-socials li a {
    margin-left: 15px;
}
</style>