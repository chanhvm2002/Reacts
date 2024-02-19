//import { useState } from 'react'

//import { useState } from "react";
//import Content from "./Content";

// Bài 29
//function App() {
//  const [counter, setCounter] = useState(1)
//   const handleIncrease = () => {
//     setCounter(counter + 1)
//   }
//   return (
//     <div className="App" style={{ padding: 20 }   }>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }
// export default App;

// Bài 30
// const gifts = [
//   'CPU 19',
//   'RAM 32GB RGB',
//   'RGB Keyboard',
// ]

// function App() {
//  const [gift, setGift] = useState()

//  const randomGift = () => {
//    const index = Math.floor(Math.random() * gifts.length)
//    setGift(gifts[index]);
//  }
//   return (
//     <div style={{ padding:32 }}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   );
// }
// export default App;

// Bài 30
// Response from API
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]
// function App() {
//   const [checked, setChecked] = useState()
//   const handleSubmit = () => {
//     // Call API
//     console.log({ id: checked });
//   }
//    return (
//      <div style={{ padding:32 }}>
//        {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type="radio"
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//        ))}
//        <button onClick={handleSubmit}>Register</button>
//      </div>
//    );
//  }
//  export default App;

// Bài 31: todolisst
// function App() {
//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log(storageJobs);
//     return storageJobs
//   })

//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       // Save to local storage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)
//       return newJobs
//     })
//     setJob('')
//   }

//   return (
//     <div style={{ padding: 32 }}>
//       <input
//         value={job}
//         onChange={e => setJob(e.target.value)}
//        />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {console.log(jobs)}
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }  

// Bài 32: Mounted & Unmounted?
// Mounted: thời điểm đưa component vào sử dụng
// Unmounted: thời điểm gỡ component ra
// import { useState } from 'react'
// import Content from './Content'
// function App() {
//     const [show, setShow] = useState(false)
//     return (
//         <div style={{ padding: 20 }}>
//             <button onClick={() => setShow(!show)}>Toggle</button>
//             {show && <Content />}
//         </div>
//     )
// }
// export default App;

// Bài 40: useRef() hook
//import { useRef, useState } from 'react'
// Lưu các giá trị qua một tham chiếu bên ngoài
// function component

// Ứng dụng đếm ngược
// Bấm nút start thì bắt đầu đếm
// Bấm stop dừng
// function App() {
//     const [count, setCount] = useState(60)
//     const handleStart = () => {
//         setInterval(() => {
//             setCount(prevCount => prevCount - 1)
//         }, 1000)
//     }
//     const handleStop = () => {
//     }
//     return (
//         <div style={{ padding: 20}}>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }
// export default App


// Bài 41: React.memo() HOC
// import { useState } from 'react'
// import Content from './Content'
// 1. memo() -> goi la higher order component(HOC)
// memo giúp tránh việc render lại các component không cần thiết

// function App() {
//     const [count, setCount] = useState(0)
//     const [count2, setCount2] = useState(0)

//     const increase = () => {
//         setCount(count + 1)
//     }
//     const increase2 = () => {
//         setCount2(count2 + 1)
//     }
//     return (
//         <div style={{ padding: '10px 32px' }}>
//             <Content count={count} />
//             <h1>{count}</h1>
//             <h1>{count2}</h1>
//             <button onClick={increase}>Click me</button>
//             <button onClick={increase2}>Click me 2</button>

//         </div>
//     )
// }
// export default App

// Bài 42: useCallback() hook
// import { useState, useCallback } from 'react'
// import Content from './Content'
// function App() {
//     const [count, setCount] = useState(0)
//     const handleIncrease = useCallback(() => {
//         setCount(prevCount => prevCount + 1)
//     }, [])
//     return (
//         <div style={{ paddin: '10px 32px' }}>
//             <Content  onIncrease={handleIncrease} />
//             <h1>{count}</h1>
//         </div>
//     )
// }
// export default App


// Bài 43: useMemo() hook
// import { useState, useMemo} from "react";
// 1. memo() -> goi la higher order component(HOC)
// viết ôm component
// tránh việc render lại các component không cần thiết
// 2. useMemo() là 1 hook: viết trong thân func component
// tránh thực hiện lại logic ko cần thiết
// function App() {
//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('')
//     const [products, setProducts] = useState([])

//     const handleSubmit = () => {
//         setProducts([...products, {
//             name,
//             price: +price
//         }])
//     }

//     // Tính tổng
//     const total = useMemo(() => {
//         const result = products.reduce((result, prod) => {
//             console.log('Tính toán lại...')
//             return result + prod.price
//         }, 0)
//         return result
//     }, [products])

