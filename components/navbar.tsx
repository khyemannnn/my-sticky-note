import Link from "next/link";

export default function NavBar() {
    return (
        <>
        <div className="logo">
            <span><Link href="/">MyStickyNote</Link></span>
        </div>
        <ul className="list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/archived">Archived</Link></li>
        </ul>
        </>
    )
}