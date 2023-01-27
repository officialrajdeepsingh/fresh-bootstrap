
export default function Footer() {

    return (

        <footer className="container navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Frontend web</a>

                <div>

                    <ul style={{ display: "flex", flexDirection: "row"}} className="flex navbar-nav mx-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li style={{ margin: "0px 12px"}} className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>

                    </ul>

                </div>
            </div>
        </footer>

    );
}