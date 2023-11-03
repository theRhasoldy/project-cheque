import { supabaseServer } from "@/lib/api/supabase";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default async function Home() {
  const user = await supabaseServer.auth.getUser();

  return (
    <main>
      <Typography variant="h1">Hello World</Typography>
      <Typography variant="h2">Hello World</Typography>
      <Typography variant="h3">Hello World</Typography>
      <Typography variant="body1">Hello World</Typography>
      <Typography variant="body2">Hello World</Typography>
      <Button variant="contained">Hello Button</Button>
      <Typography>{user.data.user?.email}</Typography>
      <Link href="/login">Go to login</Link>
    </main>
  );
}
