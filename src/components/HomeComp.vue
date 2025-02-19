<template>
  <section
    class="hero"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{
      opacity: 1,
      transition: {
        duration: 3000,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    }"
  >
    <div class="hero-wrapper">
      <div
        class="slogan"
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 3000,
            type: 'keyframes',
            ease: 'easeInOut',
          },
        }"
      >
        <h1>Architecture is life</h1>
        <h3>생명의 터전을 짓는 마음으로</h3>
      </div>

      <div class="scroll-icon">
        <div class="wheel"></div>
      </div>
    </div>
  </section>

  <main class="main-contents">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="main-1">
            <div
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 3000,
                  type: 'keyframes',
                  ease: 'easeInOut',
                },
              }"
            >
              <h2>
                건축이란 우리가 살아갈 터전을<br />
                특성과 목적에 맞게 설계하여<br />
                하나의 생명처럼 탄생시키는 일입니다.
              </h2>
            </div>
          </div>

          <div class="main-2">
            <div class="main-title">
              <div
                v-motion
                :initial="{ opacity: 0, y: -100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <h1>Pyung-An</h1>
              </div>
              <div
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <h2>
                  평안건설은<br />
                  기획부터 설계, 시공, 관리까지<br />
                  믿고 맡길 수 있는 종합건설회사입니다.
                </h2>
              </div>
            </div>

            <div
              class="category-list"
              v-motion
              :initial="{ opacity: 0 }"
              :visible="{
                opacity: 1,

                transition: {
                  duration: 3000,
                  type: 'keyframes',
                  ease: 'easeInOut',
                },
              }"
            >
              <div class="category-item">
                <div class="parent">
                  <img class="image-off" src="../assets/images/sources/house_off.png" aria-hidden />
                  <img
                    class="image-on"
                    src="../assets/images/sources/house_on.png"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :visible="{
                      opacity: 1,
                      transition: {
                        duration: 3000,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                      },
                    }"
                    aria-hidden
                  />
                </div>

                <h3>주택, 근생시설 건축</h3>
                <p>
                  다양한 경험과 기술력을 바탕으로 의뢰인에게<br />
                  최고의 주거공간 제공을 목표로 합니다.
                </p>
              </div>

              <div class="category-item">
                <div class="parent">
                  <img class="image-off" src="../assets/images/sources/office_off.png" aria-hidden />
                  <img
                    class="image-on"
                    src="../assets/images/sources/office_on.png"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :visible="{
                      opacity: 1,
                      transition: {
                        duration: 3000,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                      },
                    }"
                    aria-hidden
                  />
                </div>
                <h3>상가, 오피스, 공장 건축</h3>
                <p>
                  기업의 경쟁력과 성장을 도모하기 위한 공간을 만들기 위해<br />
                  차별화된 설계, 완벽한 시공에 최선을 다합니다.
                </p>
              </div>

              <div class="category-item">
                <div class="parent">
                  <img class="image-off" src="../assets/images/sources/church_off.png" aria-hidden />
                  <img
                    class="image-on"
                    src="../assets/images/sources/church_on.png"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :visible="{
                      opacity: 1,
                      transition: {
                        duration: 3000,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                      },
                    }"
                    aria-hidden
                  />
                </div>
                <h3>기타 시설, 리모델링</h3>
                <p>
                  종교, 교육, 문화, 공공 건축 및 리모델링까지<br />
                  다양한 건축 노하우를 축적하고 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div class="main-3">
            <div class="main-title">
              <div
                v-motion
                :initial="{ opacity: 0, y: -100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <h1>Projects</h1>
              </div>
              <div
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <h2>
                  평안건설은<br />
                  풍부한 경험과 노하우를 바탕으로<br />
                  모든 건축서비스를 제공합니다.
                </h2>
              </div>
            </div>

            <div class="project-card-wrapper">
              <div
                class="project-card"
                v-motion
                :initial="{ opacity: 0, y: -100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <a @click="$router.push({ name: 'Detail', params: { projectNumber: project1.number } })">
                  <div class="project-card-image">
                    <img :src="project1.image[0]" />
                  </div>
                  <h3>{{ project1.title }}</h3>
                  <h6>{{ project1.client }}</h6>
                </a>
              </div>

              <div
                class="project-card"
                v-motion
                :initial="{ opacity: 0, y: -100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <a @click="$router.push({ name: 'Detail', params: { projectNumber: project2.number } })">
                  <div class="project-card-image">
                    <img :src="project2.image[0]" />
                  </div>
                  <h3>{{ project2.title }}</h3>
                  <h6>{{ project2.client }}</h6>
                </a>
              </div>

              <div
                class="project-card"
                v-motion
                :initial="{ opacity: 0, y: -100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 3000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <a @click="$router.push({ name: 'Detail', params: { projectNumber: project3.number } })">
                  <div class="project-card-image">
                    <img :src="project3.image[0]" />
                  </div>
                  <h3>{{ project3.title }}</h3>
                  <h6>{{ project3.client }}</h6>
                </a>
              </div>
            </div>

            <a class="more-button" @click="$router.push('/projects')">
              프로젝트 더 보기
              <button type="button">
                <i class="ic-arrow" aria-hidden></i>
              </button>
            </a>
          </div>

          <div class="main-4">
            <div class="main-title">
              <div
                v-motion
                :initial="{ opacity: 0, y: -100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <h1>Contact</h1>
              </div>
              <div
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2000,
                    type: 'keyframes',
                    ease: 'easeInOut',
                  },
                }"
              >
                <h2>
                  평안건설은<br />
                  열린 마음으로 당신을 기다립니다.
                </h2>
              </div>
            </div>

            <dl class="contact-list">
              <div class="info">
                <dt>주소</dt>
                <dd>경기도 고양시 덕양구 신원로 36, 505호</dd>
              </div>
              <div class="info">
                <dt>Email</dt>
                <dd>pyungangs2020@gmail.com</dd>
              </div>
              <div class="info">
                <dt>대표전화</dt>
                <dd><a href="tel:023816825">02-381-6825</a></dd>
              </div>
            </dl>

            <a class="more-button" @click="$router.push('/contact')">
              오시는 길
              <button type="button">
                <i class="ic-arrow" aria-hidden></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      project1: {},
      project2: {},
      project3: {},
    };
  },
  props: {
    project: Array,
  },
  created() {
    let id1 = 53;
    let id2 = 79;
    let id3 = 80;
    this.project1 = this.project.find((x) => x.number == id1);
    this.project2 = this.project.find((x) => x.number == id2);
    this.project3 = this.project.find((x) => x.number == id3);
    console.log(this.project1);
  },
  // directives: {
  //   motion: motion(),
  // },
};
</script>

<style>
.parent {
  position: relative;
  top: 0;
  left: 0;
}
.image-off {
  position: relative;
  top: 0;
  left: 0;
}
.image-on {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
