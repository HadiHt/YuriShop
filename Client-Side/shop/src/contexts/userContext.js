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
//                 var bb1 = b.timeCreated.split('T');
//                 var bb = bb1[0].split('-');
//                 var aa1 = a.timeCreated.split('T');
//                 var aa = aa1[0].split('-');
//                 return bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2]
//             });
//             console.log(Data);
//         }).catch(err => console.log(err))
//     }, [])
// =============================================================