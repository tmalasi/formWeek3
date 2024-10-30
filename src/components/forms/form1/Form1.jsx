
const Form1=({formData, handleChange })=>{
    // const [userId, setUserId] = useState();

    return(
        <>
        <h1>Step 1</h1>
        <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        </form>
        </>
    )
}
export default Form1;