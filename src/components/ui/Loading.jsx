import { DNA } from "react-loader-spinner";

const Loading = (props) => {

    const { isShow } = props;

    return (
        <>
            {
                isShow &&
                    <div className="loading-wrapper">
                        <div className="loading-container">
                        <DNA
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                        </div>
                    </div>
            }
        </>
    )
}

export default Loading;