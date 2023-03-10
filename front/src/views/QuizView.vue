<script setup>
import Quiz from "@/components/Quiz.vue";
import Answer from "@/components/Answer.vue";
// import { def } from "@vue/shared";
</script>

<template>
  <span class="quiz">Quiz ({{ currentQuestion }}/{{ maxQuestions }})</span>
  <h2>Qui a peint cette oeuvre ?</h2>

  <Quiz v-if="painting[0]" :img="this.randomPaint.vignetteUrl"></Quiz>
  <!-- <div >On load le quiz</div> -->

  <div class="parentButtons" v-if="painters.length > 0">
    <Answer
      @click="handleClick(painter, $event)"
      v-for="(painter, index) in painters"
      :key="index"
      :name="painter.name"
      :class="{ correct: isCorrect }"
    />
  </div>
  <span class="italic">choissisez une réponse</span>
  <div class="nextDiv">
    <div class="correct" v-if="good">Bonne réponse</div>
    <div v-else>Mauvaise réponse</div>
    <button class="arrow" @click="nextQuestion">
      <!-- <img src="assets/arrowButton.svg" alt="" /> -->
      Suivant
    </button>
  </div>
</template>

<script>
export default {
  name: "QuizView",

  data() {
    return {
      painters: [],
      painting: [],
      randomPaint: null,
      currentQuestion: 1,
      maxQuestions: 10,
      showNextButton: false,
      isCorrect: null,
      good: false,
    };
  },

  mounted() {
    this.getPainters();
    this.getPainting();
  },

  methods: {
    getPainters() {
      fetch("http://localhost:3000/artists")
        .then((response) => response.json())
        .then((data) => {
          this.painters = data;
          //   console.log(this.painters);
        });
    },

    //recuperer painting
    getPainting() {
      fetch("http://localhost:3000/paintings")
        .then((response) => response.json())
        .then((data) => {
          this.painting = data;
          const random = Math.floor(Math.random() * this.painting.length);
          this.randomPaint = this.painting[random];
          //   console.log(this.painting);
        });
    },

    handleClick(artist, event) {
      console.log(artist);
      const foreignKeys = this.randomPaint.fk_id;
      console.log(foreignKeys);

      const artistId = artist.id;
      console.log(artistId);

      const isCorrect = artistId === foreignKeys;
      console.log(isCorrect);

      if (isCorrect) {
        this.good = true;
        event.target.classList.add("correct");

        // event.target.classList.add("incorrect");
        console.log("Bonne réponse");
      } else {
        event.target.classList.add("incorrect");
        console.log("Mauvaise réponse");
      }

      this.showNextButton = true;
    },
    nextQuestion() {
      this.good = false;

      if (this.currentQuestion < this.maxQuestions) {
        this.currentQuestion += 1;
        this.showNextButton = false;
        this.getPainting();
      } else {
        alert("Quiz terminé!");
      }
    },
  },
};
</script>

<style scoped>
.quiz {
  text-align: center;
  display: block;
  text-decoration: underline;
}
h2 {
  text-align: center;
  padding: 2px;
  font-weight: bold;
}
.italic {
  font-style: italic;
  text-align: center;
  padding: 3px;
  display: block;
}

.correct {
  color: green;
}

.arrow {
  background-color: #4b68d7;
  border: none;
  color: #e6e6e6;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.parentButtons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.nextDiv {
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
