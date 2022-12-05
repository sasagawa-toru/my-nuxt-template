// URLとの関連付け

import { rest } from "msw"
import getUsers from "@/mocks/api/getUsers"
import getUserDetail from "@/mocks/api/getUserDetail"

export const handlers = [
  rest.get("/api/users", getUsers.get), // ユーザー一覧取得API
  rest.get("/api/users/:userId", getUserDetail.get), // ユーザー詳細取得API
]
