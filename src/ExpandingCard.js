import React from 'react';
import './App.css';


class ExpandingCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div>
                <div onClick={(e) => this.togglePanel(e)} className='ExpandingCardHeader'>
                    <h2>{this.props.title} {!this.state.open ? '...' : ''}</h2>
                </div>
                {this.state.open ? (<div className='ExpandingContent'> {this.props.children}</div>) : null}
            </div>
        );
    }
}

export default ExpandingCard;