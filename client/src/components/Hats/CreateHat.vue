<template>
  <center>
    <div>
      <h1>Create Hat</h1>
      <form v-on:submit.prevent="createHat">
        <p>รหัสหมวก: <input type="text" v-model="hat.hatId" /></p>
          <p>ประเภท/รูปแบบหมวก: <input type="text" v-model="hat.hatType" /></p>
          <p>ยี่ห้อหมวก: <input type="text" v-model="hat.hatBrand" /></p>
          <p>สี: <input type="text" v-model="hat.hatColor" /></p>
          <p>จำนวนที่ต้องการ: <input type="text" v-model="hat.amountOfHat" /></p>
        <p><button class="button" type="submit">create</button></p>
      </form>
    </div>
  </center>
</template>

<script>
import HatsService from "@/services/HatsService";

export default {
  data() {
    return {
      Hat: {
        hatId: "",
        hatType: "",
        hatBrand: "",
        hatColor: "",
        amountOfHat: "",
      },
    };
  },
  methods: {
    async createHat() {
      try {
        await HatsService.post(this.hat)
        this.$router.push("/hats");
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>

<style>
body {
  background-color: #f0f0f0;

  input[type = text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }

  input[type=text]:focus {
    border: 3px solid #555;
  }
}

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
