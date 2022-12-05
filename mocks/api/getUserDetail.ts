import { ResponseResolver, restContext, RestRequest } from "msw"

import { UserDetail } from "@/assets/models/UserDetail"

const get: ResponseResolver<RestRequest, typeof restContext> = (
  req,
  res,
  ctx
) => {
  const userId = parseInt(req.params.userId as string, 10)
  let response: UserDetail
  switch (userId) {
    case 1:
      response = {
        userId: 1,
        name: "スレッタ・マーキュリー",
        studentId: "LP041",
        dormName: "地球寮",
      }
      break
    case 2:
      response = {
        userId: 2,
        name: "ミオリネ・レンブラン",
        studentId: "LS001",
        dormName: "N/A",
      }
      break
    case 3:
      response = {
        userId: 3,
        name: "グエル・ジェターク",
        studentId: "KP001",
        dormName: "N/A",
      }
      break
    default:
      return res(ctx.status(404))
  }
  return res(ctx.status(200), ctx.json(response))
}

export default { get }
