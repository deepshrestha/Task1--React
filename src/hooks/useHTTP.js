import { useEffect, useState } from 'react'

export const useHttp = (props) => {

    const [{url, pagination}, setData] = useState(props);

    useEffect(() => {
        fetch(url)
        .then(data => {
            return data.json();
        })
        .then( data => {
            setData(
                {
                    url,
                    pagination: {
                        ...pagination,
                        data: data,
                        totalRecordsCount: data.length
                    }  
                }
            );
        })
        .catch(err => {
            console.log(err)
        })
     }, []);

    return [
        {
            url,
            pagination
        },
        setData
    ]
}