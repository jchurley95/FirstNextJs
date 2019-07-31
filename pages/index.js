import Link from 'next/link'

function Home() {
    return (
        <div>
            <Link href="/post/[pid]" as="/post/abc">
                <a>First Post</a>
            </Link>
        </div>
    )
}
  
export default Home
  