    import React, {lazy, Suspense} from "react";
    import ReactDOM from "react-dom";
    import {Header} from "./components/Header";
    import Body from "./components/Body";
    import About from "./components/About";
    import Contact from "./components/Contact";
    import Error from "./components/Error";
    import Owner from "./components/Owner";
    import RestaurentMenu from "./components/RestaurentMenu";
    import Shimmer from "./components/Shimmer";
    import {Cart} from "./components/Cart";
    // import Grocery from "./components/Grocery";
    import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
    import { Provider} from "react-redux";
    import appStore from "./utils/appStore";

    const Grocery = lazy(() => import("./components/Grocery"));

    const AppLayout = () => {
        
            return(
            <Provider store = {appStore}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
            </Provider>
        );
        
    };
    
    const appRouter = createBrowserRouter([
        {
            path: "/",//Default Path
            element: <AppLayout/>,
            children:[
                {
                    path: "/",
                    element: <Body/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/grocery",
                    element: <Suspense fallback={<><Shimmer/><h1>Loading....</h1></>}><Grocery/></Suspense> ,
                },
                {
                    path: "/contact",
                    element: <Contact/>,
                },
                {
                    path: "/owner",
                    element: <Owner/>,
                },
                {
                    path: "/cart",
                    element: <Cart/>,
                },
                {   
                    //:resId is Dynamic
                    path: "/restaurents/:resId",
                    element: <RestaurentMenu/>,
                }
            ],
            errorElement: <Error/>,
        },
    ]);

    const root =  ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(<RouterProvider router={appRouter}/>);