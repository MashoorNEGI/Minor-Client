import { useState } from 'react'
import { Data } from './data'
import * as XLSX from 'xlsx'
import axios from "axios";
import { Button } from "@mui/material";
const Student = () => {
    // on change states
    const [ excelFile, setExcelFile ] = useState(null);
    const [ excelFileError, setExcelFileError ] = useState(null);

    // submit
    const [ excelData, setExcelData ] = useState(null);
    const [ data, setdata ] = useState(
        // Fac_ID: "", Sname: "", Course: "", Enroll_no: "", Attendance: ""
    )
    // it will contain array of objects

    // handle File
    const fileType = [ 'application/vnd.ms-excel' ];
    const handleFile = (e) => {
        let selectedFile = e.target.files[ 0 ];
        if (selectedFile) {
            // console.log(selectedFile.type);
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                }
            }
            else {
                setExcelFileError('Please select only excel file types');
                setExcelFile(null);
            }
        }
        else {
            console.log('plz select your file');
        }
    }

    // submit function
    const submit = () => {
        try {
            console.log(data);
            const { Fac_ID, Sname, Course, Enroll_no, Attendance } = data
            for (let index = 0; index < data.length; index++) {
                const res =  axios.post('http://localhost:4000/addstudent', {
                    Fac_ID: data[index].Fac_ID, Sname: data[index].Name, Course: data[index].Course, Enroll_no: data[index].Enroll_no, Attendance: data[index].Attendance
                })
            }
        } catch (error) {   
            console.log(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault('/');
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[ 0 ];
            const worksheet = workbook.Sheets[ worksheetName ];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
            setdata(data)
        }
        else {
            setExcelData(null);
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className='form'>
                    <form className='form-group' autoComplete="off"
                        onSubmit={handleSubmit}>
                        <label><h5>Upload Excel file</h5></label>
                        <br></br>
                        <input type='file' className='form-control'
                            onChange={handleFile} required></input>
                        {excelFileError && <div className='text-danger'
                            style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
                        <button type='submit' className='btn btn-success'
                            style={{ marginTop: 5 + 'px' }}>Submit</button>
                    </form>
                </div>
                <hr></hr>
                <h5>View Excel file</h5>
                {excelData === null && <>No file selected</>}
                <div className='viewer mx-auto'>
                    {excelData !== null && (<>
                        <div className='table-responsive'>
                            <table className='table table-hover border-black' style={{ color: "white", fontWeight: "100" }}>
                                <thead>
                                    <tr>
                                        <th scope='col'>Enroll_no</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Course</th>
                                        <th scope='col'>Attendance</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <Data excelData={excelData} />
                                </tbody>
                            </table>
                        </div>
                        <Button onClick={submit} variant='contained'>UPLOAD</Button></>
                    )}
                </div>
            </div>
        </>
    );
}

export default Student;