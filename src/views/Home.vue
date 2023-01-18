<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  NAvatar,
  NCard,
  NSpace,
  NTabPane,
  NTabs,
  useLoadingBar,
} from "naive-ui";
import { event } from "@/api/github";
const data = ref();
const loading = useLoadingBar();
onMounted(async () => {
  loading.start();
  const events = await event();
  data.value = events.data;
  loading.finish();
});
</script>

<template>
  <div class="container">
    <NTabs size="large">
      <NTabPane name="Github">
        <NSpace vertical>
          <NCard v-for="(item, index) in data" :key="index">
            <NAvatar size="large" circle :src="item.actor.avatar_url"></NAvatar>
            <div>
              {{ item.type }}
            </div>
          </NCard>
        </NSpace>
      </NTabPane>
    </NTabs>
  </div>
</template>
