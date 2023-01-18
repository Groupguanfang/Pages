<script setup lang="ts">
import { NCard, NSpace, NButton, NIcon } from "naive-ui";
import { ArrowUpRight, Checkmark } from "@vicons/carbon";
import { useMain } from "@/stores/main";

const main = useMain();
const props = defineProps({
  title: String,
  href: String,
  type: String,
});
</script>

<template>
  <NCard :title="title" hoverable>
    <slot />
    <template #header-extra>
      <NSpace>
        <NButton circle size="small" @click="main.switchType(<any>type)">
          <template #icon>
            <NIcon><Checkmark /></NIcon>
          </template>
        </NButton>
        <NButton tag="a" target="_blank" :href="href" size="small" circle>
          <template #icon>
            <NIcon size="small">
              <ArrowUpRight />
            </NIcon>
          </template>
        </NButton>
      </NSpace>
    </template>
  </NCard>
</template>
