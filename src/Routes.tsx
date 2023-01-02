import { HappyNewYear } from "./pages/HappyNewYear"

interface RoutesProps{
    path:string,
    element:JSX.Element
}

export const routes:RoutesProps[] = [
    {
        path:'/',
        element:<HappyNewYear/>
    },
    {
        path:'*',
        element:<HappyNewYear/>
    },
]