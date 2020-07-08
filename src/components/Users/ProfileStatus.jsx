import React from 'react'

class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode:false,
            status: this.props.status
        }
    }
// componentDidMount() {
//     this.setState({
//         status: this.props.status
//     })
// }

componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    console.log('update!!!')
}

    onDoubleClickHandler = (state) => {

        this.setState({
            editMode: true,
            status: state.status
        })
    }

    onBlurClickHandler() {

        this.setState({
            editMode: false
        })
        console.log(this.state.status)
        this.props.updateStatus(this.state.status)

    }

    onChangeHandler = (e) => {
        console.log(e);
        this.setState({
                status: e.target.value
            })
    }

    render() {

        return(
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.onDoubleClickHandler.bind(this, this.state)}>{`Status: ${this.state.status}`}</span>
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