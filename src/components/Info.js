import profilePic from "../images/profile-pic.png";
import mailIcon from "../images/mail-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";

export default function Info() {
    return (
        <header className="info-sec">
            <img src={profilePic} alt="profile"/>
            <h1>Ahmed Ebid</h1>
            <h3>Frontend Engineer</h3>
            <p>ebid.dev</p>
            <button className="email-button"><img src={mailIcon} alt="mail icon"/>Email</button>
            <button className="linkedin-button"><img src={linkedinIcon} alt="LinkedIn icon"/>LinkedIn</button>
        </header>
    )
}