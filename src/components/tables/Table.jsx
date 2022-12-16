import axios from 'axios'
import { useEffect, useState, useReducer } from 'react'
import { Button } from '@mui/material'
import './table.scss'
function Table() {
    const [data, setdata] = useState('')
    const [reducervalue, forceUpdate] = useReducer(x => x + 1, 0);
    const [status, setstatus] = useState('')
    const Fac_ID = JSON.parse(localStorage.getItem("token")).userlogin.Fac_ID
    const courses = localStorage.getItem("course")

    const getstudent = async () => {
        try {
            const res = await axios.post('/getstudent', {
                Fac_ID,
                courses,
            })
            const student = res.data
            setdata(Array.from(student.found))
        } catch (err) {
            console.log(err);
        }

    }
    // ------------- status update system------------
    const [Enroll_no, setUser] = useState('')



    const attend = async () => {
        const res = await axios.post('/update', {
            Enroll_no,
            Attendance: status
        })


        if (res.status === 200) {
            // alert("success")
        }
        else {
        }
    }

    useEffect(() => {
        getstudent()
        attend()
    }, [reducervalue])

    return (<>
        {
            data.length > 0 ?
                <div className='tables'>
                    <table className="table table-striped  table-hover">
                        <thead>
                            <tr>
                                <th>Enroll_no</th>
                                <th>Course</th>
                                <th>SName</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((data, index) =>
                                    <tr key={index}>
                                        <td name={data.Enroll_no} value={data.Enroll_no}>{data.Enroll_no.slice(0, 3)}</td>
                                        <td>{data.Course}</td>
                                        <td>{data.Sname}</td>
                                        <td>
                                            <div className='att-status'>
                                                {
                                                    data.Attendance !== 'Stable' ? <p>{data.Attendance}</p> :
                                                        <>
                                                            <Button variant="outlined" onClick={() => {
                                                                setstatus('Present')
                                                                setUser(data.Enroll_no)
                                                                forceUpdate()
                                                            }}>Present</Button>
                                                            <Button variant="outlined" onClick={() => {
                                                                setstatus('Absent')
                                                                setUser(data.Enroll_no)
                                                                console.log(Enroll_no);
                                                                forceUpdate()
                                                            }} color='error'>Absent</Button>
                                                        </>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <Button className='table-submit' variant="contained" href='/'>Submit</Button>
                </div>
                : <main className="flex-shrink-0">
                    <div className="mx-auto" style={{ width: '40%' }}>
                        <h1 className="mt-5">Data Not Found</h1>
                        <p className="lead">Thank you for using this website but sorry data not found the choosen faculty didn't alloted any course.</p>
                        <p><a href="/Contact">Click here</a>&nbsp;to contact for course allotment</p>
                    </div>
                </main>
        }
    </>);
}

export default Table;