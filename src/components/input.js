function Input(props){
    let inputdata="";
    function changeHandler(event){
        inputdata=event.target.value;
    }
    function buttonHandler(){
        console.log(inputdata);
        props.func(inputdata);
    }
    return(
        <div>
            <input type="text"  onChange={changeHandler}></input>
            <button onClick={buttonHandler}>Click me</button>
        </div>
    );
}

export default Input;