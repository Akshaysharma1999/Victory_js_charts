import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
            <Link to="/charts">Charts</Link><br></br>
            <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default Home