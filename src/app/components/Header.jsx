import Link from "next/link"

export default function Header() {
  return (
    <div>
      <h3>Celebrity Skeletons</h3>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/addskeleton">Add skeleton</Link>
      </nav>
    </div>
  )
}
