import axios from "axios";
import { useEffect } from "react";

const Record = async () => {
    const res = await axios.get('users/Admin')
    console.log(res.data);
    useEffect(() => {
        Record()
    }, [0])
    return (
        <>
            {
                // res.data
            }
        </>
    );
}

export default Record;