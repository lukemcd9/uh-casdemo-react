function Link({ backend, href, children }) {
    return (
        <a href={backend ? `http://localhost:8080/casdemo${href}` : href}>{children}</a>
    )
}

export default Link