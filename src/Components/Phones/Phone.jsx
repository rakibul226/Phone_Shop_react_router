import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetails from "./PhoneDetails";

const Phone = () => {

    const [phone,setPhone] = useState({});

    //console.log(phone);

    //const params = useParams();
    const {id} = useParams();


    const phones = useLoaderData();

    useEffect(()=>{
        const findPhone = phones ?.find((phone) => phone.id === id)
        setPhone(findPhone);
    },[id,phones]);

    return (
        <div>
            <PhoneDetails phone={phone}></PhoneDetails>
        </div>
    );
};

export default Phone;