{/* Use {children} to pass children to the component, as component composition */ }
export default function TabButton({ children, onSelect, isSelected }) {
    return (
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    );
}