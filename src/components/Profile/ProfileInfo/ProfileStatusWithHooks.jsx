import React, {useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode &&
      <span
        onDoubleClick={activateEditMode}
        className={styles.status}>
                        {props.status || "-----"}
                    </span>
      }
      {editMode &&
      <div>
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}/>
      </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;