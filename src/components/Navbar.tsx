interface NavbarProps {
    sections: string[];
    onOpen: () => void;
}

const Navbar = ({sections, onOpen}: NavbarProps) => {
    return (
        <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={onOpen}>
            <span className="navbar-toggler-icon" />
        </button>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {sections.map((section) => (
                    <li key={section} className="nav-item">
                    <a 
                        className="nav-link"
                        href={"#" + section}
                    >
                        {section}
                    </a>
                    </li>
                ))}
            </ul>
            </div>
        </div>
        </nav>
        </>
    );
}

export default Navbar;