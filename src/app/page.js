import { sql } from "@vercel/postgres";
import Link from "next/link"

import styles from "./page.module.css";

export default async function Home() {
  console.log("working")

  const result = await sql`SELECT * FROM skeletons`;
  const skeletons = result.rows

  return (
    <main>
      <h2>Famous skeletons</h2>
      <h4>Which is your favourite skeleton?</h4>
      <ul>
        {skeletons.map((skeleton) => {
          return (
          <Link href={`/skeleton/${skeleton.id}`} key={skeleton.id}>
            <li>{skeleton.id}: {skeleton.title}</li>
          </Link>
        )})}
      </ul>
    </main>
  );
}
