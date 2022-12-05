<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <v-list>
        <v-list-item
          v-for="user in data"
          :key="user.userId"
          :to="`/users/${user.userId}`"
          >{{ user.name }}</v-list-item
        >
      </v-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "@/assets/models/User"

const { pending, data } = useFetch<User[]>("/api/users")
</script>
