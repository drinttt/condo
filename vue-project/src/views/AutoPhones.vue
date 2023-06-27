<!-- <template>
    <div>
      <label for="year">Select Year:</label>
      <select id="year" v-model="selectedYear">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
      <p>Selected Year: {{ selectedYear }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedYear: null,
        years: [2021, 2022, 2023, 2024] // ปีที่ต้องการให้แสดงใน Dropdown
      };
    }
  };
  </script>
   -->

   <!-- <template>
    <div>
      <label for="year">Select Year:</label>
      <select id="year" v-model="selectedYear" class="custom-dropdown">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
      <p>Selected Year: {{ selectedYear }}</p>
    </div>
  </template>
  
  <style>
  .custom-dropdown {
    border: 1px solid black; /* กำหนดเส้นขอบสีดำ */
    border-radius: 1px; /* กำหนดรูปทรงของขอบ */
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        selectedYear: null,
        years: [2021, 2022, 2023, 2024] // ปีที่ต้องการให้แสดงใน Dropdown
      };
    }
  };
  </script> -->

  <template>
    <v-select v-model="selectedYear" :items="years" label="Select Year" class="custom-dropdown">
      <template v-slot:selection="{ attrs }">
        <v-chip v-bind="attrs" class="custom-chip">{{ selectedYear }}</v-chip>
      </template>
    </v-select>
  </template>
  
  <style>
  .custom-dropdown {
    width: 150px; /* ปรับขนาดความกว้างตามต้องการ */
  }
  
  /* .custom-chip {
    background-color: #000;
    color: #fff;
    border: 1px solid #000; */
    /* height: 32px; ปรับความสูงตามต้องการ */
    /* line-height: 30px; ปรับความสูงของตัวอักษรตามต้องการ */
    /* padding: 0 10px; ปรับการเว้นระยะห่างของเนื้อหาภายใน chip ตามต้องการ */
    /* border-radius: 4px; ปรับรูปร่างของ chip ตามต้องการ */
  /* } */
  </style>
  
  <script>
  export default {
    data() {
      return {
        selectedYear: null,
        years: [2021, 2022, 2023, 2024] // ปีที่ต้องการให้แสดงใน Dropdown
      };
    },
    computed: {
      filteredYear(year) {
            // const keyword = this.search.toLowerCase();
            // return this.data.filter(item => item.name.toLowerCase() === keyword);
            const index = this.$store.state.rooms.dataUtilityIndex
            const roomData = this.$store.state.rooms.room[index]
            const keyword = roomData.room
            // console.log(roomData.name)
            // return this.data.filter(item => item.room.toLowerCase() === keyword);
            //****
            // return this.$store.state.invoices.invoice.filter(item => item.room == keyword);
            // console.log(this.data.filter(item => item.room.toLowerCase() === keyword))

            // var key = 
            return this.$store.state.expenses.expense.filter(item => item.year == year)
        },
    }
  };
  </script>
  
  