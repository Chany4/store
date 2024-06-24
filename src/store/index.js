import { createStore } from 'vuex'

export default createStore({
  // variables
  state: {
    // data -> propertyName,   null -> value
    aboutMe: null,
    education: null,
    skills: null,
    workExp: null,
    projects: null,
    testimonials: null

  },
  mutations: {
    /* use this to change/update the state
     committing a mutation
     updateData () { }
     updateData(state,payload){state.data = payload}
     */

    setAboutMe (state, payload) {
      state.aboutMe = payload
    },
    setEducation (state, payload) {
      state.Projects = payload
    },
    setSkills (state, payload) {
      state.skills = payload
    },
    setTestimonials (state, payload) {
      state.testimonials = payload
    },
    setWorkExp (state, payload) {
      state.workExp = payload
    }
  },
  actions: {
    // run all async code
    // dispatching
    // fetchData (hehe) { }
    // hehe counts as the state or rather the whole store

    async getAboutMe ({ commit }) {
      const fetchInfo = await fetch('https://chany4.github.io/vue.jsProject/data/data.json')
      // const { AboutMe } = await fetchInfo.json()
      const data = await fetchInfo.json()
      //dependent on the json file
      console.log(data)
      let {AboutMe, education, skills, workExp, testimonials} = data
      commit('setAboutMe', AboutMe)
      commit('setEducation', education)
      commit('setSkills', skills)
      commit('setTestimonials', testimonials)
      commit('setWorkExp', workExp)
      // .commit(mutation called,?)
    }
  },
  modules: {
  },
  getters: {
    // filtersDat () {
    //   return.Array.filter()
    // }
  }
})

// this is almost like local storage but not local storage
// deligation
