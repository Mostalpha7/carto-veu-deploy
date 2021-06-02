<template>
  <div class="">
    <div class="boxed py-md-5 pt-4 pb-2">
      <div class="row boxed justify-content-center ">
        <div class="col-md">
          <div class="row no-gutters justify-content-center align-items-center">
            <div class="col-md-3 mb-4">
              <img src="../../assets/logo.png" alt="" />
            </div>
            <div class="col-md-3">
              <h6 class="mb-3">MENU</h6>

              <Link class="link d-block mx-0 mb-2 " to="/about">
                About
              </Link>
              <Link class="link d-block mx-0 mb-2" to="/bibliometricDashboard">
                Bibliometric Dashboard
              </Link>
              <Link class="link d-block mx-0 mb-2">Resources</Link>
              <Link class="link d-block mx-0 mb-2">Contact</Link>
            </div>
            <div class="col-md-3">
              <h6 class="mb-3">CONTACT</h6>
              <p>
                <span class="d-block">Address:</span>
                <span class="d-block">P.O. Box 10787-00100,</span>
                <span class="d-block">Nairobi, Kenya</span>
                <span class="d-block">
                  Phone: +254 722 205 933, 733 410 102
                </span>
                <span class="d-block">
                  Email: cartaenquiries@aphrc.org
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBottom text-center py-2">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <p class="mb-0">
              Copyright © 2021 Carta. All Rights Reserved.
            </p>
          </div>
          <div class="col-md-3">
            <p>
              Terms of Use
              <span class="ml-3">Privacy Policy</span>
            </p>
          </div>
          <div class="col-md-2 icons">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../styles/global.scss";
h6 {
  color: $yellow;
}

p {
  font-size: 0.91rem;
}

.footerBottom {
  background-color: $grey;
  .icons {
    i {
      margin-right: 0.3rem;
      background-color: $blue;
      padding: 0.5rem;
      color: white;
      border-radius: 50%;
      &fa-facebook {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }
}
</style>
