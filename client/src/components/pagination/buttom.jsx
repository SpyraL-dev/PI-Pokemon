const Button= function({value,mod,id}){
    const onChange= function(){
    mod()
    }


    return<button id={id} onClick={e=>onChange()}>
    {value}
    </button>
}
export default Button