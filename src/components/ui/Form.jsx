import "./ui.css"

const Form = (props) => {

    const { data } = props;
    return (
        <div className='form-container'>
            <div>
                {Object.entries(data).map((obj, idx) => (
                    <div id={idx} className='form-row'>
                        <div className='form-header'>
                            {obj[0]}
                        </div>
                        <div className='form-content'>
                            {obj[1]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form;