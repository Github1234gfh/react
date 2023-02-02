import { Get_data } from "../Components/Get_data"

export const Home = ({autnteficate, orders, ch}) => {
    return (
        <>
            <Get_data autnteficate={autnteficate} orders={orders} ch={ch}/>
        </>
    )
}