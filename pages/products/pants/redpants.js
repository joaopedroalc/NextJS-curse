import Link from "next/link"

export default function Redpants(){
  return(
    <div>
      <h1>Red Pants</h1>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
    
  )
}