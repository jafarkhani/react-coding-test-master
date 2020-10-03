import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Table from './components/Table';

import './App.css';

function App(props){

  const[table, setTable] = useState({});
  const[loading, setLoading] = useState(true);

  const BaseUrl = "https://storage.googleapis.com/replaypoker-dummy-api/tables/";
  
  useEffect(() => {
    const fetchDate = async ()=>{
      let result = await axios(BaseUrl + props.tableID + ".json");
      setTable(result.data);
      setLoading(false);
    }
    fetchDate();
  },[]);

  if(loading)
    return <div>loading ....</div>;

  return (
    <div className="App">
      <Table table={table} />
    </div>
  );
}

export default App;
