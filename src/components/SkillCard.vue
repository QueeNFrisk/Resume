<script setup lang="ts">
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);
</script>

<template>
  <div class="card">
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('skills') }}</h2>
    <div class="-m-2 flex flex-wrap">
      <span
        v-for="(value, index) in resume.skill"
        :key="index"
        class="badge m-1 cursor-pointer bg-primary-500/20 text-primary-500 hover:bg-primary-300 hover:text-white">
        {{ value }}
      </span>
    </div>
  </div>
</template>
