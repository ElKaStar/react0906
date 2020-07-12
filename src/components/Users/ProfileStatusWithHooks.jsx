import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks =(props) => {

let [editMode, setEditMode] = useState(false)
let [status, setStatus] = useState(props.status)

    useEffect(() => {

        setStatus(props.status)
    }, [props.status])
  const  onDoubleClickHandler = () => {
      setEditMode(true)
    }
  const onChangeHandler = (e) => {
    debugger
    setStatus(e.target.value)
    }

   const onBlurClickHandler = () => {
       setEditMode(false)
        props.updateStatus(status)
    }



        return(
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={onDoubleClickHandler}>{`Status: ${props.status}`}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input value={status} autoFocus={true} onChange={onChangeHandler} onBlur={onBlurClickHandler}/>
                </div>
                }
            </div>
        )
    }


export default ProfileStatusWithHooks