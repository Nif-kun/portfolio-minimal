
const Navigation = (props:any) => {
  
  const changeState = (window:String) => {
    if (props.visible && props.window == window) {
      props.changeVisibility(false)
      props.changeWindow("none")
      return
    }
    props.changeVisibility(true)
    props.changeWindow(window)
  }

  return (
    <div className="font-semibold text-2xl md:text-3xl text-whiteish">
      <ul className="grid grid-cols-1 gap-2 w-fit">
        <li className="col-span-1 hover:opacity-70">
          <button onClick={() =>{
            changeState("profile")
          }}>Profile</button>
        </li>
        <li className="col-span-1 hover:opacity-70">
          <button onClick={() =>{
            changeState("projects")
          }}>Projects</button>
        </li>
      </ul>
    </div>
  )
}

export default Navigation