<template>
  <div>
    <h1>This is FetchingData</h1>
    {{$store.state.aboutMe}}
    <!-- <div v-for= "project" in $store.state.projects :key = "project.name"> -->
      <h1>{{project.name}}</h1>
    </div>
</template>
<script>
export default {
  methods: {
    projectData () {
      return this.$store.state.Projects
    }
  },
  computed: {
    getAboutMe () {
      // this.$store.state
      // this.$store.commit() --> for mutations
      return this.$store.dispatch('getAboutMe')
    }
  },
  mounted () {
    this.getAboutMe
  }
}
</script>
<style>

</style>
