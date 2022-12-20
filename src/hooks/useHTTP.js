import { useEffect, useState } from 'react'
import {apiHandler} from './../api/apiHandler'

export const useHttp = (props) => {

    const [data, setData] = useState(props);

    useEffect(() => {
        apiHandler()
        .then( data => {
            setData(data);
        })
        .catch(err => {
            console.log(err)
        })
     }, []);

    return {
        data,
        setData
    }
}