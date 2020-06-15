import React from "react";
import "./App.css"
import Message from "./Message";
import { Link } from "react-router-dom";

export default class Form extends React.Component {
    state = {
        dataArr : [],
        isClicked: false,
        Message : '',
        Date: " ",
        UserName: "chalrie"
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const copyDataArr = Object.assign([], this.state.dataArr)

        copyDataArr.push({
            Message : this.state.Message,
            Date: this.state.Date,
            UserName: this.state.UserName,
        })

        this.setState({
            isClicked : true,
            dataArr : copyDataArr
        })

    }

    render() {
        console.log(this.state.Message)
        return (
            <div>
            <h1>Form and Input</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="Message"  placeholder="Sumbit Message" onChange={this.handleChange}/>
                <input type="text" name="Date"  placeholder="Sumbit Date" onChange={this.handleChange}/>
                <input type="text" name="User Name"  placeholder="Sumbit User Name" onChange={this.handleChange}/>
                <button
                    onClick={this.handleClick}
                    disabled={this.state.Message.length >= 140}>Sumbit</button>
                <nav>
                    <Link to={"/user"}> <li>User</li></Link>
                </nav>
            </form>
                { this.state.isClicked ?
                    this.state.dataArr.reverse().map( // display list in reverse order
                        (post, index) => {
                            return(
                                <div class="div">
                                    <p> Message: {post.Message}</p>
                                    <p> Date: {post.Date} </p>
                                    <p>UserName: {post.UserName}</p>
                                </div>

                        )
                        }
                    )
                    : null }
            </div>
        );
    }
}
