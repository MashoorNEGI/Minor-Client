import React, { useState } from 'react';
import axios from 'axios'
const Course = () => {
    const [ data, setdata ] = useState({
        Fac_ID: "", courses: ""
    });
    let username, values;
    const handleit = (e) => {
        username = e.target.name
        values = e.target.value
        setdata({ ...data, [ username ]: values })

    }
    const postdata = (e) => {
        e.preventDefault();
        try {
            const { Fac_ID, courses } = data
            const res = axios.post('http://localhost:4000/addcourses', {
                Fac_ID,
                courses
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="form-container" onSubmit={postdata}>
            <form>
                <div className="form-group" style={{ padding: '20px 0' }}>
                    <label htmlFor="exampleInputEmail1">Faculty ID</label>
                    <input type="text" className="form-control" name="Fac_ID" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.Fac_ID}
                        onChange={handleit} placeholder="Enter ID" required />
                </div>
                <div className="form-group" style={{ padding: '20px 0' }}>
                    <label htmlFor="exampleInputPassword1">course</label>
                    <input type="text" className="form-control" name='courses' value={data.courses}
                        onChange={handleit} id="exampleInputPassword1" placeholder="Enter course" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
};

export default Course;
