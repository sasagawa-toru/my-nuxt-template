// Service Workerの定義

import { setupWorker } from "msw"
import { handlers } from "./handlers"

export const worker = setupWorker(...handlers)
