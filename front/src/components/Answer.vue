<template>
  <div>
    <button :name="name">{{ name }}</button>
  </div>
</template>

<script>
export default {
  name: "Answer",
  props: {
    name: String,
  },
};
</script>

<style scoped>
div {
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
}
button {
  background-color: #e6e6e6;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.correct {
  border: solid 3px green;
}
.incorrect {
  border: solid 3px red;
}
</style>
