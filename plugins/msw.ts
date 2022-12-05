// mswの初期化

import { worker } from "@/mocks/browser"

export default defineNuxtPlugin(async () => {
  await worker.start() // setupでfetchするにはawaitが必要
})
