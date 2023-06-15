<template>
  <v-app>
    <div>{{ something }}</div>
    <div>{{ this.$store.state.rooms.something }}</div>
    <div><p>Hello {{ hello }}</p></div>
    <div>{{ this.$store.state.rooms.room }}</div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      something: state => state.rooms.something
    }),
    hello(){
      return this.$store.state.rooms.something
    }
  }
}
</script>

<style>

</style>
