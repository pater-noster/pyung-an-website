<template>
  <div class="page-header">
    <div class="page-header-wrapper">
      <div class="page-header-title">
        <h1>Projects</h1>
        <span
          >평안건설은 풍부한 경험과 노하우를 바탕으로<br />
          전문 건축서비스를 제공합니다.</span
        >
      </div>
    </div>
  </div>

  <!-- <nav class="lnb">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h1 class="visually-hidden">Projects 카테고리</h1>

          <ul class="lnb-list">
            <li
              class="lnb-item"
              @click="
                currentTab = 0;
                currentFilter = '전체';
              "
              :class="{ active: currentTab == 0 }"
            >
              <a>전체</a>
            </li>
            <li
              class="lnb-item"
              @click="
                currentTab = 1;
                currentFilter = '공공시설';
              "
              :class="{ active: currentTab == 1 }"
            >
              <a>공공</a>
            </li>
            <li
              class="lnb-item"
              @click="
                currentTab = 2;
                currentFilter = '교육/연구';
              "
              :class="{ active: currentTab == 2 }"
            >
              <a>교육/연구</a>
            </li>
            <li
              class="lnb-item"
              @click="
                currentTab = 3;
                currentFilter = '리모델링';
              "
              :class="{ active: currentTab == 3 }"
            >
              <a>리모델링</a>
            </li>
            <li
              class="lnb-item"
              @click="
                currentTab = 4;
                currentFilter = '상업시설';
              "
              :class="{ active: currentTab == 4 }"
            >
              <a>상업</a>
            </li>
            <li
              class="lnb-item"
              @click="
                currentTab = 5;
                currentFilter = '업무/공장';
              "
              :class="{ active: currentTab == 5 }"
            >
              <a>업무/공장</a>
            </li>
            <li
              class="lnb-item"
              @click="
                currentTab = 6;
                currentFilter = '주거시설';
              "
              :class="{ active: currentTab == 6 }"
            >
              <a>주거</a>
            </li>
            <li
              class="lnb-item"
              @click="
                currentTab = 7;
                currentFilter = '종교시설';
              "
              :class="{ active: currentTab == 7 }"
            >
              <a>종교</a>
            </li>
            <li
              class="lnb-item"
              @click="
                currentTab = 8;
                currentFilter = '기타';
              "
              :class="{ active: currentTab == 8 }"
            >
              <a>기타</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav> -->

  <nav class="lnb">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h1 class="visually-hidden">Projects 카테고리</h1>

          <ul class="lnb-list">
            <li
              class="lnb-item"
              @click="
                showAll();
                currentTab = 0;
              "
              :class="{ active: currentTab == 0 }"
            >
              <a
                >전체
                <span>{{ project.length }}</span>
              </a>
            </li>
            <li
              class="lnb-item"
              v-for="(category, index) in categories"
              :key="index"
              @click="
                filterPost(category);
                currentTab = index + 1;
              "
              :class="{ active: (currentTab == index + 1) & (currentTab != 0) }"
            >
              <a>{{ category }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="project-section">
          <div class="project-count">
            <span class="project-count-current">{{ filteredPosts.length }}개</span>
            <span class="project-count-total"> / 전체 {{ project.length }}개</span>
          </div>
          <ul class="project-list">
            <li class="project-item" v-for="(item, i) in filteredPosts" :key="i">
              <a @click="$router.push({ name: 'Detail', params: { projectNumber: item.number } })">
                <div class="project-card">
                  <div class="project-card-image">
                    <img :src="item.image[0]" />
                  </div>
                  <h3 class="project-card-title">
                    {{ item.title }}
                  </h3>
                  <span class="project-card-client">{{ item.client }}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- <nav class="lnb">
    <div class="container">
      <div class="row">npm 
        <div class="col-sm-4">
          <h1 class="visually-hidden">Projects 카테고리</h1>

          <ul class="lnb-list">
            <li class="lnb-item" @click="currentTab = 0" :class="{ active: currentTab == 0 }">
              <a @click="filter('전체')">전체</a>
            </li>
            <li class="lnb-item" @click="currentTab = 1" :class="{ active: currentTab == 1 }">
              <a @click="filter('공공시설')">공공</a>
            </li>
            <li class="lnb-item" @click="currentTab = 2" :class="{ active: currentTab == 2 }">
              <a @click="filter('교육/연구')">교육/연구</a>
            </li>
            <li class="lnb-item" @click="currentTab = 3" :class="{ active: currentTab == 3 }">
              <a @click="filter('리모델링')">리모델링</a>
            </li>
            <li class="lnb-item" @click="currentTab = 4" :class="{ active: currentTab == 4 }">
              <a @click="filter('상업시설')">상업</a>
            </li>
            <li class="lnb-item" @click="currentTab = 5" :class="{ active: currentTab == 5 }">
              <a @click="filter('업무/공장')">업무/공장</a>
            </li>
            <li class="lnb-item" @click="currentTab = 6" :class="{ active: currentTab == 6 }">
              <a @click="filter('주거시설')">주거</a>
            </li>
            <li class="lnb-item" @click="currentTab = 7" :class="{ active: currentTab == 7 }">
              <a @click="filter('종교시설')">종교</a>
            </li>
            <li class="lnb-item" @click="currentTab = 8" :class="{ active: currentTab == 8 }">
              <a @click="filter('기타')">기타</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="project-section">
          <ul class="project-list">
            <li class="project-item" v-for="(a, i) in project" :key="i">
              <a @click="$router.push('/detail/' + i)">
                <div class="project-card" v-if="currentFilter === project[i].category || currentFilter === '전체'">
                  <div class="project-card-image">
                    <img :src="project[i].image[0]" />
                  </div>
                  <h3 class="project-card-title">
                    {{ project[i].title }}
                  </h3>
                  <span class="project-card-client">{{ project[i].client }}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      selectedCategory: null,
      categories: ["공공시설", "교육/연구", "리모델링", "상업시설", "업무/공장", "주거시설", "종교시설", "의료시설", "기타"],
    };
  },
  props: {
    project: Array,
  },
  computed: {
    filteredPosts() {
      const data = this.selectedCategory
        ? this.project.filter((item) => item.category === this.selectedCategory)
        : this.project;

      return data;
    },
  },
  methods: {
    filterPost(category) {
      this.selectedCategory = category;
    },
    showAll() {
      this.selectedCategory = null;
    },
  },
};
</script>

<style>
a {
  cursor: pointer;
}
</style>
