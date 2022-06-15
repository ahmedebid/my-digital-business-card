import profilePic from "../images/profile-pic.png";

export default function Info() {
    return (
        <header className="info-sec">
            <img src={profilePic} alt="profile"/>
            <h1>Ahmed Ebid</h1>
            <h3>Frontend Engineer</h3>
            <p>ebid.dev</p>
            <button>Email</button>
            <button>LinkedIn</button>
        </header>
    )
}