<template>
  <div class="">
    <nav class="navbar  boxed navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <router-link to="/" class="link">
          <img src="../../assets/logo.png" alt="" />
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse align-items-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ml-auto bg-white">
          <li class="nav-item">
            <router-link to="#" class="link nav-link">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bibliometricDashboard" class="link nav-link">
              Bibliometric Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resources" class="link nav-link">
              Resources
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/#" class="link nav-link">
              Contact
            </router-link>
          </li>

          <li class="nav-item">
            <img src="" alt="" />
          </li>
        </ul>
      </div>
      <li class="d-none d-md-block">
        <img src="../../assets/aesaLogo.png" alt="" />
      </li>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  height: 93px;
  justify-content: space-between;
  align-items: center;
  .left {
    flex: 1;
  }
  .right {
    flex: 2;
    .rightInner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right-inner {
        width: 80%;
      }
    }
  }
}
</style>
