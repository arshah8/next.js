import Link from "next/link";

export default function Footer () {
    return(
        <div>
        <footer className="bg-gray-800 py-4">
  <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
    <div className="text-white">
      <p>&copy; {new Date().getFullYear()} AR SHAH. All rights reserved.</p>
    </div>
    </div>
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
    <div className="text-white"><p>Contact: dragema44@gmail.com</p></div>

    <div className="flex justify-end items-center h-5 w-6/12">
      <Link href="/about" legacyBehavior>
        <a className="text-white hover:text-gray-300 justify-end h-5 w-2/12">ABOUT</a>
      </Link>
      <Link href="/blog" legacyBehavior>
        <a className="text-white hover:text-gray-300 h-5 w-1/12">BLOG</a>
      </Link>
    </div>
  </div>
</footer>
</div>
    )
}