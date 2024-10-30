import { useState, useEffect } from "react";


const Form2=({formData, handleChange })=>{
    // const [userId, setUserId] = useState();

    return(
        <>
        <h1>Step 2</h1>
        <form >
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        </form>
        </>
    )
}
export default Form2;