import ButtonComponent from "../ButtonComponent"

const ButtonWarpper = (props) => {
    return <div className="w-full h-200px relative">
        <img className="absolute w-150vw top-[-100px]" style={{maxWidth:'200%'}} src={props.src} alt="" />
        <ButtonComponent />
        </div>
}

export default ButtonWarpper