import { useState } from 'react';

export default function NavItem(props) {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <li className="nav-item">
            <a href={props.url ? props.url : "#"} className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}