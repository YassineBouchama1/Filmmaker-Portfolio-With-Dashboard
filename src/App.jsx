import React,{ useState,useEffect } from 'react'

import Home2 from './Home2'

import ScrollToTop from "react-scroll-to-top";

import AddImageAdmin from './admin/PagesAdmin/AddImageAdmin'
import AddVideoAdmin from './admin/PagesAdmin/AddVideoAdmin'
import Dashboard from './admin/PagesAdmin/Dashboard'
import PageNotFound from './PageNotFound'


import "animate.css/animate.min.css";
import BackGroundSlider from './Theme1/Components/BackGroundSlider'
import ScrollIncon from './Theme1/Components/ScrollIncon'

import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom"
import './App.css'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const LazyLogin  =React.lazy(()=>import ('./Admin/Login'))


function App() {
  const count = useSelector(state => state.Red.isAuth)
  const [isAuth, setIsAuth] = useState(count);

  return (
    <div className="App" >

  
    <ScrollToTop smooth 
	top='4000'
    className='icon-to-top'
    svgPath="M249.931,144.833c-4.948-29.482-26.584-35.193-35.98-36.267c-6.672-8.979-16.329-13.892-27.432-13.892
		c-2.663,0-5.164,0.378-7.411,0.794c-6.587-7.586-15.392-11.588-25.698-11.588c-0.209,0-0.797,0-0.797,0V46.715
		c0-16.276-12.223-28.551-28.5-28.551c-16.277,0-28.5,12.274-28.5,28.551v71.639l-0.704-1.012
		c-5.389-8.764-14.075-13.786-23.826-13.787c-10.508-0.001-20.65,5.932-25.823,15.112c-4.94,8.771-4.696,18.985,0.666,28.089
		l62.325,119.351c2.486,4.759,7.364,7.774,12.733,7.774h87.758c7.578,0,13.878-5.984,14.343-13.549l2.039-33.243
		C246.894,193.587,254.089,169.602,249.931,144.833z M213.304,223.771l-2.196,35.825c-0.076,1.25-1.113,2.284-2.365,2.284h-87.758
		c-0.882,0-1.691-0.55-2.1-1.332L56.4,140.928c-7.929-13.086,3.246-25.36,14.659-25.359c5.049,0.001,10.146,2.393,13.653,8.182
		l7.994,12.277c1.653,2.54,4.218,3.676,6.712,3.676c4.107,0,8.194-3.087,8.194-8.077V46.715c0-11.034,8.224-16.551,16.5-16.551
		c8.276,0,16.5,5.517,16.5,16.551v48.273c0,1.346,1.107,2.377,2.363,2.377c0.235,0,0.481-0.037,0.721-0.114
		c2.31-0.744,5.726-1.565,9.55-1.564c6.569,0,14.351,2.422,19.823,11.809c0.462,0.791,1.294,1.262,2.164,1.262
		c0.278,0,0.562-0.049,0.837-0.15c2.2-0.81,6.044-1.932,10.449-1.932c6.133,0,13.355,2.176,18.743,10.4
		c1.285,1.962,3.46,3.15,5.8,3.282c7.438,0.422,23.266,4.01,27.035,26.462c3.618,21.558-2.618,42.797-24.403,75.792
		C213.466,222.956,213.329,223.358,213.304,223.771z"
    />



    <BackGroundSlider/>

<BrowserRouter>







<Routes>

<Route path='/' element={<Home2/>} />
<Route path='/login' element={isAuth ? <AddImageAdmin /> : <LazyLogin/>} />




<Route path='/admin' element={isAuth ? <AddImageAdmin/>: <LazyLogin/>} />

<Route path='/image' element={isAuth ? <AddImageAdmin/>: <LazyLogin/>} />
<Route path='/video' element={isAuth ? <AddVideoAdmin/>: <LazyLogin/>} />
<Route path='/Dashboard' element={isAuth ? <Dashboard/>: <LazyLogin/>} />

<Route path="*" element={<PageNotFound />} />

</Routes>

</BrowserRouter>

    </div>
  )
}

export default App
