interface CondensedNavbarProps {
    sections: string[];
    onClick: () => void;
}

const CondensedNavbar = ({sections, onClick}: CondensedNavbarProps) => {
    return (
        <div className="list-group">
            {sections.map((section) => (
                <a 
                    key={section + "mobile"}
                    className="list-group-item list-group-item-dark list-group-item-action"
                    href={"#" + section}
                    onClick={onClick}
                >
                    {section}
                </a>
            ))}
        </div>
    )
}

export default CondensedNavbar;