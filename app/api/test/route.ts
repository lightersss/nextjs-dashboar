import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export function GET() {
  return new Response(JSON.stringify({ a: 1 }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
