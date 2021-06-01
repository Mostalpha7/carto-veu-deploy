<template>
  <div>
    <Banner />
    <About />
    <Research />
    <TeamAndFounders />
  </div>
</template>

<script>
import Banner from "./Banner";
import About from "./About";
import Research from "./Research";
import TeamAndFounders from "./TeamAndFounders";
export default {
  name: "Home",
  components: { Banner, About, Research, TeamAndFounders },
};
</script>
