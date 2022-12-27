import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";

const Record = () => {
    const [ data, setdata ] = useState([])
    const read = async () => {
        const res = await axios.get('users/Admin')
        setdata(res.data)
        // console.log(res.data[ 0 ]);
    }
    useEffect(() => {
        read()
    }, [])
    return (
        <>
            <div className="tables">
                <table className="table table-striped  table-hover">
                    <thead>
                        <tr>
                            <th>Fac_ID</th>
                            <th>Fac_Name</th>
                            <th>Phone_no</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data.map((data, index) =>
                                <tr key={index}>
                                    <td name={data.Fac_ID} value={data.Fac_ID}>{data.Fac_ID.slice(0, 3)}</td>
                                    <td>{data.Fac_Name}</td>
                                    <td>{data.Phone_no}</td>
                                    <td>{data.Email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Record;