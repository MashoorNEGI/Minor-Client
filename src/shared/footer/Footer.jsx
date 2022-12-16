import "./Footer.scss"
function Footer() {
    return (
        <footer className=" text-center text-lg-start fixed-bottom">
            <div className="text-center p-3">
                © 2020 Copyright: &nbsp;
                <a className="text-secondary" style={{ "text-decoration": "none" }} href="https://github.com/MashoorNEGI">Deepak & Nikhil</a>
            </div>
        </footer>
    );
}

export default Footer;