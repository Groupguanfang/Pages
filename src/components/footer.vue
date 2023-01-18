<script setup lang="ts">
import { NButton, NIcon, NLayoutFooter, NSpace, NTabs, NTab } from "naive-ui";
import { Sun, Asleep, UserAvatarFilled } from "@vicons/carbon";
import { useMain } from "@/stores/main";
const main = useMain();
</script>

<template>
  <div class="footer">
    <NLayoutFooter bordered>
      <NSpace justify="space-between">
        <NButton circle @click="main.switchTheme">
          <template #icon>
            <NIcon>
              <Asleep v-if="main.theme === null" />
              <Sun v-if="main.theme === 'dark'" />
            </NIcon>
          </template>
        </NButton>
        <NButton circle>
          <template #icon>
            <NIcon>
              <UserAvatarFilled />
            </NIcon>
          </template>
        </NButton>
      </NSpace>
    </NLayoutFooter>
  </div>
</template>

<style lang="less">
.footer {
  bottom: 0;
  position: fixed;
  z-index: 999;
  width: 100%;
  .n-layout-footer {
    padding: 10px;
  }
}
</style>
