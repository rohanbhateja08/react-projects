export default function Section({ title, children, ...props }) {
    return (
        <section id={props.id}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

// (...props) rest operator is used to pass all the props to the component, so that we can use them in the component, like id in this case.