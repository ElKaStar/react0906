import React from 'react'

class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode:false,
            status: this.props.status
        }

    }


    onDoubleClickHandler = () => {

        this.setState({
            editMode: true
        })
    }

    onBlurClickHandler() {

        this.setState({
            editMode: false
        })
        console.log(this.state.status)
        debugger
        this.props.updateStatus(this.state.status)

    }

    onChangeHandler(event) {
        console.log(event);
        this.setState({
                status: event.target.value
            })
    }

    render() {

        return(
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.onDoubleClickHandler}>{`Status: ${this.state.status}`}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onChange={this.onChangeHandler.bind(this)} onBlur={this.onBlurClickHandler.bind(this)} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus