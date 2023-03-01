import logo from '../assets/troll-face.png';

export default function Header () {
    function logoAlert() {
        alert("Thanks for clicking me =)");
    }
    return (
        <div className="header">
            <img src={logo} className="header--logo" alt="logo" onClick={logoAlert} />
            <h2 className="header--title">MemeGenerator</h2>
            <h4 className="header--subtitle">React Course - Project 13</h4>
        </div>
    )
}