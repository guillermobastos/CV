// components/SocialIcons.tsx
import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import styles from '../styles/SocialIcons.module.css';

interface SocialLink {
    id: number;
    icon: JSX.Element;
    url: string;
}

const SocialIcons: React.FC = () => {
    const socialLinks: SocialLink[] = [
        { id: 0, icon: <FaGithub />, url: 'https://github.com/guillermobastos' },
        { id: 1, icon: <SiGmail />, url: 'mailto:bastosribasguillermo@gmail.com' },
        { id: 2, icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/guillermo-bastos-4aba6b156/' },
        { id: 3, icon: <FaTwitter />, url: 'https://www.twitter.com/guillebrz' },
    ];

    return (
        <div className={styles.container}>
            {socialLinks.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles['icon-' + link.id]}`}>
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;

