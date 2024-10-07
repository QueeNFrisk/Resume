<script setup lang="ts">
import type { Language } from '@/models/Language';
import { getImagePath } from '@/helpers/Helper';

defineProps<{ item: Language; separator: boolean }>();
</script>
<template>
  <div
    class="flex min-w-[180px] w-full cursor-pointer items-center gap-2 rounded-lg border-primary-500/30 px-4 py-2 hover:bg-gray-100 dark:border-night-700 dark:hover:bg-night-700">
    <img
      :src="getImagePath(item.flag)"
      alt="Avatar"
      class="h-9 w-9 rounded-full border-2 border-white shadow-sm dark:border-night-700" />
    <div class="font-medium">
      <div class="text-xs text-gray-600 dark:text-night-200">{{ item.name }}</div>
      <div class="text-xs text-gray-400 dark:text-night-400">{{ item.level }}</div>
    </div>
  </div>
  <div v-if="separator" class="border-b border-dashed border-gray-200 dark:border-night-600"></div>
</template>
