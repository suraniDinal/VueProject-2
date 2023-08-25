<script setup>

</script>

<template>
    <header>
        <div class="top_bar">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-2 col-md-4">
                        <div class="social_icon text-center text-lg-start text-md-start">
                            <a href="#">
                                <b-icon icon="facebook"></b-icon>
                            </a>
                            <a href="#">
                                <b-icon icon="twitter"></b-icon>
                            </a>
                            <a href="#">
                                <b-icon icon="github"></b-icon>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-8 text-center text-lg-end text-md-end">
                        <div class="header_top_info mb-2 mb-md-0">
                            <a href="tel:+91-97374-28084">
                                Call Us : <span>+91-97374-28084</span>
                            </a>
                            <a href="mailto:dinalsurani31@gmail.com">
                                <b-icon icon="mailbox" class="me-2"></b-icon>
                                <span>dinalsurani31@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom_head">
            <div class="container">
                <div class="navbar navbar-expand-lg px-0 py-4">
                    <a href="/" class="navbar-brand main_logo d-flex">Mega <span>kit.</span> </a>
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarsExample09">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">Home</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <router-link to="#" class="nav-link">About
                                    <b-icon icon="chevron-down"></b-icon>
                                </router-link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link to="/about" class="dropdown-item">Our company</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/pricing" class="dropdown-item">Pricing</router-link>
                                    </li>
                                    <li class="dropdown dropdown-submenu dropright">
                                        <router-link to="#" class="dropdown-item dropdown-toggle d-flex">Sub Menu
                                            <b-icon icon="chevron-right"></b-icon>
                                        </router-link>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="#" class="dropdown-item">Sub Menu 01</router-link>
                                            </li>
                                            <li>
                                                <router-link to="#" class="dropdown-item">Sub Menu 02</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="/services" class="nav-link">Services</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blog" class="nav-link">Blog</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/Contact" class="nav-link">Contact</router-link>
                            </li>
                        </ul>
                        <div class="my-2 my-md-0 ms-lg-4 text-center">
                            <router-link to="/Contact" class="btn btn-solid-border">Get a Quote</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.top_bar {
    background: #222328;
    color: #919194;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.social_icon {
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    padding: 12px 0px;
    margin-left: -8px;
}
.social_icon a {
    color: #919194;
    margin-right: 8px;
    font-size: 16px;
    padding: 0 8px;
}
.header_top_info a {
    margin-left: 35px;
    color: #919194;
    font-size: 16px;
}
.header_top_info a span {
    color: #ffffff;
}
.bottom_head {
    background: #222328;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.main_logo {
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
}
.main_logo span {
    color: #f75757;
}
.bottom_head .btn {
    padding: 0.7rem 1.5rem 0.5rem;
    color: #fff;
    border-radius: 50px;
}
.bottom_head {
    padding-left: 15px;
}
.bottom_head .nav-link {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: .5px;
    transition: all .25s ease;
}
.bottom_head .nav-link:hover, .bottom_head .nav-link:focus, .bottom_head .router-link-exact-active.nav-link {
    color: #f75757;
}

.navbar-toggler {
    padding: 0;
    font-size: 1.5rem;
    color: #fff;
}
.navbar-toggler:focus {
    outline: 0;
}  
.dropdown-menu {
    padding: 0px;
    border: 0;
    border-radius: 0px;
}
.dropdown-menu li:first-child {
    margin-top: 5px
}
.dropdown-menu li:last-child {
    margin-bottom: 5px
}
.dropdown-toggle::after {
    display: none;
}
.dropleft .dropdown-menu,.dropright .dropdown-menu{
    margin: 0;
}
.dropleft .dropdown-toggle::before,.dropright .dropdown-toggle::after {
    font-weight: bold;
    font-family: 'Font Awesome 5 Free';
    border: 0;
    font-size: 10px;
    vertical-align: 1px;
}
.dropleft .dropdown-toggle::before {
    content: "\f053";
    margin-right: 5px;
}
.dropright .dropdown-toggle::after {
    content: "\f054";
    margin-left: 5px;
}
.dropdown-item{
    padding: .8rem 1.5rem .55rem;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
}
.dropdown-submenu.active > .dropdown-toggle,.dropdown-submenu:hover > .dropdown-item,.dropdown-item.active, .dropdown-item:hover{
    background: #f75757;
    color: #fff;
}
ul.dropdown-menu li {
    padding-left: 0px!important;
}
.dropright .dropdown-menu {
    top: 0;
    right: auto;
    left: 100%;
}

@media (min-width:992px) {
    .dropdown-menu {
        transition:all .2s ease-in, visibility 0s linear .2s, transform .2s linear;
        display: block;
        visibility: hidden;
        opacity: 0;
        min-width: 200px;
        margin-top: 15px;
    }
    .dropdown-menu li:first-child {
        margin-top: 10px
    }
    .dropdown-menu li:last-child {
        margin-bottom: 10px
    }
    .dropleft .dropdown-menu,
    .dropright .dropdown-menu {
        margin-top: -10px;
    }
    .dropdown:hover > .dropdown-menu {
        visibility: visible;
        transition: all .45s ease 0s;
        opacity: 1;
    }
}

@media (max-width: 991px) {
    .dropdown-menu {
        text-align: center;
        float: left !important;
        width: 100%;
        margin: 0;
    }
    .dropdown-item {
        padding: .6rem 1.5rem .35rem;
    }
}
</style>