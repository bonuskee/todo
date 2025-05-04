import React from 'react'
import { Button } from './ui/button'

const Filter = () => {
  return (
    <div className="gap-4 flex">
        
    <div>
      <Button onClick={()=>handleFilterChange("all")}
        className={`${filter=="all" ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`}
        >All</Button>
    </div>
<div>
  <Button onClick={()=>handleFilterChange("completed")}
      className={`${filter=="completed" ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`}
    
    >completed</Button>
</div>
<div>
  <Button onClick={()=>handleFilterChange("uncompleted")}
      className={`${filter=="uncompleted" ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`}
    
    >uncompleted</Button>
</div>
  </div>
  )
}

export default Filter