import EmailIcon from '@/public/email.svg';
import LinkedInIcon from '@/public/linkedin.svg';
import GitHubIcon from '@/public/github.svg';
import NavItem from '@/components/navitem';
import styles from '@/styles/About.module.css';

export default function Summary() {
    return (
        <>
            <h2>About Me</h2>
            <p>
                Originally from Nokomis, Florida, my lifelong enthusiasm
                for video games has steered me towards a career in computer
                programming. With a strong foundation in Python and recent
                advancements in learning JavaScript, React.js, and Next.js,
                I am eagerly embracing the dynamic challenges and opportunities
                in the programming landscape.
            </p>
            <p>
                Phone: (941) 416-0937
                <br />
                Location: Sarasota, Florida
                <br />
                <div className={styles.icons}>
                    <NavItem icon={<EmailIcon />} url="mailto:philipdiegel@gmail.com" />
                    <NavItem icon={<GitHubIcon />} url="https://github.com/pdiegel" />
                    <NavItem icon={<LinkedInIcon />} url="https://www.linkedin.com/in/philip-diegel" />
                </div>
            </p>
        </>
    )
}