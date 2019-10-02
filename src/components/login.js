import React from 'react'
import './login.css';

export default class login extends React.Component {
    render() {
        return <div id = "body">
            <form id = 'login'>
                <label>
                    Username:
                </label>
                <input type="text" name="username" />
                <label>
                    Password:
                </label>
                <input type="password" name="password"></input>
                <input type="submit" value="Submit" />
            </form>
        </div>
    }
}