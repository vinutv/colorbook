import React from 'react';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataFeed: []
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <nav>
                <ul className="list horizontal float-right">
                    <li>
                        <a>Latest</a>
                    </li>
                    <li>
                        <a>By date</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
