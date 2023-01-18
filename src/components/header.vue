<script setup lang="ts">
import { ref } from "vue";
import { NButton, NIcon, NInput, NInputGroup } from "naive-ui";
import { Home, Switcher, LogoGithub, LogoGoogle } from "@vicons/carbon";
import JiTang from "@/api/jitang";
import { useRoute, useRouter } from "vue-router";
import bing from "@/assets/icons/bing.vue";
import baidu from "@/assets/icons/baidu.vue";
import { useMain } from "@/stores/main";

const data = JiTang();
const router = useRouter();
const route = useRoute();
const main = useMain();
const ji = ref(data);
const isHome = ref(route.path === "/" ? true : false);
const isShowLeftButton = ref(true);

const switchPanel = () => {
  if (route.path == "/apps") {
    isHome.value = true;
    router.push("/");
  } else {
    isHome.value = false;
    router.push("/apps");
  }
};

const searchFocus = () => {
  isShowLeftButton.value = false;
};
const searchBlur = () => {
  isShowLeftButton.value = true;
};
</script>

<template>
  <div class="home">
    <NInputGroup>
      <NButton
        v-if="isShowLeftButton"
        @click="switchPanel"
        circle
        type="primary"
        size="large"
      >
        <template #icon>
          <NIcon class="switcher">
            <Switcher v-show="isHome" />
            <Home v-show="!isHome" />
          </NIcon>
        </template>
      </NButton>
      <NInput
        @focus="searchFocus"
        @blur="searchBlur"
        autofocus
        round
        size="large"
        :placeholder="ji"
      />
      <NButton circle size="large" type="primary">
        <template #icon>
          <NIcon>
            <bing v-if="main.type === 'bing'" />
            <baidu v-if="main.type === 'baidu'" />
            <LogoGithub v-if="main.type === 'github'" />
            <LogoGoogle v-if="main.type === 'google'" />
          </NIcon>
        </template>
      </NButton>
    </NInputGroup>
  </div>
</template>

<style lang="less">
.home {
  padding: 14px;
  .switcher {
    margin-left: 3px;
  }
}
</style>
