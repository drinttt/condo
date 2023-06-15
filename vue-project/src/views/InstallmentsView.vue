<template>
  <v-app>
    <div>{{ something }}</div>
    <div>{{ $store.state.count }}</div>
    <div></div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'

export default {
  computed: {
    ...mapState({
      something: state => state.roomsObj.something
    })
  }
}
</script>

<style>

</style>
