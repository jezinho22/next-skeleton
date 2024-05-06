import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import { redirect } from "next/navigation";

export default function AddSkeleton() {

    async function handleSavePost(event){
        "use server";

        console.log("Saving to the database ...")
        const title = event.get("title")
        const content = event.get("content")

        await sql`INSERT INTO skeletons (title, content) VALUES (${title}, ${content})`;
        
        revalidatePath("/")
        redirect("/")

    }

    return (

    <form action={handleSavePost}>

        <label htmlFor="title">Name of skeleton</label>
        <input id="title" name="title" type="text" />

        <label htmlFor="content">Info and thoughts</label>
        <textarea id="content" name="content" />

        <button type="submit">Save</button>

    </form>

  )
}
