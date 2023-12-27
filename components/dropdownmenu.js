import navigationUrls from '@/public/navigation.json';
import Link from 'next/link';

export default function DropDownMenu() {
    const dropDownObjects = () => {
        return Object.entries(navigationUrls).map(([navName, url]) => {
            return <DropDownItem key={navName} url={url}>{navName}</DropDownItem>
        });
    };

    function DropDownItem(props) {
        return (
            <Link href={props.url ? props.url : "#"} className="menu-item">
                {props.children}
            </Link>
        );
    }

    return (
        <div className="dropdown">
            {dropDownObjects()}
        </div>
    )
}