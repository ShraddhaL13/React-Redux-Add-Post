import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
            <a className="navbar-brand" href="/">React Redux Add Post</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        </nav>
    );
}

export default Navbar;
