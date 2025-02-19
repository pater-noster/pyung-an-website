<template>
  <div class="page-header">
    <div class="page-header-wrapper">
      <div class="page-header-title">
        <h1>{{ currentProject.title }}</h1>
        <span>{{ currentProject.client }}</span>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="project-detail">
          <dl class="project-detail-list">
            <div class="project-detail-item">
              <dt>준공일</dt>
              <dd>{{ currentProject.date }}</dd>
            </div>
            <div class="project-detail-item">
              <dt>위치</dt>
              <dd>{{ currentProject.location }}</dd>
            </div>
            <div class="project-detail-item">
              <dt>용도</dt>
              <dd>{{ currentProject.category }}</dd>
            </div>
            <div class="project-detail-item">
              <dt>고객사</dt>
              <dd>{{ currentProject.client }}</dd>
            </div>
            <div class="project-detail-item">
              <dt>규모</dt>
              <dd>{{ currentProject.floors }}</dd>
            </div>
            <div class="project-detail-item">
              <dt>연면적</dt>
              <dd>{{ currentProject.size }}&#13217;</dd>
            </div>
          </dl>

          <div class="project-detail-photo">
            <img :src="currentProject.image[i]" v-for="(a, i) in currentProject.image" :key="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {
      currentProject: {},
    };
  },
  mounted() {
    let id = this.$route.params.projectNumber;
    this.currentProject = this.project.find((x) => x.number == id);
  },
};
</script>

<style></style>
