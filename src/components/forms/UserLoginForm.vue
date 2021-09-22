<template>
  <p>
    <Input
      v-model="email"
      inputType="email"
      placeholder="Enter email address"
      tabIndex="1"
      isRequired
    />
  </p>
  <p>
    <Input
      v-model="password"
      inputType="password"
      placeholder="Enter password"
      tabIndex="2"
      isRequired
    />
  </p>
  <p><Button @click="login" tabIndex="3">Login</Button></p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '__/store'
import UserLoginDataService, { UserLoginRequest } from '__/services/UserLoginDataService'
import Input from '__/components/forms/elements/Input.vue'
import Button from '__/components/forms/elements/Button.vue'

export default defineComponent({
  name: 'UserLoginForm',
  components: {
    Input,
    Button,
  },
  setup: () => {
    // Define needed instances.
    const store = useStore()
    const router = useRouter()

    // Define needed variables.
    const email = ref('')
    const password = ref('')

    // Define async function for user login with email and password.
    const login = async () => {
      // Define data from components.
      let requestData: UserLoginRequest = {
        email: email.value,
        password: password.value,
      }

      try {
        // Define await function for user login.
        const { data } = await UserLoginDataService.login(requestData)
        // Successful response from Auth server,
        // or failed with error message.
        if (data.status === 200) {
          store.commit('update_jwt_access_token', data.jwt.token) // add token to store
          store.commit('update_jwt_expire_timestamp', data.jwt.expire) // add expire to store
          store.commit('update_current_user', data.user) // add user data to store
          router.push({ name: 'index' }) // 200: push Index page
        } else console.warn(data.msg)
      } catch (error: any) {
        console.error(error)
      }
    }

    // Return instances and variables.
    return { store, router, email, password, login }
  },
})
</script>