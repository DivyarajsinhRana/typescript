import { type } from 'os'
import React from 'react'
 type statusType = {
     status : "loading" | "success" | "error"
 }

const Status = (props : statusType) => {
    let  message;
    switch (props.status) {
        case "loading":
            message = "loading data from api";
            break;
        case "success" :
            message = "data fetched successfully";
            break;
        case "error" :
            message = "data not found"
            break;
        default :
        message = "request not sent yet ";
        break;
    }
    return (
        <div>
            <h1> status : {message}</h1>
        </div>
    )
}

export default Status
