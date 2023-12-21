import Link from 'next/link';
import navigationUrls from '@/public/navigation.json'

export default function Header() {

    const displayNavigationElements = () => {
        // Programatically display navigation items based on the 
        // contents of navigation.json

        return (
            <ul>
                {Object.entries(navigationUrls).map(([navName, url]) =>
                    <li key={navName}>
                        <Link href={url}>{navName}</Link>
                    </li>
                )}
            </ul>
        )

    }

    return (
        <header>
            <div className='wrapper'>
                <h1>Philip Diegel</h1>
                <nav>
                    {displayNavigationElements()}
                </nav>
            </div>
        </header>
    );
}