//     return (
//         <div style={{ padding: '10px 32px' }}>
//             <input
//                 value={name}
//                 placeholder="Enter name..."
//                 onChange={e => setName(e.target.value)}
//             />
//             <br />
//             <input
//                 value={price}
//                 placeholder="Enter price..."
//                 onChange={e => setPrice(e.target.value)}
//             />
//             <br />
//             <button onClick={handleSubmit}>Add</button>
//             <br />
//             Total: {total}
//             <ul>
//                 {products.map((product, index) => (
//                     <li key={index}>{product.name} - {product.price}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default App

// Bài 44: useReducer() hook
//import { useReducer } from 'react'
// bài nào dùng useState đc thì dùng useReducer đc và ngc lại
// useState sử dụng trong component có State đơn giản là kiểu dữ liệu nguyên thủy: số, chuỗi, boolean
// useReducer sử dụng trong component có State phức tạp: array, object, nhiều tầng

// Bài toán
// ý tưởng giải useState
// 1. Init state: 0 -> giá trị khởi tạo = 0
// 2. Action: Up (state + 1) / Dowm (state - 1) -> hành động

// ý tưởng giải useReducer
// 1. Init state: 0 -> giá trị khởi tạo = 0
// 2. Action: Up (state + 1) / Dowm (state - 1) -> hành động
// 3. Reducer
// 4. Dispatch

// // 1. init state
// const initState = 0
// // 2. Actions
// const UP_ACTION = 'up'
// const Dowm_ACTION = 'down'
// // 3. Reducer
// const reducer = (state, action) => {
//     switch(action) {
//         case UP_ACTION:
//             // initState số thì return số, là gì thì return đó
//             return state + 1
//         case Dowm_ACTION:
//             return state -1
//         default:
//             throw new Error('Invalid action')
//     }
// }

// // 4. Dispatch

// function App() {
//     const [count, dispatch] = useReducer(reducer, initState)
//     return (
//         <div style={{ padding: '0 20px' }}>
//             <h1>{count}</h1>
//             <button
//                 onClick={() => dispatch(DOWN_ACTION)}
//             >
//                 Down
//             </button>
//             <button
//                 onClick={() => dispatch(UP_ACTION)}    
//             >
//                 Up
//             </button>
//         </div>
//     )
// }
// export default App


// Bài 45: Todo App with useReducer() hook
// BT: nhập tên công việc. bấm add. công việc render xuống list. bấm dấu x xóa cv
// khi thêm cv xong thì dọn bỏ chuỗi trong input
// và tự động focus lại input

// import { useReducer, useRef } from 'react'
// // useReducer
// // 1. Init state
// const initState = {
//     job: '', // là ô nhập đó
//     jobs: [] // là list đó
// }
// // 2. Actions
// const SET_JOB = 'set_job'
// const ADD_JOB = 'add_job'
// const DELETE_JOB = 'delete_job'

// const setJob = payload => {
//     return {
//         type: SET_JOB,
//         payload
//     }
// }
// const addJob = payload => {
//     return {
//         type: ADD_JOB,
//         payload
//     }
// }
// const deleteJob = payload => {
//     return {
//         type: DELETE_JOB,
//         payload
//     }
// }

// // 3. Reducer
// const reducer = (state, action) => {
//     console.log('Action: ', action)
//     console.log('Prev state: ', state)
//     let newState
//     switch (action.type) {
//         case SET_JOB:
//             newState = {
//                 ...state,
//                 job: action.payload
//             }
//             break
//         case ADD_JOB:
//             newState = {
//                 ...state,
//                 jobs: [...state.jobs, action.payload]
//             }
//             break
//         case DELETE_JOB:
//             const newJobs = [...state.jobs]
//             newJobs.splice(action.payload, 1)
//             newState = {
//                 ...state,
//                 jobs: newJobs
//             }
//             break
//         default:
//             throw new Error('Invalid action.')
//     }
//     console.log('New state: ', newState)
//     return newState
// }
// // 4. Dispatch



// function App() {
//     const [state, dispatch] = useReducer(reducer, initState)
//     const { job, jobs } = state
//     const inputRef = useRef()

//     const handleSubmit = () => {
//         dispatch(addJob(job))
//         dispatch(setJob('')) // dọn input sau khi add

//         inputRef.current.focus()
//     }

//     return (
//         <div style={{ padding: '0 20px' }}>
//             <h3>Todo</h3>
//             <input
//                 ref={inputRef}
//                 value={job}
//                 placeholder='Enter tode...'
//                 onChange={e => {
//                     dispatch(setJob(e.target.value))
//                 }}
//             />
//             <button onClick={handleSubmit}>Add</button>
//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>
//                         {job}
//                         <span onClick={() => dispatch(deleteJob(index))}>
//                             &times;
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default App

