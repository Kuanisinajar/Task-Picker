import React, { Component } from 'react';

class TagObj extends Component {

    state = {
        tag: this.props.tag,
        active: false || this.props.active
    }


    handleClick = (e) => {
        this.setState({
            active: !this.state.active
        }, () => {
            this.props.checkTagState(this.state.active, this.props.tag)
        });

    }

    componentDidUpdate() {
        if (this.props.active && this.state.active === false) {
            this.setState({
                active: this.props.active
            });
        }
    }

    render() {
        return (
            <div className={this.state.active ? "tagObj tagActive" : "tagObj"} onClick={this.handleClick}>
                {this.props.tag}
            </div>
        )
    }

}

export default TagObj;