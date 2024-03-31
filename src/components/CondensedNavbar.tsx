interface CondensedNavbarProps {
    sections: string[];
}

const CondensedNavbar = ({sections}: CondensedNavbarProps) => {
    return (
        <div className="list-group">
            {sections.map((section) => (
                <a 
                    key={section + "mobile"}
                    className="list-group-item list-group-item-dark list-group-item-action"
                    href={"#" + section}
                >
                    {section}
                </a>
            ))}
        </div>
    )
}

export default CondensedNavbar;