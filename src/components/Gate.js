
const Gate = ({ IsOpen, speed }) => {
    return (
        <>
            <h1>  condition no 1 :  {IsOpen ? "Gate is open" : "Gate is close"} </h1>
            <h1> condition no 2 : {speed > 80 ? "danger!" : "probably fine"}</h1>

        </>
    )



}




export default Gate;