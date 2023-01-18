<script setup lang="ts">
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import {
  darkTheme,
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLoadingBarProvider,
} from "naive-ui";
import { useMain } from "./stores/main";
const main = useMain();
</script>

<template>
  <NConfigProvider :theme="main.theme === null ? null : darkTheme">
    <NLoadingBarProvider>
      <NLayout style="height: 100vh">
        <NLayoutHeader bordered class="header">
          <Header></Header>
        </NLayoutHeader>
        <NLayoutContent class="content">
          <RouterView />
        </NLayoutContent>
        <Footer></Footer>
      </NLayout>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<style lang="less" scoped>
.header {
  position: fixed;
  z-index: 999;
}
.content {
  margin-top: 68px;
}
</style>
