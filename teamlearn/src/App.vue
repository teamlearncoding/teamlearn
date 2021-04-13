<template>
  <MainPage />
</template>


<script>

const NotFound = { template: '<h1>Page not found</h1>'}
const Home = { template: <MainPage />}
const About = { template: <About />}
const Contact = { template: <Contact />}
const Coding = { template: <Coding />}


const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/coding': Coding,
};


import MainPage from './components/MainPage';

export default {
  name: 'App',

  data: {
    currentRoute: window.location.pathname
  },

  computed: {
    ViewComponent(){
      return routes[this.currentRoute] || NotFound
    }
  },

  render (h) { return h(this.ViewComponent)},

  components: {
    MainPage,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
