import React from 'react'

type ListPropType<T> = {
    items : T[],
    handleClick : (value : T) => void
}

// const List =<T extends {}> ({items,handleClick} : ListPropType<T>) => {
const List =<T extends {id : number,first : string,last :string}    > ({items,handleClick} : ListPropType<T>) => {
    return (
        <div>
            <h1>List Items</h1>
            <div>
                {
                    items.map((item,index)=>{
                        return (<li key={item.id} onClick={() =>handleClick(item)}>{item.first} {item.last}</li>)
                    })
                }
            </div>
        </div>
    )
}

export default List
