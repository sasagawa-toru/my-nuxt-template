<template>
  <div>
    <div v-if="pending || !data">Loading...</div>
    <div v-else>
      <div>
        <span>名前: </span><span>{{ data.name }}</span>
      </div>
      <div>
        <span>学籍番号: </span><span>{{ data.studentId }}</span>
      </div>
      <div>
        <span>在籍寮: </span><span>{{ data.dormName }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserDetail } from "@/assets/models/UserDetail"

// URLからユーザーIDを取得
const route = useRoute()
const userId = route.params.userId

const { pending, data } = useFetch<UserDetail>(`/api/users/${userId}`)
</script>
