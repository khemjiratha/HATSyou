<template>
  <center>
    <div>
      <h1>Get Hat By Id</h1>
      <p>รหัสหมวก: {{ hat.hatId }}</p>
      <p>ประเภท/รูปแบบหมวก: {{ hat.hatType }}</p>
      <p>ยี่ห้อหมวก: {{ hat.hatBrand }}</p>
      <p>สี: {{ hat.hatColor }}</p>
      <p>จำนวนที่ต้องการ: {{ hat.amountOfHat }}</p>
      
      <button class="button" @click="navigateTo('/subjects')">back</button>
    </div>
  </center>
</template>

<script>
import HatsService from "@/services/HatsService";

export default {
  data() {
    return {
      hat: "",
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let hatId = this.$route.params.hatId;
      this.hat = (await HatsService.show(hatId)).data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
.button {
  background-color: rgb(65, 63, 63);
  color: #ffffff;
  border: 2px solid rgb(65, 63, 63);
  padding: 8px 13px;
  border-radius: 40px;
}

.button:hover {
  background-color: #ffffff;
  color: rgb(65, 63, 63);
}
</style>