// Bài 46: nằm bên file todo/...
// phân chia code ra file và sửa 1 số thứ
// import TodoApp from './Todo'

// function App() {
//     return <TodoApp />
// }
// export default App

// // Bài 47: React Context & useContext() 
// // các file liê quan: App.js, ThemeContext.js, Content.js, Paragraph.js, App.css, Index.js
// import { useContext } from "react" 
// import { ThemeContext } from "./ThemeContext" 
// import Content from "./Content"
// import './App.css'


// function App() {
//     const context = useContext(ThemeContext)

//     return (
//         <div style={{ padding: 20 }}>
//             <button onClick={context.loggleTheme} >Toggle theme</button>
//             <Content />
//         </div>
//     )
// }
// export default App


// Bài 48: Global State with Context + useReducer
// các file còn lại nằm trong folder: todo

// import { useStore, actions } from "./store"; 

// function App() {
//     const [state, dispatch] = useStore()
//     const { todos, todoInput } = state

//     const handleAdd = () => {
//         dispatch(actions.addTodo(todoInput))
//     }

//     return (
//         <div>
//             <input
//                 value={todoInput}
//                 placeholder="Enter todo..."
//                 onChange={e => {
//                     dispatch(actions.setTodoInput(e.target.value))
//                 }}
//             />
//             <button onClick={handleAdd}>Add</button>
//             {todos.map((todo, index) => (
//                 <li key={index}>{todo}</li>
//             ))}
//         </div>
//     )
// }

// export default App


// Bài 49: useImperativeHandle() hook
// Các file liên quan: Video.js, App.js, folder videos -> video-1.mp4
// Bài toán: trình phát video. 1 video không phát
// có 2 button: 1 nút play phát video, 1 nút bấm dừng

// tại sao dùng useImperativeHandle() hook:
// tại component <Video ref={videoRef}/> đang public ra ngoài cái ref
// nó nguy hiểm, open ra ngoài nhiều methor ko dùng tới
// giống tính đóng gói

// import { useRef } from 'react'
// import Video from './Video'

// function App() {
//     const videoRef = useRef() // Tạo 1 ref mặc định đưa vào object videoRef

//     const handlePlay = () => {
//         videoRef.current.play()
//     }
    
//     const handlePause = () => {
//         videoRef.current.pause()
//     }

//     // Đẩy object videoRef qua cái ref của Video
//     return (
//         <div>
//             <Video ref={videoRef}/> 
//             <button onClick={handlePlay}>Play</button>
//             <button onClick={handlePause}>Pause</button>
//         </div>
//     )
// }

// export default App

// Bài 50: Sử dụng CSS trong dự án ReactJS
// Cách 1: css inline
// function App() {
//     return (
//         <div style={{ padding: '0 32px' }}>
//             <h1>CSS</h1>
//         </div>
//     );
// }

// export default App

// Cách 2: tạo file css nằm trong src
// Mún dùng thì import nó vào
// VD: import '.App.css'
// file App.css
    // .heading {
    //     color: red;
    // }


// BÀi 51: CSS module là gì? Dùng NTN?
// các file liên quan: folder components: gom folder: Heading va Paragraph và GlobalStyles
// CSS module giúp tạo các file css độc lập ko ảnh hưởng đến nhau
// tức là khi có nhiều component, file css đi kèm, có thể đặt trùng class, trung css selector
// ko ảnh hưởng gì đến nhau

// import Heading from './components/Heading'
// import Paragraph from './components/Paragraph'
// import GlobalStyles from './components.GlobalStyle'

// function App() {
//     return (
//    <GlobalStyles> // ôm cả trang
//         <div style={{ padding: '0 32px' }}>
//             <Heading />
//             <Paragraph />
//         </div>
//     </GlobalStyles>
//     )
// }

// export default App


//-------------------------
// Bài 52: Thư viện clsx và classnames?
// các file bao gôm: folder components: folder Button và GlobalStyles
// import Button from './components/Button'
// import GlobalStyles from './components.GlobalStyle'

// function App() {
//     return (
//         <GlobalStyles> // ôm cả trang
//             <div style={{ padding: '10px 32px' }}>
//                 <Button />
//                 <Button primary />
//             </div>
//         </GlobalStyles>
//     );
// }

// export default App;

//-------------------------------------------
// Bài 53: Install SASS để dùng SCSS?
// đuôi .scss
// Ví dụ: Button.module.scss

//--------------------------------------------
// Bài 54: React Router V6 | Định tuyến trong ReactJS
// Các file liên quan: folder pages: Contact.js, Home.js, News.js
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import NewPage from './pages/News'
import ContactPage from './pages/Contact'

function App() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
           <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewPage />} />
              <Route path="/contact" element={<ContactPage />} />
           </Routes>
        </div>
    );
}

export default App;