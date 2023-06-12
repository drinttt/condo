<template>
    <div class="d-flex justify-space-around">
      <v-menu
        v-model="menuOpen"
        :close-on-click="false"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            v-on="on"
          >
            Activator slot
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="handleItemClick(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
        items: [
          { title: 'Item 1' },
          { title: 'Item 2' },
          { title: 'Item 3' },
        ],
      };
    },
    methods: {
      handleItemClick(item) {
        console.log('Clicked item:', item);
        // Perform desired actions when an item is clicked
      },
    },
  };
  </script>
  