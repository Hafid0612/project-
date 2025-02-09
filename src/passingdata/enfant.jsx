export default function Enfant({ counter,sendDataToParent }) {
    function sendData(){
        sendDataToParent("hi from child")
    }
    return (
        <div style={{backgroundColor:"red",width:"300px",height:"300px"}}>
            child component
            counter: {counter}
            <button onClick={sendData}>click to send data</button>
        </div>
    )
}
