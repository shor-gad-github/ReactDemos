import React from 'react'
const AddEditUser = (props) => {

    const { adduser } = props;

    const handleUserSubmit = (e) => {
        adduser(e);
    }
    return (
        <>
            <br></br>
            <br></br>
            <div className="add-user-form">
                <form onSubmit={(e) => handleUserSubmit(e)}>
                    <div className="form-group">
                        <input placeholder="Enter Name" className="form-control" name="name" />
                        <br></br>
                        <input placeholder="Enter Job" className="form-control" name="job" />
                        <button className='btn btn-primary' type="submit" name="adduser">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default AddEditUser;