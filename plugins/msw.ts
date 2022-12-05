// mswの初期化

import { worker } from "@/mocks/browser"

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  // 環境変数 NUXT_PUBLIC_MSW が設定されている場合有効化
  if (config.msw) {
    await worker.start() // setupでfetchするにはawaitが必要
  }
})
