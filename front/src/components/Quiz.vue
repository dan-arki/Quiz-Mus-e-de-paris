<template>
  <div class="painting">
    <img :src="img" alt="hyhy" />
    <!-- <div v-else>c cassé</div> -->
  </div>
</template>

<script>
export default {
  props: {
    img: String,
  },
};
</script>

<style scoped>
.painting {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  margin: 3px;
}
</style>
