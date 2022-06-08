import { redirect } from "@remix-run/node";

import type { LoaderFunction } from "~/types";

export const loader: LoaderFunction = async () => {
  return redirect("/features/api-sdk");
};
