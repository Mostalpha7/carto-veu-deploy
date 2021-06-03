<template>
  <div>
    <div class="boxed">
      <div class="py-md-4">
        <div class="p-md-4">
          <div class="">
            <div class="pt-md-4 px-2">
              <div class="row align-items-end">
                <div class="form-group filter col-md-2">
                  <select id="inputState" class="form-select form-control">
                    <option value="*" disabled selected
                      >Select Priority Area</option
                    >
                    <option value="mentalhealth">Mental Health</option>
                    <option value="foodsecurity">Food Security</option>
                    <option value="cancer">Cancer</option>
                    <option value="mch">Mch</option>
                    <option value="healthSystemandPolicy">
                      Health System And Policy
                    </option>
                    <option value="violenceandinjuries">
                      Violence And Injuries
                    </option>
                    <option value="srh">Srh</option>
                    <option value="disability">Disability</option>
                    <option value="covid19">Covid-19</option>
                    <option value="substanceuse">Substance Use</option>
                    <option value="environmentalhealth">
                      Environmental Health
                    </option>
                    <option value="ncd">Ncd</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <select v-model="gender" id="inputState" class="form-select form-control">
                    <option value="*" selected disabled>Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="male&amp;female">Both</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <select v-model="agecategory" class="form-select form-control">
                    <option value="*" selected disabled>Age Category</option>
                    <option value="children">Children</option>
                    <option value="young &amp; adolescents">
                      Young &amp; Adolescents
                    </option>
                    <option value="elderly">Elderly</option>
                    <option value="adults">Adults</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <select v-model="studyApproach" class="form-select form-control">
                    <option value="*" selected disabled>Study Approach</option>
                    <option value="Mixed-mehods">Mixed-mehods</option>
                    <option value="quantitative">Quantitative</option>
                    <option value="qualitative">Qualitative</option>
                    <option value="systematic">Systematic</option>
                    <option value="review">Review</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <select v-model="location" class="form-select form-control">
                    <option value="*" disabled selected>Location</option>
                    <option selected value="nigeria">Nigeria</option>
                    <option selected value="tanzania">Tanzania</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <button class="btn btn-dark" @click="runFilter">
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <div class="p-md-4">
              <div class="table-responsive-sm">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Location</th>
                      <th scope="col">Home Institution</th>
                      <th scope="col">Study Approach</th>
                      <th scope="col">Study Design</th>
                      <th scope="col">Sample Size</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Age Category</th>
                      <th scope="col">Scopus Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) of dataTable" :key="index">
                      <td>{{ item.title }}</td>
                      <td class="text-center text-capitalize">
                        <span v-if="item.location">{{ item.location }}</span>
                        <span v-else>-</span>
                      </td>
                      <td class="text-center text-capitalize">
                        <span v-if="item.homeinstitution">
                          {{ item.homeinstitution }}
                        </span>
                        <span v-else>
                          -
                        </span>
                      </td>
                      <td class="text-center text-capitalize">
                        <span v-if="item.studyApproach">{{
                          item.studyApproach
                        }}</span>
                        <span v-else>-</span>
                      </td>
                      <td class="text-center text-capitalize">
                        <span v-if="item.designNew">{{ item.designNew }}</span>
                        <span v-else>-</span>
                      </td>
                      <td class="text-center text-capitalize">
                        <span v-if="item.sampleSize">{{ item.sampleSize }}</span>
                        <span v-else>-</span>
                      </td>
                      <td class="text-center text-capitalize">
                        <span v-if="item.gender">
                          {{ item.gender }}
                        </span>
                        <span v-else>-</span>
                      </td>
                      <td class="text-center text-capitalize">
                        <span v-if="item.agecategory">
                          {{ item.agecategory }}
                        </span>
                        <span v-else>
                          -
                        </span>
                      </td>
                      
                      <td class="text-center text-capitalize">
                        <a
                          :href="item.scopusID"
                          class="nav-link"
                          target="_blanck"
                          >Link</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="loading">
                <div class="row justify-content-left">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-6">
                        <div
                          @click="Prev"
                          class="btn btn-secondary mr-2"
                          :class="[prev ? 'btn-warning' : '']"
                        >
                          prev
                        </div>

                        <div
                          @click="Next"
                          class="btn btn-secondary"
                          :class="[next ? 'btn-warning' : '']"
                        >
                          Next
                        </div>
                      </div>
                    </div>
                  </div>
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
import axios from "axios";
import { apiKey, baseUrl } from "@/resource.js";

export default {
  data() {
    return {
      dataTable: [],
      gender: "*",
      location: "*",
      studyApproach: "*",
      agecategory: "*",
      perpage: "50",

      loading: true,
      currentPage: 0,
      next: false,
      prev: false,
      nextPage: 1,
    };
  },
  methods: {
    async runFilter() {
      await axios
        .get(
          `${baseUrl}/resource?perpage=${this.perpage}&gender=${this.gender}&location=${this.location}&studyApproach=${this.studyApproach}&ncd=0&page=${this.nextPage}`,
          {
            headers: {
              apiKey: apiKey,
            },
          }
        )
        .then((response) => {
          this.currentPage = response.data.page;
          this.next = response.data.next;
          this.prev = response.data.prev;
          this.dataTable = response.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Prev() {
      if (this.prev != false) {
        this.nextPage--;
        this.runFilter();
      }
    },
    Next() {
      if (this.next != false) {
        this.nextPage++;
        this.runFilter();
      }
    },
  },
  created() {
    this.runFilter();
  },
};
</script>

<style lang="scss">
label {
  font-size: 0.8rem;
}
td {
  font-size: 0.84rem;
}

th {
  font-size: 0.9rem;
}

.form-select {
  cursor:pointer;
  font-size:0.9rem;
  &:hover {
    background-color: #E6A709;
    color:#fff;
  }
  option {
    background-color: #fff !important;
    color:#333;
    height: 10px;
  }

}

.form-group {
  .btn {
    min-width:200px;
    background-color: #E6A709;
    border: none;
  }
}

</style>
