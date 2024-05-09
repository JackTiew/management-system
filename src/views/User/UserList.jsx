import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { showError } from "../../store/general/ErrorSlice";
import Table from "../../components/ui/Table";
import Pagination from "../../components/ui/Pagination";

import User from "../../services/User";
import { hideLoading, showLoading } from "../../store/general/LoadingSlice";

const PAGE_SIZE = 5;

const UserList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ pageNumber, setPageNumber ] = useState(1);
    const [ pageCount, setPageCount ] = useState(0);

    const [ items, setItems ] = useState([]);
    const [ columns, setColumns ] = useState([
        {title: 'Name', field: 'name'},
        {title: 'Email', field: 'email'},
        {title: 'Phone', field: 'phone'},
        {title: 'Website', field: 'website'},
    ]);

    useEffect(() => {
        const doWork = async() => {
            await loadItems(pageNumber);
        }

        doWork();
    }, []);

    useEffect(() => {
        const refresh = async() => {
            await loadItems(pageNumber);
        }

        refresh();
    }, [ pageNumber ] );

    const loadItems = async(pageNumber) => {
        dispatch(showLoading());
        try {
            let dataCount = await new User().getList();
            setPageCount(dataCount.length / PAGE_SIZE);
    
            let data = await new User().getList(pageNumber, PAGE_SIZE);
            setItems(data);
        } catch (error) {
            dispatch(showError(error));
        } finally {
            dispatch(hideLoading());
        }
    }

    const onView = (id) => {
        navigate(`/users/${id}`);
    };

    const onPreviousPage = () => {
        setPageNumber(prev => prev - 1);
    };

    const onNextPage = () => {
        setPageNumber(prev => prev + 1);
    };

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>User List</h1>
            <Table
                columns={columns} datas={items} onView={onView}
                totalPage={pageCount} currentPage={pageNumber} onPrevious={onPreviousPage} onNext={onNextPage}/>
        </div>
    )
}

export default UserList;