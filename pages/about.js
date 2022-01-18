import Link from "next/link";

export default function About(){
  return(
    <div>

    <h1>About Page</h1>

    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </li>

      <li>
        <Link href="/products/pants/bluepants">
          <a>Blue Pants</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}