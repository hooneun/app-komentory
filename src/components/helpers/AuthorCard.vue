<template>
  <div class="inline-flex items-center space-x-2">
    <img
      :src="picture ? picture : 'https://cdn.komentory.com/media/user/default-picture.svg'"
      :class="pictureSize"
      class="border-2 bg-main border-secondary rounded-full"
      alt="user picture"
    />
    <div>
      <router-link :to="{ name: 'user-details', params: { id } }">{{ first_name }} {{ last_name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthorCard',
  props: {
    id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, default: '' },
    picture: { type: String, default: '' },
    pictureSize: { type: String, required: true },
  },
})
</script>