import facebookIcon from "../images/facebook-icon.png";
import githubIcon from "../images/github-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import twitterIcon from "../images/twitter-icon.png";

export default function Footer() {
    return (
        <footer>
            <img src={twitterIcon} alt="Twitter icon" />
            <img src={facebookIcon} alt="Facebook icon" />
            <img src={instagramIcon} alt="Instagram icon" />
            <img src={githubIcon} alt="GitHub icon" />
        </footer>
    )
}