<template>
  <Sidebar />
  <h1>{{ alias }}</h1>
  <p>
    Go to: <router-link to="/">Index</router-link>,
    <router-link to="/projects">Projects</router-link>
  </p>
  <p>{{ store.state.jwt_access_token }}</p>
  <p>{{ store.state.jwt_expire_time }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '__/store'

// Import used components.
import Sidebar from '__/components/Sidebar.vue'

export default defineComponent({
  name: 'Project',
  props: {
    alias: {
      type: String,
      required: true,
    },
  },
  components: {
    Sidebar,
  },
  setup: () => {
    const store = useStore()
    return { store }
  },
})
</script>