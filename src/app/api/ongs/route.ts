import { ongs } from "@/content/ongs";

export async function GET() {
  return Response.json(ongs);
}
