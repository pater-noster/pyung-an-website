<template>
  <li class="project-item">
    <a @click="$router.push('Detail' + project[$route.params.id])">
      <div class="project-card">
        <div class="project-card-image">
          <img :src="project.image[0]" />
        </div>
        <h3 class="project-card-title">
          {{ project.title }}
        </h3>
        <span class="project-card-client">{{ project.client }}</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style></style>
