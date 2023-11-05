<template>
  <center>
    <div>
      <h1>Get All Hats</h1>
      <h2>จำนวนหมวก {{ subjects.length }}</h2>
      <p>
        <button class="b-button" v-on:click="navigateTo('/subject/create')">create hat</button>
      </p>
      <div v-for="hat in hats" v-bind:key="hat.id">
        <div>รหัสหมวก: {{ hat.hatId }}</div>
        <div>ประเภท/รูปแบบหมวก: {{ hat.hatType }}</div>
        <div>ยี่ห้อหมวก: {{ hat.hatBrand }}</div>
        <div>สี: {{ hat.hatColor }}</div>
        <div>จำนวนที่ต้องการ: {{ hat.amountOfHat }}</div>
        <p>
          <button class="b-button" v-on:click="navigateTo('/hat/' + hat.id)">hat information</button>
          <button class="b-button" @click="navigateTo('/hat/edit/' + hat.id)">edit hat</button>
          <button class="b-button" @click="deleteHat(hat)">delete</button>
        </p>
        <hr>
      </div>
    </div>
  </center>
</template>

<script>
import HatsService from "@/services/HatsService";

export default {
  data() {
    return {
      hats: [],
    };
  },
  async created() {
    try {
      this.hats = (await HatsService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async deleteHat(hat) {
      let result = confirm("Want of delete?")
      if (result) {
        try {
          await HatsService.delete(hat)
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.hats = (await HatsService.index()).data;
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.b-button {
  background-color: #444644;
  color: white;
  padding: 8px 13px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  text-decoration: none;
}
</style>