import React from 'react'
import Button from './Button'

const list=["All","Game","Songs","Live","Soccer","Comedy","Cricket","React","Indian Pop","Movies","All","Game","Songs","Live","Soccer","Comedy"]
const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
        {
            list.map((bName,index)=>{
                return <Button key={index} name={bName} />
            })
        }
    </div>
  )
}

export default ButtonList