import Introduction from "./components/Introduction"
import Navigation from "./components/Navigation"
import Content from "./components/Content"
import { SetStateAction, useState } from "react"

function App() {
  
  //*Opacity on blur:
  //*Sphere  - 0.1
  //*Blur    - 1
  //*ContentBox - 0.1

  const [visible, setVisible] = useState(false);
  const [window, setWindow] = useState("none");

  return (
    <div className="min-h-screen flex flex-1 max-w-4x1 mx-auto p-7 pt-10 md:p-10 z-20 self-center"> 
      <ul className="grid grid-cols-1 md:grid-cols-5 grid-row-auto md:grid-row-2 gap-10 md:gap-4 w-full"> 
        <li className="md:col-span-2 md:p-14 md:pr-6 h-full">
          <Introduction />
          <Navigation 
            visible={visible}
            window={window}
            changeWindow={(window: SetStateAction<string>) => setWindow(window)} 
            changeVisibility={(visible:boolean) => setVisible(visible)}
            />
        </li>
        <li className="md:col-span-3 md:row-span-2">
          <div className="grid grid-cols-1 w-full h-full">
            <iframe className={ (visible ? "opacity-10" : "opacity-100") + " col-start-1 row-start-1 w-full h-full rounded-3xl z-0 transition-opacity duration-300"} src='https://my.spline.design/interactivespherescopy-01050a95c42696b1927b03101b068643/' frameBorder='0' />
            <Content visible={visible} window={window} />
          </div>
        </li>
        <li className="md:col-span-2 h-full md:p-14 md:pr-6 flex items-end">
          <div className="text-xl text-greyish">
            Connect by <a className="text-whiteish font-bold underline" href="mailto:laridajoshua@gmail.com">Email</a>, <a className="text-whiteish font-bold underline" href="https://www.facebook.com/people/Josh-Larida/100000219791336/">Facebook</a> or <a className="text-whiteish font-bold underline" href="https://github.com/Nif-kun?tab=repositories">Github</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default App


