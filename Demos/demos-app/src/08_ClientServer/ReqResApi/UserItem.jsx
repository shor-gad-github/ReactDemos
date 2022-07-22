import React from 'react'
const UserItem = (props) => {
    const { id, email, first_name, last_name, avatar } = props.data;
    return (
        <>
            <div class="card border-light mb-3" style={{ maxWidth: "20rem" }}>
                <div className='card-body'>
                    <img className="img-thumbnail" src={avatar} alt={first_name + last_name} />
                    <div className="uname"><b>{first_name + last_name}</b></div>
                    <div className="uname">{email}</div>
                </div>
                <div className="card-footer">
                    <button className="pagenum" onClick={(e) => props.edit(e, id)}>Edit</button>
                    <button className="pagenum" onClick={(e) => props.delete(e, id)}>Delete</button>
                </div>
            </div>
        </>
    )
}
export default UserItem;