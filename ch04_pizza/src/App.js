// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

//피자 
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;




//1. 요소에 애니메이션 적용  // 글씨가 투명했다가 나타남 
// import React from "react";
// import { motion } from "framer-motion";
// function MyComponent() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       안녕하세요!
//     </motion.div>
//   );
// }
// function App() {
//   return (
//     <div>
//       <MyComponent />
//     </div>
//   );
// }
// export default App;








//2. Hover 시 애니메이션   // 클릭하거나 마우스를 올리면 hover 작동하여 애니메이션 효과
// import React from "react";
// import { motion } from "framer-motion";
// function App() {
//   return (
//     <div>
//       <motion.button
//         whileHover={{ scale: 1.2 }} // 마우스 오버 시 크기 확대
//         whileTap={{ scale: 0.9 }} // 클릭 시 크기 축소
//         style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           cursor: "pointer",
//           border: "none",
//           backgroundColor: "#007BFF",
//           color: "white",
//           borderRadius: "5px",
//         }}
//       >
//         클릭해보세요
//       </motion.button>
//     </div>
//   );
// }
// export default App;



 //3. 드래그 가능 요소
// import React from "react";
// import { motion } from "framer-motion";
// function App() {
//   return (
//       <motion.div
//   drag
//   dragConstraints={{ left: 0, right: 300, top: 0, bottom: 200 }}
//   style={{ width: 100, height: 100, background: 'skyblue' }}
// >
//   드래그 가능
// </motion.div>
//   );
// }
// export default App;






//4. 컴포넌트가 사라질 때 애니메이션
// import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// function ToggleBox() {
//   const [show, setShow] = useState(true);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       <AnimatePresence>
//         {show && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.5 }}
//           >
//             등장 & 퇴장 애니메이션
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
// function App() {
//   return (
//     <div>
//       <h1>프레임 애니메이션 예시</h1>
//       <ToggleBox />
//     </div>
//   );
// }
// export default App;









//화면 갱신 확인 하기 피자 예제.
import { BrowserRouter , Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";


function AnimatedRoutes() {
  const location = useLocation(); // 현재 경로 감지


  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}
export default App;