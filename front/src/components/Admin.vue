<script setup></script>

<template>
  <h2>Liste des peintures de la collection</h2>
  <ul>
    <li></li>
  </ul>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      painters: [],
    };
  },

  mounted() {
    this.getPainters();
  },

  methods: {
    getPainters() {
      fetch("http://localhost:3000/painters")
        .then((response) => response.json())
        .then((data) => {
          this.painters = data;
        });
    },
  },
};
</script>
