import React from 'react'
import { useState } from 'react'


function Form(){
  const [name, setName] = useState("")
  const [peperoni, setPeperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [extrathicc, setExtraThicc] = useState(false)

  
  
  return (
    <div>
      <h1> Pizza Order</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <br></br>
        <label>
          <input type="checkbox"
            checked={sausage}
            onChange={() => setSausage(!sausage)}
          />
          Sausage
        </label>
        <label>
          <input type="checkbox"
            checked={peperoni}
            onChange={() => setPeperoni(!peperoni)}
          />
          Peperoni
        </label>
        <label>
          <input type="checkbox"
            checked={peppers}
            onChange={() => setPeppers(!peppers)}
          />
          peppers
        </label>
        <label>
          <input type="checkbox"
            checked={extrathicc}
            onChange={() => setExtraThicc(!extrathicc)}
          />
          EXTRA THICC
        </label>
        <br></br>
        <input type="submit" value="Submit" />
        
      </form>

      <h2>{name}</h2>
      <h3>
      {sausage && <div>Sausage</div>}
      {peperoni && <div>Pepperoni</div>}
      {peppers && <div>Peppers</div>}
      {extrathicc && <div>ExtraThicc</div>}

      </h3>
    </div>
  );
}

export default Form