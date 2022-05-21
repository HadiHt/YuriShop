import React from "react";
import { useState, createContext } from "react";

export const userContext = createContext('');

export const UserProvider = (props) => {

    const [user,setUser] =useState('');

    return(
        <userContext.Provider value={{user,setUser}}>
            {props.children}
        </userContext.Provider>
    );
}

//              get all orders and sort them by date
// =============================================================
// const [Data, setDataa] = useState([]);
//     useEffect(() => {
//         Axios.get('http://localhost:5000/api/Orders')
//         .then(res => {
//             console.log(res.data);
//             setDataa(res.data);
//             Data.sort(function (a, b) {
//                 var bb = b.dateOfPurchase.split('-');
//                 var aa = a.dateOfPurchase.split('-');
//                 return bb[2] - aa[2] || bb[1] - aa[1] || bb[0] - aa[0]
//             });
//             console.log(Data);
//         }).catch(err => console.log(err))
//     }, [])
// =============================================================