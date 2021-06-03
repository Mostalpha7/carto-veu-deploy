<template>
  <div>
    <div class="boxed">
    <div class="py-5 partners">
      <h3 class="text-center">Our African Partners</h3>
      <div class="container">
          <div class="funders-logo">
            <img src="../../assets/partners/partner1.png" alt="" />
          </div>
          <div class="funders-logo">
            <img src="../../assets/partners/partner2.png" alt="" />
          </div>
          <div class="funders-logo">
            <img src="../../assets/partners/partner3.png" alt="" />
          </div>
          <div class="funders-logo">
            <img src="../../assets/partners/partner5.png" alt="" />
          </div>
          <div class="funders-logo">
            <img src="../../assets/partners/partner6.png" alt="" />
          </div>
          <div class="funders-logo">
            <img src="../../assets/partners/partner7.png" alt="" />
          </div>
        
      </div>
    </div>
    </div>

    <div class="boxed">
      <div>
        <div class="p-4 pb-5">
          <div class="pb-md-5">
            <h3 class="text-center pt-4">Our Funders</h3>
            <div class="container scrollhor py-5">
              <div class="d-flex">
                <div class="col-md-2">
                  <img
                    width="75"
                    src="../../assets/funders/University Gothenburg.png"
                    alt=""
                  />
                </div>
                <div class="col-md-2">
                  <img
                    width="75"
                    src="../../assets/funders/wellcome.png"
                    alt=""
                  />
                </div>
                <div class="col-md-2">
                  <img width="75" src="../../assets/funders/AEESA.png" alt="" />
                </div>
                <div class="col-md-2">
                  <img width="75" src="../../assets/funders/daad.png" alt="" />
                </div>
                <div class="col-md-2">
                  <img width="75" src="../../assets/funders/delta.png" alt="" />
                </div>
                <div class="col-md-2">
                  <img width="75" src="../../assets/funders/ford.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partner1: "",
      partner2: "",
      partner3: "",
      partner5: "",
      partner6: "",
      partner7: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.scrollhor {
  overflow-x: scroll !important;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none !important;
}
.scrollhor::-webkit-scrollbar {
  display: none;
}
.container {
  display: grid;
  grid: 100px / repeat(6, auto);
  grid-gap: 10px;
  justify-content: center;
  .funders-logo {
  }
}
</style>
