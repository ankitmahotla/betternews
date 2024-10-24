import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";

import type { Context } from "@/context";

export const loggedIn = createMiddleware<Context>(async (c, next) => {
  if (!c.get("user")) {
    throw new HTTPException(401, { message: "Not logged in" });
  }
  return next();
});
