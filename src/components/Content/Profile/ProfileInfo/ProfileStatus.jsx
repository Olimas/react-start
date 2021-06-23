import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div className={s.profileStatus}>

        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
        </div>
        }

        {this.state.editMode &&
        <div>
          <input value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}></input>
        </div>
        }

      </div>
    )
  }
};

export default ProfileStatus;

