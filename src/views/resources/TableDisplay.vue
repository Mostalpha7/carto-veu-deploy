<template>
  <div>
    <div class="boxed">
      <div class="py-md-4">
        <div class="p-md-4">
          <div class="">
            <div class="pt-md-4 px-2">
              <div class="row align-items-end">
                <div class="form-group filter col-md-2">
                  <select
                    v-model="priorityArea"
                    class="form-select form-control"
                  >
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
                  <select
                    v-model="agecategory"
                    class="form-select form-control"
                  >
                    <option value="*" selected disabled>Age Category</option>
                    <option value="children">Children</option>
                    <option value="young &amp;adolescents">
                      Young &amp; Adolescents
                    </option>
                    <option value="elderly">Elderly</option>
                    <option value="adults">Adults</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <select
                    v-model="studyApproach"
                    class="form-select form-control"
                  >
                    <option value="*" selected disabled>Study Approach</option>
                    <option value="Mixed-mehods">Mixed-mehods</option>
                    <option value="quantitative">Quantitative</option>
                    <option value="qualitative">Qualitative</option>
                    <option value="systematic">Systematic</option>
                    <option value="review">Review</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <select
                    v-model="gender"
                    id="inputState"
                    class="form-select form-control"
                  >
                    <option value="*" disabled>Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="*">Both</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <select v-model="location" class="form-select form-control">
                    <option value="*" disabled selected>Location</option>
                    <option selected value="nigeria">Nigeria</option>
                    <option selected value="uganda">Uganda</option>
                    <option selected value="south africa">south africa</option>
                    <option selected value="kenya">kenya</option>
                    <option selected value="malawi">malawi</option>
                    <option selected value="afghanistan">afghanistan</option>
                    <option selected value="rwanda">rwanda</option>
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
                      <th scope="col">Gender</th>
                      <th scope="col">Age Category</th>
                      <th scope="col">Link</th>
                    </tr>
                  </thead>
                  <Loading
                    v-if="dataLoading"
                    class="my-5 py-md-5 text-center"
                  />
                  <tbody>
                    <tr v-for="(item, index) of dataTable" :key="index">
                      <td class="text-capitalize">
                        {{ item.title | reduceText }}
                      </td>
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
                        <a :href="item.link" class="nav-link" target="_blanck"
                          >Link</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Loading v-if="dataLoading" class="py-md-4 py-3" />
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
              <div v-if="false">
                <nav aria-label="...">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a
                        class="page-link"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                        >Previous</a
                      >
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item active" aria-current="page">
                      <a class="page-link" href="#"
                        >2 <span class="sr-only">(current)</span></a
                      >
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
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
import Loading from "@/components/others/Loading";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      dataTable: [],
      gender: "*",
      location: "*",
      studyApproach: "*",
      agecategory: "*",
      priorityArea: "*",
      perpage: "10",
      dataLoading: true,
      loading: true,
      currentPage: 0,
      next: false,
      prev: false,
      nextPage: 1,
    };
  },
  methods: {
    async runFilter() {
      this.dataLoading = true;
      await axios
        .get(
          `${baseUrl}/resource?perpage=${this.perpage}&gender=${this.gender}&location=${this.location}&studyApproach=${this.studyApproach}&agecategory=${this.agecategory}&ncd=0&page=${this.nextPage}`,
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
          this.dataTable = response.data.data.reverse();
          // console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.dataLoading = false;
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
  filters: {
    reduceText(text) {
      var firstSort = `${text[0]} ${text.substring(1).toLowerCase()}`;
      var strToArr = firstSort.split(" ");

      var newStr = "";
      strToArr.forEach((item, index) => {
        if (index < 23) {
          newStr = `${newStr} ${item}`;
        }
      });

      return `${newStr} . . .`;
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
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: #e6a709;
    color: #fff;
  }
  option {
    background-color: #fff !important;
    color: #333;
    height: 10px;
  }
}

.form-group {
  .btn {
    min-width: 200px;
    background-color: #e6a709;
    border: none;
  }
}

.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: rgba(5, 17, 66, 0.041);
  color: var(--bs-table-striped-color);
}
</style>
