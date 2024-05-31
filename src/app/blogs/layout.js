
import Link from "next/link";
import "./style.css"; 
import { usePath } from "next/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
            {
                usePath !==' /blogs/Sportsblog' ?
                    <ul className="layout-menu">
                        <li>
                            <Link href="/blogs/Article"> Articles</Link>
                        </li>
                        <li>
                            <Link href="/blogs/Newsblog"> Newsblog</Link>
                        </li>    
                        <li>
                            <Link href="/blogs/Sportsblog"> Sportsblog</Link>
                        </li>
                        <li>
                            <Link href="/"> Home</Link>
                        </li>
                    </ul>
                    :null
            }
        </div>
        {children}
      </body>
    </html>
  );
}
