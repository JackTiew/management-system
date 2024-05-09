import Pagination from "./Pagination";
import "./ui.css"

const Table = (props) => {

    const { columns, datas, onView } = props;
    const { totalPage, currentPage, onPrevious, onNext } = props;

    return (
        <div className={'table-container'}>
            <table style={{ borderSpacing: 0 }}>
                <thead>
                    <tr>
                        {
                            columns.map((column, idx) => (
                                <th id={idx}>
                                    {column.title}
                                </th>
                            ))
                        }
                        <th>Actions</th>
                    </tr>
                </thead>
                {
                    datas &&
                        <tbody>
                            {
                                datas.map((data, idx) => (
                                    <tr id={idx}>
                                        {columns.map((column, idy) => (
                                            <td id={column.field || idy}>{data[column.field]}</td>
                                        ))}
                                        <td><button onClick={() => onView && onView(data.id)}>View</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                }
            </table>
            <Pagination totalPage={totalPage} currentPage={currentPage} onPrevious={onPrevious} onNext={onNext} />
        </div>
    )
}

export default Table;