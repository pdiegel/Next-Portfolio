import { useState } from 'react';

export default function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className={`nav-item ${open ? 'open' : ''}`} >
            <a href={props.url ? props.url : "#"} className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {props.children}
        </ li>
    )
}