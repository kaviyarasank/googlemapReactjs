// import logo from './logo.svg';
// import './App.scss';
import "./App.css";

// import Table from './Components/TableComponents';
import { useEffect, useState } from "react";
import Social from "./Components/Socila";
import Slider from "react-slick";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Events from "./Pages/About/Events";

function App(props) {
  //   console.log("kkkkkkkkkkkkkkkkkkkkk",props);
  // const data=[
  //   {
  //     name:"kavi",
  //     dep:"develop",
  //     id:1,
  //     city:"chennai"
  //   },
  //   {
  //     name:"harsh",
  //     dep:"sales",
  //     id:2,
  //     city:"bang"
  //   },
  //   {
  //     name:"bala",
  //     dep:"mobile",
  //     id:3,
  //     city:"chennai"
  //   }
  // ]

  // const data2=[
  //   {
  //     name:"abc",
  //     dep:"develop",
  //     id:1,
  //     city:"chennai"
  //   },
  //   {
  //     name:"efg",
  //     dep:"sales",
  //     id:2,
  //     city:"bang"
  //   },
  //   {
  //     name:"hig",
  //     dep:"mobile",
  //     id:3,
  //     city:"chennai"
  //   }
  // ]

  // const [values,  setValue]= useState(data)
  // const handleClick=()=>{
  //   setValue(data2)
  // }
  // const click=(e)=>{
  //   console.log("values===>",e);
  //   setValue(e);

  // }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  console.log("process.env.REACT_APP_API_URL", process.env);
  // const [locale, setLocale] = useState(i18n.language);
  // i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  // console.log("process.env.REACT_APP_API_URL",process.env.SAMPLE_KEY);

  return (
    <div className="">
      <Header />
      <div className="appMain">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/events" element={<Events />}></Route>
      </Routes>
      </div>
      {/* <Slider {...settings}>
      <div >
        <h3 className='dddddddddddddd'>1</h3>
      </div>
      <div >
        <h3 className='dddddddddddddd'>2</h3>
      </div>
      <div >
        <h3 className='dddddddddddddd'>3</h3>
      </div>
      <div >
        <h3 className='dddddddddddddd'>4</h3>
      </div>
      <div >
        <h3 className='dddddddddddddd'>5</h3>
      </div>
      <div >
        <h3 className='dddddddddddddd'>6</h3>
      </div>
    </Slider> */}
      {/* <Table data={values} click={click}/>
      <button onClick={handleClick}>button</button> */}
      {/* <LocaleContext.Provider value={{locale, setLocale}}> */}
      {/* <Social/> */}
      {/* </LocaleContext.Provider> */}
    </div>
  );
}

export default App;
