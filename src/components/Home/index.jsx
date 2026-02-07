import { useState } from "react"
function Home() {
  const [data, setData] = useState([
    { id: crypto.randomUUID(), name: "Eshmat", surname: "Toshmatov" }
  ]);
  const [obj, setObj] = useState({})
  const [newObj, setNewObj] = useState({})
  const GetInputValue = ({ target: { value, name } }) => {
    setObj({ ...obj, id: crypto.randomUUID(), [name]: value })
  }
  const addStudentAction = (e) => {
    e.preventDefault();
    setData([...data, obj])
    setData({})
    setOriginalData(data)
  }

  const deleteStudentAction = (deleteID) => {
    let newArr = data.filter((obj) => obj.id !== deleteID)
    setData(newArr)
    setOriginalData(data)
  }
  const editStudentAction = (editID) => {
    let newArr = data.map((obj) => {
      if (obj.id === editID) {
        setNewObj(obj);
        return ({ ...obj, edit: true })
      }
      return { ...obj, edit: false }
    })
    setData(newArr)

  }
  const cancelStudentAction = () => {
    let newArr = data.map((obj) => ({ ...obj, edit: false }))
    setData(newArr)
  }
  const editSaveInputValue = (editID) => {
    let newArr = data.map((obj) => obj.id === editID ? { ...obj, edit: true } : { ...obj, edit: false })
    setData(newArr)
  }

  const saveStudentAction = (saveID) => {
    let newArr = data.map((Obj) => innerObj.id === saveID ? { ...newObj, id: saveID } : Obj)
    setData(newArr)
  }
  console.log(newObj);

  return (
    <div style={{ pedding: "20px", }}>
      <form>
        <input onChange={GetInputValue} name="name" type="text" value={obj.name || ""} placeholder="Enter your Name..." />
        <input onChange={GetInputValue} name="surname" type="text" value={obj.surname || ""} placeholder="Enter your SurName..." />
        <button onClick={addStudentAction}>Add Student</button>
      </form>
      <br />
      <hr />
      <br />

      <ul style={{ listStyleType: "none" }}>
        {data.map(({ id, name, surname, edit }, i) => {
          return (
            <li key={id} style={{ display: "flex", gap: "20px" }}>
              ID:{i + 1}-Name:{edit ? <input defaultValue={name} onChange={editSaveInputValue} name="surname" /> : name} -Surname:{edit ? <input defaultValue={surname} onChange={editSaveInputValue} name="name" /> : surname} -
              {
                edit ? <>
                  <button onClick={() => saveStudentAction(id)}>save</button>
                  <button onClick={cancelStudentAction}>cancel</button>
                </> : <button onClick={() => editStudentAction}> Edit</button>

              }

              <button onClick={() => deleteStudentAction(id)}>Delete</button>
            </li>
          )
        })}

      </ul>
    </div>
  )
}

export default Home