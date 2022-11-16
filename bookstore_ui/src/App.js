import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {   field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'bookName',
        headerName: 'Book Name',
        width: 200,
        editable: true,
    },
    {
        field: 'buyerName',
        headerName: 'Buyer Name',
        width: 150,
        editable: true,
    },
];


export default function App() {
    const [data, setData] = useState([]);

    useEffect (() => {
        getBooks();
    }, [])

    const getBooks  = () => {
        axios.get(
            '/books'
        )
        .then ((response) => {
            setData(response.data)
        })

    }
    console.log(data);

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}


// function App() {
//   const [data, setData] = useState([]);
//
//   useEffect (() => {
//       getBooks();
//   }, [])
//
//   const getBooks  = () => {
//       axios.get(
//           '/books'
//       )
//       .then ((response) => {
//         setData(response.data)
//       })
//
//   }
//   console.log(data);
//
//
//   return (
//     <div className="App">
//         {data.map(book => {
//             return(
//                 <table>
//             ]
//                 </table>
//             )
//         })}
//     </div>
//   );
// }
//
// export default App;
