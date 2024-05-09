import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { showError } from "../../store/general/ErrorSlice";
import Pagination from "../../components/ui/Pagination";
import Table from "../../components/ui/Table";
import Post from "../../services/Post";
import { hideLoading, showLoading } from "../../store/general/LoadingSlice";

const PAGE_SIZE = 10;

const PostList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ pageNumber, setPageNumber ] = useState(1);
    const [ pageCount, setPageCount ] = useState(0);

    const [ items, setItems ] = useState([]);
    const [ columns, setColumns ] = useState([
        {title: 'Title', field: 'title'},
        {title: 'Body', field: 'body'},
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
            let dataCount = await new Post().getList();
            setPageCount(dataCount.length / PAGE_SIZE);
    
            let data = await new Post().getList(pageNumber, PAGE_SIZE);
            setItems(data);
        } catch (error) {
            dispatch(showError(error));
        } finally {
            dispatch(hideLoading());
        }
    }

    const onView = (id) => {
        navigate(`/posts/${id}`);
    };

    const onPreviousPage = () => {
        setPageNumber(prev => prev - 1);
    };

    const onNextPage = () => {
        setPageNumber(prev => prev + 1);
    };

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Posts List</h1>
            <Table
                columns={columns} datas={items} onView={onView}
                totalPage={pageCount} currentPage={pageNumber} onPrevious={onPreviousPage} onNext={onNextPage}/>
        </div>
    )
}

export default PostList;