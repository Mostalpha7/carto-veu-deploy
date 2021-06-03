<template>
  <div class="">
    <p class="font-weight-bold">Top five Journals fellows publish</p>
    <div>
      <div
        class="mb-1"
        v-for="(item, index) of topJournalsPublished"
        :key="index"
      >
        <div class="card-body p-2 pb-1">
          <p class="m-0 font-weight-bold">{{ index + 1 }}. {{ item._id }}</p>
          <span class="ml-3 small">{{ item.count }} publications</span>
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
