// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from "node:child_process";

export const runtime = "nodejs";

type Data = {
  name: string
}

function execAsync(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) {
        resolve(`Error: ${error}`);
      } else {
        resolve(stdout);
      }
    });
  });
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await execAsync("convert --version") + "";
  res.send(response);
}
