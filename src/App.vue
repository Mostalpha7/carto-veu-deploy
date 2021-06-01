<template>
  <div id="app" class="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/layouts/index";
export default {
  components: { Layout },
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
