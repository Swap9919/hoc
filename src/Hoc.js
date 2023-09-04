import React, { useState } from 'react'


const Hoc = (WrappedComp, num) => {
function Hoc(props) {
      const [count, setCount] = useState(0);
      const handleIncrement = () => {
            setCount(count + num)
      }
  return (
    <div>
            <WrappedComp count={count} handleIncrement={handleIncrement} {...props}/>
    </div>
  )
}
      return Hoc;
}
export default Hoc
