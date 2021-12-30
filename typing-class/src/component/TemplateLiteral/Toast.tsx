type horizontalposition = 'left' | 'center' | 'right'
type verticalposition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position :Exclude<`${horizontalposition}-${verticalposition}`,"center-center"> | "center"
}


const Toast = ({position} : ToastProps) => {
    return (
        <div>
            position of toast notification is {position}            
        </div>
    )
}

export default Toast
