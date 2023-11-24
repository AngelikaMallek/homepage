import { IconStyle } from './styled';
import { ReactComponent as GithubIcon } from './icons/gitHub.svg';
import { ReactComponent as FbIcon } from './icons/facebook.svg';
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg';
import { ReactComponent as InstaIcon } from './icons/instagram.svg';

export const socials = [
    {
        name: 'GitHub',
        url: 'https://github.com/AngelikaMallek',
        Icon: IconStyle(GithubIcon),
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=100006222018791&locale=pl_PL',
        Icon: IconStyle(FbIcon),
    },
    {
        name: 'Linkedin',
        url: 'www.linkedin.com/in/angelika-mallek-b10a61262',
        Icon: IconStyle(LinkedinIcon),
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/angelikamallek/',
        Icon: IconStyle(InstaIcon),
    },
]