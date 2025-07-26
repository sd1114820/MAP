import { createRequestHandler } from "../index.js";

export async function onRequest(context) {
  // 把 CF 的 request 转发给 staticmap 的 Express app
  return createRequestHandler(context.request);
}
