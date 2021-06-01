<template>
  <div class="">
    <div class="topFooter boxed d-none d-md-block">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="row justify-content-center">
            <div class="innerContainer col-md-10">
              <div class="row justify-content-center py-5">
                <div class="col-md-10">
                  <p class="text-center">CONTACT US</p>
                  <h1 class="text-center font-weight-bold">
                    We will like to <br />
                    hear from you
                  </h1>
                  <form class="py-4">
                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div class="row mt-4">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div class="col">
                        <select id="inputState" class="form-control">
                          <option selected>Subject...</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group mt-4">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div class="row justify-content-center">
                      <button class="btn btn-warning text-white">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

.topFooter {
  margin-top: -0.6rem;
  background-color: $mainBlue;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-bottom: 1.5rem;
  .innerContainer {
    background-color: white;
    border-radius: 10px;
    top: -10vh;
    bottom: 10%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
