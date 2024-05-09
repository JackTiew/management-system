import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { showError } from "../../store/general/ErrorSlice";
import Form from "../../components/ui/Form";
import CommentSection from "./CommentSection";

import Post from "../../services/Post";
import User from "../../services/User";
import Comment from "../../services/Comment";
import { hideLoading, showLoading } from "../../store/general/LoadingSlice";

const PostDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const [ item, setItem ] = useState({});
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        const doWork = async() => {
            if (id) {
                await loadItem(id);
            }
        }

        doWork();
    }, []);

    const loadItem = async(id) => {
        dispatch(showLoading());
        try {
            let data = await new Post().get(id);
            let user = await new User().get(data.userId);
            let comment = await new Comment().getByPostId(id);

            data.author = user.name;
            delete data.id;
            delete data.userId;

            setItem(data);
            setComments(comment);
        } catch(error) {
            dispatch(showError(error));
        } finally {
            dispatch(hideLoading());
        }
    }

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Post Details</h1>
            <Form data={item} />
            <CommentSection data={comments}/>
        </div>
    )
}

export default PostDetail;