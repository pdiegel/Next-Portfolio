import Nav from './nav';
import NavItem from './navitem';
import EmailIcon from '@/public/email.svg';
import LinkedInIcon from '@/public/linkedin.svg';
import GitHubIcon from '@/public/github.svg';
import DropDownIcon from '@/public/dropdown.svg';
import DropDownMenu from './dropdownmenu';

export default function Header() {
    return (
        <header>
            <div className='wrapper'>
                <h1>Philip Diegel</h1>
                <Nav>
                    <NavItem icon={<EmailIcon />} />
                    <NavItem icon={<GitHubIcon />} />
                    <NavItem icon={<LinkedInIcon />} />

                    <NavItem icon={<DropDownIcon />}>
                        {/* Dropdown goes here */}
                        <DropDownMenu />
                    </NavItem>
                </Nav>
            </div>
        </header>
    );
}