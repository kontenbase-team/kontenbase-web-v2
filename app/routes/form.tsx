import { redirect } from "@remix-run/node";

import type { SEOHandle, LoaderFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/form`, priority: 0.9 }];
  },
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const interest = url.searchParams.get("interest");

  switch (interest) {
    case "custom-development":
      return redirect("https://a.kontenbase.com/form-dev");

    case "company-training":
      return redirect("https://a.kontenbase.com/form-training");

    default:
      return redirect("https://a.kontenbase.com/demo");
  }
};
