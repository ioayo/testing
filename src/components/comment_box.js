import React, { Component } from 'react';

export default class CommentBox extends Component {
    state = {  }
    render() {
        return (
            <div className="comment-box">
                <textarea />
                <button>Submit Comment</button>
            </div>
        );
    }
}

