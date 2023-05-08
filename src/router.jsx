import { createBrowserRouter } from "react-router-dom";
import Home from './Components/Home'
import CreateIcon from "./Components/Dashbord/CreateIcon";
import AddNewCoffee from "./Components/Dashbord/AddNewCoffee";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    // dashbord 
    {
        path:'/createicons',
        element:<CreateIcon></CreateIcon>
    },
    {
        path:'/createnewcoffee',
        element:<AddNewCoffee></AddNewCoffee>
    }
])

export default router