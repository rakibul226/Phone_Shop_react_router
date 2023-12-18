import PhoneCard from "./PhoneCard";


const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div className="py-10 ">
            <h2 className="text-2xl text-center">All category phones</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {
                phones ?.map(phone => <PhoneCard phone={phone} key={phone.id}></PhoneCard>)
            }
           </div>
        </div>
    );
};

export default Phones;