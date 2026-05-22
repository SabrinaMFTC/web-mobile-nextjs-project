import { ongs } from "@/content/ongs";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
): Promise<Response> {
  const { id } = await params;
  const ongId = Number(id);

  if (Number.isNaN(ongId)) {
    return Response.json({ message: "Id de ONG invalido." }, { status: 400 });
  }

  const ong = ongs.find((item) => item.id === ongId);

  if (!ong) {
    return Response.json({ message: "ONG nao encontrada." }, { status: 404 });
  }

  return Response.json(ong);
}
