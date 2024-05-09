import './Post.css'
import { Comment } from 'react-loader-spinner';

const CommentSection = (props) => {
    
    const { data } = props;

    return (
        <div className='comment-container'>
            <div>
                <div className='comment-header'>
                    <h2>Comments</h2>
                    <Comment
                        visible={true}
                        height="50"
                        width="50"
                        ariaLabel="comment-loading"
                        wrapperStyle={{}}
                        wrapperClass="comment-wrapper"
                        color="#fff"
                        backgroundColor="#F4442E"
                    />
                </div>
                <div>
                    {
                        data && data.map((comment, idx) => (
                            <div id={idx} className='comment-body'>
                                <div className='comment-by'>
                                    {comment.email}
                                </div>
                                <div className='comment-content'>
                                    {comment.body}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CommentSection;