export async function POST(req: Request) {
    const form = await req.json();
    console.log(form);
    return Response.json({ hello: 70 });
}
