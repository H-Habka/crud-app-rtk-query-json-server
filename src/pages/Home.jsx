import {useEffect,useState} from "react";
import ListItems from "../components/ListItems";
import { useNavigate } from "react-router-dom";
import {useContactsQuery} from '../services/ContactsApi'
import {toast} from 'react-hot-toast'

const Home = () => {
    const [tabelData, setTabelData] = useState([])

    const {data, isLoading,error } = useContactsQuery()

    useEffect(() => {
        if(error){
            toast.error("someThing went Wrong")
        }
    },[error])

    const navigate = useNavigate();

    if(isLoading)return <p className="text-3xl font-bold text-center">Loading...</p>
    return (
        <div className="flex items-center gap-10 pt-10 flex-col ">
            <button className="py-2 px-4 bg-blue-700 border rounded-xl font-bold text-gray-200 hover:opacity-70" onClick={() => navigate('/create')}>
                Create New One
            </button>
            <ListItems data={data}/>
        </div>
    );
};

export default Home;
