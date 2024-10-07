<script setup lang="ts">
import { useResumeStore } from '@/stores/ResumeStore';
import SettingsPopover from './SettingPopover.vue';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/helpers/Helper';
import { ref } from 'vue';

const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);

const visibleRef = ref(false);
const imgsRef = ref();
const indexRef = ref(0);

const onHide = () => (visibleRef.value = false);
const showProfileImage = () => {
  imgsRef.value = getImagePath(resume.value.profile.avatar);
  visibleRef.value = true;
};
</script>

<template>
  <div class="card">
    <div class="flex items-start justify-between">
      <div class="flex items-start gap-3">
        <!-- Start profile avatar -->
        <img
          :src="getImagePath(resume.profile.avatar)"
          @click="showProfileImage()"
          alt="Avatar"
          class="h-14 w-14 cursor-pointer rounded-xl border-2 border-white shadow-sm dark:border-night-800" />
        <!-- End profile avtar -->
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        <div>
          <div class="text-xl font-bold text-gray-900 dark:text-night-50">{{ resume.profile.name }}</div>
          <div class="text-xs text-gray-400 dark:text-night-200">{{ resume.profile.job }}</div>
        </div>
      </div>
      <!-- More Options  -->
      <SettingsPopover />
      <!-- End status badge -->
    </div>
    <div class=""></div>
  </div>
  <div class="card">
    <span class="text-xl font-semibold dark:text-night-50">{{ $t('social_networks') }}</span>
    <div class="mt-4 -ml-1 inline-flex flex-wrap gap-1">
      <a
        v-for="(social, index) of resume.profile.socialNetwork"
        :href="social.url"
        :key="index"
        target="_blank"
        class="cursor-pointer rounded-lg border-2 border-gray-100 px-2 py-1 text-xs font-medium text-gray-400 hover:bg-primary-500/20 hover:text-primary-500 dark:border-night-600 dark:hover:bg-primary-500/20">
        {{ social.name }}
      </a>
    </div>
  </div>
</template>
