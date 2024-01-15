"use server";
import { auth } from "@clerk/nextjs";

export async function getClerkId() {
  const { userId, getToken } = auth();
  //   if (!userId) {
  //     return new Response("Unauthorized", { status: 401 });
  //   }
  //   const token = await getToken({ template: "supabase" });
  //   // Fetch data from Supabase and return it.
  //   const data = { supabaseData: "Hello World" };
  return userId;
}
