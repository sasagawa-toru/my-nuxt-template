import { rest } from "msw"
import getUsers from "@/mocks/api/getUsers"
import getUserDetail from "@/mocks/api/getUserDetail"

export const handlers = [
  rest.get("/api/users", getUsers.get),
  rest.get("/api/users/:userId", getUserDetail.get),
]
