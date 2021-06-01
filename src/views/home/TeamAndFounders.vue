<template>
  <div>
    <div class="py-5 partners">
      <h2 class="text-center">Our African Partners</h2>
      <div class="container">
        <div class="d-flex scrollhor">
          <div class="col-md-2">
            <img width="75" src="../../assets/partners/partner1.png" alt="" />
          </div>
          <div class="col-md-2">
            <img width="75" src="../../assets/partners/partner2.png" alt="" />
          </div>
          <div class="col-md-2">
            <img width="75" src="../../assets/partners/partner3.png" alt="" />
          </div>
          <div class="col-md-2">
            <img width="75" src="../../assets/partners/partner5.png" alt="" />
          </div>
          <div class="col-md-2">
            <img width="75" src="../../assets/partners/partner6.png" alt="" />
          </div>
          <div class="col-md-2">
            <img width="75" src="../../assets/partners/partner7.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="boxed">
      <div class="curveBorder">
        <div class="p-4 pb-5">
          <div class="pb-md-5">
            <h2 class="text-center pt-4">Our Funders</h2>
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
}
</style>
