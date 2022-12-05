import { ResponseResolver, restContext, RestRequest } from "msw"

import { User } from "@/assets/models/User"

const get: ResponseResolver<RestRequest, typeof restContext> = (
  _req,
  res,
  ctx
) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        userId: 1,
        name: "スレッタ・マーキュリー",
      },
      {
        userId: 2,
        name: "ミオリネ・レンブラン",
      },
      {
        userId: 3,
        name: "グエル・ジェターク",
      },
    ] as User[])
  )
}

export default { get }
