


export interface input {
    name?: string,
    label:string,
    type: string,
    value?: number | string ,
    className?: string| undefined,
    validationMessage?: string | undefined,
    isInvalid?: boolean | undefined | ((e: React.ChangeEvent<HTMLInputElement>) => boolean)
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    maxLength?: number,
    max?: number,
    size?: number,
    disabled?: boolean
}

export default function Input({name,label,type,disabled,max,size,value,className, onChange,maxLength, isInvalid=false, validationMessage}: input){
    
    const normalStyles=  "border border-gray-300 rounded-lg px-3 py-3 focus:outline-blue-500 mt-2 no-num-scroll disabled:bg-gray-300"
    const invalidStyles= "border border-red-600 rounded-lg px-3 py-3 focus:outline-blue-500 mt-2 no-num-scroll disabled:bg-gray-300"

    return(
        <div className='mb-4 max-w-fit'>
                <label htmlFor={name} className='text-lg text-gray-500 block'>{label}</label>
                <input type={type} name={name} id={name} disabled={disabled}
                    className={isInvalid ? invalidStyles : normalStyles+" "+className}
                    onChange={onChange} value={value} maxLength={maxLength} max={max} size={size} onInvalid={e=>isInvalid=(e.currentTarget.validity.badInput)}/>
                { isInvalid && <i className="fa-solid fa-circle-exclamation relative right-7" style={{color: "#e42121"}}></i>}
                {isInvalid && <p className="text-red-600 text-center">{validationMessage || `Enter a valid ${name}`}</p>}
        </div>
    )
}