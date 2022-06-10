import { redirect } from "@remix-run/node";

import type { SEOHandle, LoaderFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/demo`, priority: 0.9 }];
  },
};

export const loader: LoaderFunction = async () => {
  return redirect("https://calendly.com/kontenbase/demo");
};
