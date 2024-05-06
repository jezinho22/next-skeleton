import {sql} from '@vercel/postgres';

export default async function page({params}) {
  const results = await sql`SELECT id, title, content
                             FROM skeletons
                             WHERE id = ${params.id}`
  const skeleton = results.rows[0]
  console.log(skeleton)

  

  return (
    <div>

        <h4>Skeleton number {skeleton.id}</h4>
        <h2>{skeleton.title}</h2>
        <p>{skeleton.content}</p>

        {/* <form action="">
          <textarea placeholder="Comment"></textarea>
        </form> */}


    </div>
  )
}
