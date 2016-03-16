// //========= view part 分離至ex: component/index.js =============//

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// use connect to put actions & store's state to props

import actions from './action.js';

export class CountButton extends React.Component{
    // this => react obj
    onClickCountButton(count, delay){
        // this.props => object which have action and state
        this.props.actions.clickAction(count, delay);
    }
    render(){
            return (
                <div>
                    <h1>{this.props.clickState.clickCount}</h1>
                    <button onClick={this.onClickCountButton.bind(this, 1, 0)}>Add by 1</button>
                    <button onClick={this.onClickCountButton.bind(this, 10, 0)}>Add by 10</button>
                    <button onClick={this.onClickCountButton.bind(this, 5, 2)}>Delay 2 second and add by 5</button>
                </div>
        )
    }
}
// use connect to put actions & store's state to props
function mapStateToProps(state) {
    return {clickState: state.clickState};
}

function mapActionToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}
export default connect(mapStateToProps, mapActionToProps)(CountButton);
