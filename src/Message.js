import React from "react";
import Form from "./Form"

export default class Message extends React.Component {

    state = {
        dataArr : [],
        isClicked: false,
        Message : '',
        Date: " ",
        UserName: "Charlie"
    }



    render() {
        return (
            <div>
                { this.state.isClicked ?
                    this.state.dataArr.map(
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