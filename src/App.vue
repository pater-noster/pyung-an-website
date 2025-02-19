<template>
  <header class="global-header">
    <div class="gnb" :class="{ onScroll: scrollPosition > 1 }">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="gnb-wrapper">
              <div class="gnb-left">
                <h1 class="logo">
                  <a @click="$router.push('/')">
                    <img alt="평안건설" />
                  </a>
                </h1>
              </div>

              <div class="gnb-right">
                <nav class="gnb-nav sm-hidden">
                  <h2 class="visually-hidden">메뉴</h2>
                  <ul class="gnb-nav-list">
                    <li class="gnb-nav-item" :class="{ active: $route.path == '/' }">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="gnb-nav-item" :class="{ active: $route.path == '/projects' || $route.name == 'Detail' }">
                      <router-link to="/projects">Projects</router-link>
                    </li>
                    <li class="gnb-nav-item" :class="{ active: $route.path == '/about' }">
                      <router-link to="/about">About us</router-link>
                    </li>
                    <li class="gnb-nav-item" :class="{ active: $route.path == '/contact' }">
                      <router-link to="/contact">Contact</router-link>
                    </li>
                  </ul>
                </nav>

                <button
                  class="gnb-menu-button is-menu sm-only"
                  type="button"
                  aria-label="메뉴 열기 버튼"
                  @click="sidebarOpen = true"
                >
                  <i class="ic-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <router-view :project="project"></router-view>

  <footer class="global-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h1 class="logo">
            <img src="./assets/images/sources/logo.svg" alt="평안건설" />
          </h1>

          <h3 class="global-footer-title">대표전화<i class="ic-chevron" aria-hidden></i></h3>
          <a class="global-footer-phone" href="tel:023816825">02-381-6825</a>

          <dl class="global-footer-detail-list">
            <div class="global-footer-detail-item">
              <dt>주소</dt>
              <dd>
                <address>경기도 고양시 덕양구 신원로 36, 505호</address>
              </dd>
            </div>
            <div class="global-footer-detail-item">
              <dt>Email</dt>
              <dd>
                <address>pyungangs2020@gmail.com</address>
              </dd>
            </div>
            <div class="global-footer-detail-item">
              <dt>Fax</dt>
              <dd>02-381-6828</dd>
            </div>
            <div class="global-footer-detail-item">
              <dt>Tel</dt>
              <dd>02-381-6825</dd>
            </div>
          </dl>

          <p class="global-footer-copyright">
            COPYRIGHT &#169; <strong>PYUNG-AN E&amp;C</strong> Co.,Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>

  <!-- <div class="popup" v-if="isPopupOpened == true">
    <div class="popup-content">
      <h2>제목</h2>
      <p>
        내용
      </p>

      <div class="popup-content-from">
        <h5>2023. 0. 0.</h5>
        <h4>평안건설 주식회사</h4>
        <address>(281111-0080959)<br />경기도 고양시 덕양구 신원로 36, 505호(신원동, 명승세도나3)</address>
        <span>대표이사 김 신 혜</span>
      </div>

      <div class="close-button-top" @click="isPopupOpened = false">
        <button type="button">
          <i class="ic-close" aria-hidden></i>
        </button>
      </div>

      <div class="close-button-bottom" @click="isPopupOpened = false">
        닫기
        <button type="button"></button>
      </div>
    </div>
  </div> -->

  <aside class="sidebar sm-only" :class="{ active: sidebarOpen == true }">
    <nav class="sidebar-nav">
      <h2 class="visually-hidden">메뉴</h2>

      <div class="drawer-menu" :class="{ active: $route.path == '/' }">
        <button class="drawer-menu-button" type="button">
          <a
            @click="
              $router.push('/');
              sidebarOpen = false;
            "
            >Home</a
          >
        </button>
      </div>

      <div class="drawer-menu" :class="{ active: $route.path == '/projects' || $route.name == 'Detail' }">
        <button class="drawer-menu-button" type="button">
          <a
            @click="
              $router.push('/projects');
              sidebarOpen = false;
            "
            >Projects</a
          >
        </button>
      </div>

      <div class="drawer-menu" :class="{ active: $route.path == '/about' }">
        <button class="drawer-menu-button" type="button">
          <a
            @click="
              $router.push('/about');
              sidebarOpen = false;
            "
            >About us</a
          >
        </button>
      </div>

      <div class="drawer-menu" :class="{ active: $route.path == '/contact' }">
        <button class="drawer-menu-button" type="button">
          <a
            @click="
              $router.push('/contact');
              sidebarOpen = false;
            "
            >Contact</a
          >
        </button>
      </div>
    </nav>
  </aside>

  <div class="overlay" aria-hidden :class="{ active: sidebarOpen == true }" @click="sidebarOpen = false"></div>
  <!-- <div
    class="overlay"
    aria-hidden
    :class="{ active: sidebarOpen == true || isPopupOpened == true }"
    @click="(sidebarOpen = false), (isPopupOpened = false)"
  ></div> -->
</template>

<script>
import project from "./assets/project-data.js";

export default {
  name: "App",
  data() {
    return {
      sidebarOpen: false,
      scrollPosition: null,
      project: project,
      isPopupOpened: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  components: {},
};
</script>

<style>
@import "./style.css";
</style>
