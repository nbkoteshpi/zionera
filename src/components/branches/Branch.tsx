import axios from "axios";
import React, { useEffect, useState } from "react";


const BranchTest = () => {

const [data, setData] = useState([{brn_Id: 0, brn_Name: ""}]); // State to store the fetched data
const [loading, setLoading] = useState(true); // Loading state
const [error, setError] = useState(null); // Error state
useEffect(()=>{
    const fetchData = async () => {
        try {
            var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };
          const response = (await axios.get('http://localhost:5000/api/branches', config)); // Example API
          setData(response.data); // Update state with fetched data
          setLoading(false); // Turn off loading
        } catch (err) {
          setError(err.message); // Set error state if the request fails
          setLoading(false);
        }
      };
  
      fetchData(); // Call the fetch function
}
)

return(
    data.map((branchData)=>{
        <h1>{branchData?.brn_Name} </h1>
    })
)
}

export default BranchTest;