import {useState, useEffect, useContext} from 'react';
import { TableFilterContext } from "./../components/DisplayData";

export const useTableSorterPagination = () => {

    const [{ url, pagination }, setFilter] = useContext(
        TableFilterContext
    );

    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(pagination.currentPage);
    const [recordPerPage] = useState(pagination.recordPerPage);

    useEffect(() => {
        let indexOfFirstRecord = ( ( currentPage - 1 ) * recordPerPage );
        let indexOfLastRecord = currentPage * recordPerPage;
        const data1 = pagination.data.slice(indexOfFirstRecord, indexOfLastRecord);
        setTableData(data1);
    }, [currentPage, recordPerPage, pagination]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setFilter(
            {
                url,
                pagination: {
                    ...pagination,
                    currentPage: pageNumber,
                }
            }
        )
    }

    let timeout = null;
    const onSearchHandler = (value) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {

            let result = new RegExp(value, 'ig');

            fetch(url)
            .then((data) => {
                return data.json();
            })
            .then((response) => {
                let key = pagination.searchFilter;
                const search = response.filter(item => {
                    for(let i = 0; i < key.length; i++){
                        /* if(item[key[i]].toLowerCase().includes(value.toLowerCase()) + (key.length < (key.length - 1)) ? ' || ' : '')
                            return true; */
                        if(result.test(item[key[i]]))
                            return true;
                    }
                });

                setTableData(search);
                setCurrentPage(1);

                setFilter(
                    {
                        url,
                        pagination: {
                            ...pagination,
                            currentPage: 1,
                            data: search,
                            totalRecordsCount: search.length,
                        }
                    }
                )
            });
        }, 700);
    };
    
    const onClickHandler = (e) => {
        let column = e.target.dataset.column;
        let order = e.target.dataset.order;
    
        let newTableData = [...tableData];
    
        if(order === 'desc'){
            e.target.setAttribute('data-order', 'asc');
            e.target.setAttribute('class', 'headerSortDown');
            newTableData.sort((a,b) => a[column] > b[column] ? 1 : -1);
        }
        else {
            e.target.setAttribute('data-order', 'desc');
            e.target.setAttribute('class', 'headerSortUp');
            newTableData.sort((a,b) => a[column] < b[column] ? 1 : -1);
        }
    
        setTableData(newTableData);
    };

    let data = (tableData.length > 0) ? tableData : pagination.data;

    return {
        tableData: data,
        onClickHandler,
        onSearchHandler,
        paginate,
    }
}