import { redirect } from "@remix-run/node";

import type { SEOHandle, LoaderFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export const loader: LoaderFunction = async () => {
  return redirect("https://app.kontenbase.com");
};
