<template>
  <center>
    <div>
      <div>
        <h1>Edit Hat</h1>
        <form v-on:submit.prevent="editHat">
          <p>รหัสหมวก: <input type="text" v-model="hat.hatId" /></p>
          <p>ประเภท/รูปแบบหมวก: <input type="text" v-model="hat.hatType" /></p>
          <p>ยี่ห้อหมวก: <input type="text" v-model="hat.hatBrand" /></p>
          <p>สี: <input type="text" v-model="hat.hatColor" /></p>
          <p>จำนวนที่ต้องการ: <input type="text" v-model="hat.amountOfHat" /></p>
          <p><button class="button" type="submit">edit subject</button></p>

        </form>
      </div>
      <hr />
      <div>
      <p>รหัสหมวก: {{ hat.hatId }}</p>
      <p>ประเภท/รูปแบบหมวก: {{ hat.hatType }}</p>
      <p>ยี่ห้อหมวก: {{ hat.hatBrand }}</p>
      <p>สี: {{ hat.hatColor }}</p>
      <p>จำนวนที่ต้องการ: {{ hat.amountOfHat }}</p>
      </div>
    </div>
  </center>
</template>
<script>

import HatsService from "@/services/HatsService";

export default {
  data() {
    return {
      hat: {
        hatId: "",
        hatType: "",
        hatBrand: "",
        hatColor: "",
        amountOfHat: "",
        
      },
    };
  },
  methods: {
    async editHat() {
      try {
        await HatsService.put(this.hat)
        this.$router.push("/hats");
      } catch (err) {
        console.log(err)
      }
    },
  },
  async created() {
    try {
      let hatId = this.$route.params.hatId;
      this.hat = (await HatsService.show(hatId)).data;
    } catch (err) {
      console.log(err)
    }
  }
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