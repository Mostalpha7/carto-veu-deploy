<template>
  <div class="allHeight">
    <p class="font-weight-bold">Top five Journals fellows publish</p>
    <div>
      <div
        class="card shadow mb-2"
        v-for="(item, index) of topJournalsPublished"
        :key="index"
      >
        <div class="card-body p-2">
          <p class="m-0">Name: {{ item._id }}</p>
          <p class="m-0">Count: {{ item.count }}</p>
          <p class="m-0">Percentage: {{ item.percentage }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["topJournalsPublished"],
  created() {},
};
</script>
