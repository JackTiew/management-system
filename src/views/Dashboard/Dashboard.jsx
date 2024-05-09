import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { hideLoading, showLoading } from "../../store/general/LoadingSlice";
import { showError } from "../../store/general/ErrorSlice";
import BarChart from "../../components/ui/charts/BarChart";
import DoughnutChart from "../../components/ui/charts/DoughnutChart";
import LineChart from "../../components/ui/charts/LineChart";

import Post from "../../services/Post";
import User from "../../services/User";
import Comment from "../../services/Comment";
import Todo from "../../services/Todo";
import './Dashboard.css';


const Dashboard = () => {

    const dispatch = useDispatch();
    const [ averagePostByUser, setAveragePostByUser ] = useState([]);
    const [ averageCommentByPost, setAverageCommentByPost ] = useState([]);

    useEffect(() => {
        const doWork = async() => {
                await loadData();
        }

        doWork();
    }, []);

    const loadData = async() => {
        dispatch(showLoading());
        try {
            const prom1 = new Post().getList();
            const prom2 = new User().getList();
            const prom3 = new Comment().getList();
            const prom4 = new Todo().getList();
    
            let results = await Promise.all([ prom1, prom2, prom3, prom4 ]);
            let post = results[0];
            let user = results[1];
            let comment = results[2];
    
            getAveragePostByUser(post, user);
            getAverageCommentByPost(comment, post);
        } catch (error) {
            dispatch(showError(error));
        } finally {
            dispatch(hideLoading());
        }
    };

    const getAveragePostByUser = (posts, users) => {
        let grouppedPosts = Object.groupBy(posts, (post => post.userId));

        let averagePostByUser = [];
        for (const property in grouppedPosts) {
            averagePostByUser.push(
                {
                    userId: property,
                    userName: users.find(p => p.id.toString() === property).name,
                    postCount: grouppedPosts[property].length
                }
            )
        }

        setAveragePostByUser(averagePostByUser);
        return averagePostByUser;
    };

    const getAverageCommentByPost = (comments, posts) => {
        let grouppedComments = Object.groupBy(comments, (comment => comment.postId));

        let averageCommentByPost = [];
        for (const property in grouppedComments) {
            averageCommentByPost.push(
                {
                    postId: property,
                    postTitle: posts.find(p => p.id.toString() === property).title.slice(0, 15) + '...',
                    commentCount: grouppedComments[property].length
                }
            )
        }

        setAverageCommentByPost(averageCommentByPost);
        return averageCommentByPost;
    };

    return (
        <div className='chart-wrapper'>
            <DoughnutChart
                title={'Top Post'}
                legend={'Post Count'}
                data={averagePostByUser.map(post => ({ label: post.userName, value: post.postCount }))}
            />
            <BarChart
                title={'Top Comments'}
                legend={'Comment Count'}
                data={averageCommentByPost.map(comment => ({ label: comment.postTitle, value: comment.commentCount })).slice(0, 10)}
            />
            {/* <DoughnutChart />
            <LineChart />
            <BarChart />
            <BarChart /> */}
        </div>
    )
}

export default Dashboard;