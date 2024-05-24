
function Input({type, placeholder, name, id, handleInput}:{
    type:string,
    placeholder:string,
    name:string,
    id:string,
    handleInput: (e:React.ChangeEvent<HTMLInputElement>)=>void
}) {
  return (
    <input 
        type={type} 
        className="text-white w-full max-w-[700px] p-[5px] rounded-[10px] bg-[#00000080] border border-white font-jura font-[400] text-[20px]" 
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={handleInput}
    />
  )
}

export default Input
