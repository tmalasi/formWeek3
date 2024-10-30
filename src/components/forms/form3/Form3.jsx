import { useState, useEffect } from "react";


const Form3=({formData, handleChange })=>{
    // const [userId, setUserId] = useState();

    return(
        <>
        <h1>Step 3</h1>
        <form >
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Company Code:</label>
          <input
            type="text"
            name="companyCode"
            value={formData.companyCode}
            onChange={handleChange}
          />
        </div>
        </form>
        </>
    )
}
export default Form3;