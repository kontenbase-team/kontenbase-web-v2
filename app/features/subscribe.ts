import { json } from "@remix-run/node";

import { axiosConvertKitServer, axiosConvertKitClient } from "~/libs";
import { getEnvServer, sleep } from "~/utils";

import type { LoaderFunction, ActionFunction } from "~/types";

/**
 * Remix Loader to Subscribe
 */

export const loaderSubscribe: LoaderFunction = async () => {
  const CONVERTKIT_API_KEY = getEnvServer("CONVERTKIT_API_KEY");
  const CONVERTKIT_FORM_ID = getEnvServer("CONVERTKIT_FORM_ID");

  if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
    throw new Response("ConvertKit API key and form ID are not found", {
      status: 500,
    });
  }

  return json({ ok: true });
};

/**
 * Remix Action to Subscribe
 */

export const actionSubscribe: ActionFunction = async ({ request }) => {
  try {
    await sleep(1);

    const form = await request.formData();

    const email = form.get("email");
    const firstName = form.get("firstName");

    // Check proper texts
    if (typeof email !== "string" || typeof firstName !== "string") {
      return json({
        error: true,
        message: "Sorry, please provide proper name and email.",
      });
    }

    // Check existence
    if (!email && !firstName) {
      return json({
        error: true,
        message: "Sorry, please provide name and email.",
      });
    }

    // Submit to API
    const data = await convertkitSubscribeServer({ email, firstName });

    // Check response
    if (!data.subscription) {
      return json({
        error: true,
        message: data,
      });
    }

    // Return success
    return json({
      success: true,
      firstName,
      email,
      message: `Thank you ${firstName}, ${email} is subscribed! Please check your inbox.`,
      ...data,
    });
  } catch (error) {
    return json({
      error: true,
      message: "Sorry, failed for unknown reason.",
    });
  }
};

/**
 * Custom function subscribe to ConvertKit in the client or server
 */

interface SubscribeToConvertKitProps {
  email: string;
  firstName: string;
}

export const convertkitSubscribeClient = async ({
  email,
  firstName,
}: SubscribeToConvertKitProps) => {
  try {
    const apiKey = ENV.CONVERTKIT_API_KEY;
    const tagIds = [3096588];

    const response = await axiosConvertKitClient.post("/subscribe", {
      api_key: apiKey,
      email,
      first_name: firstName,
      tags: tagIds,
    });

    return response.data;
  } catch (error: any) {
    console.error(error.response.status, error.response.data);
    return error.response.data[0];
  }
};

export const convertkitSubscribeServer = async ({
  email,
  firstName,
}: SubscribeToConvertKitProps) => {
  try {
    const apiKey = getEnvServer("CONVERTKIT_API_KEY");
    const tagIds = [3096588];

    const response = await axiosConvertKitServer.post("/subscribe", {
      api_key: apiKey,
      email,
      first_name: firstName,
      tags: tagIds,
    });

    return response.data;
  } catch (error: any) {
    console.error(error.response.status, error.response.data);
    return error.response.data[0];
  }
};
