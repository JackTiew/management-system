import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { showError } from "../../store/general/ErrorSlice";
import Form from "../../components/ui/Form";

import User from "../../services/User";
import { hideLoading, showLoading } from "../../store/general/LoadingSlice";

const UserDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const [ item, setItem ] = useState({});

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
            let data = await new User().get(id);

            delete data.id;
            data.address = `${data.address.suite} ${data.address.street}, ${data.address.zipcode}, ${data.address.city}`;
            data.company = data.company.name;

            setItem(data);
        } catch(error) {
            dispatch(showError(error));
        } finally {
            dispatch(hideLoading());
        }
    }

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>User Details</h1>
            <Form data={item} />
        </div>
    )
}

export default UserDetail;