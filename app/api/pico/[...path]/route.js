import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request, { params }) {
  const pathParts = await params.path;
  const filePath = join(process.cwd(), "public", "pico-games", ...pathParts);
  
  try {
    const ext = filePath.split(".").pop();
    const contentTypes = {
      html: "text/html",
      js: "application/javascript",
      png: "image/png",
    };

    const file = await readFile(filePath);
    return new Response(file, {
      headers: { "Content-Type": contentTypes[ext] || "text/plain" },
    });
  } catch (e) {
    console.log("Error:", e.message);
    return new Response("Not found: " + filePath, { status: 404 });
  }
}
