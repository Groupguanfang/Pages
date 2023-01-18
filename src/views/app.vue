<script setup lang="ts">
import { NCard, NGrid, NGi } from "naive-ui";
import { useMain } from "@/stores/main";
import AppItem from "@/components/appItem.vue";
const main = useMain();
</script>

<template>
  <div class="container">
    <NGrid :x-gap="10" :y-gap="10" cols="2 s:2 m:4 l:5" responsive="screen">
      <NGi>
        <AppItem type="baidu" title="Baidu" href="//baidu.com"
          >百度一下，你就知道</AppItem
        >
      </NGi>
      <NGi>
        <AppItem type="google" title="Google" href="//google.com"
          >Don't be evil</AppItem
        >
      </NGi>
      <NGi>
        <AppItem type="bing" title="Bing" href="//bing.com">
          Bing is for doing
        </AppItem>
      </NGi>
      <NGi>
        <AppItem type="github" title="Github" href="//github.com">
          Let’s build from here
        </AppItem>
      </NGi>
    </NGrid>
  </div>
</template>
