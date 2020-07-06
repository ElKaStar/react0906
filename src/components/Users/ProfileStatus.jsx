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
    }

    render() {

        return(
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.onDoubleClickHandler}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.onBlurClickHandler.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus