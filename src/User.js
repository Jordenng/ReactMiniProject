import React from "react";
import "./App.css";
import Form from "./Form";
import {Link} from "react-router";
import App from "./App";

export default class User extends Form {

    render() {
        return (

        <div>
                <p>Current User Name: {this.state.UserName}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="Change User Name"  placeholder="Change User Name" onChange={this.handleChange} />
                    <button
                        onClick={this.handleClick}>Sumbit</button>
                </form>
        { this.state.isClicked ?
            this.state.dataArr.reverse().map( // display list in reverse order
                (post, index) => {
                    return(
                        <div class="div">
                            <p>User Name: {post.UserName}</p>
                        </div>

                    )
                }
            )
            : null }
            </div>
        );
    }
}
