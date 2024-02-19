// Bai 32
// function Content() {
//     return (
//         <h1>Hi anh em</h1>
//     )
// }
// export default Content

//import { useState } from "react";

// BÀi 33: React useEffect hook
// Side effects

// Events: add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Times: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

// 1. Update DOM
//     - F8  blog title
// 2. Call API
// 3. Listten DOM events
//     - scroll
//     - resize
// 4. Cleanup
//     - Remove listener / Unsubscribe
//     - Clear timer

// 1. useEffect(callback)
// - gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [dops])
// -------------------------------
// 1. Callback luôn được gọi sau khi Component mounted

// import { useEffect, useState } from 'react'

// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts);
//             })
//     }, [])

//     return (
//         <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default Content;


// Bài 36: useEffect() with timer functions

// Bài tập đồng hồ điếm ngược từ 180s
// Sử dụng setInterval với đối số t2 là mảng rổng, dùng callback cho thg state
// import { useEffect, useState } from 'react'

// function Content() {
//     const [countdown, setCountdown] = useState(180)

//     useEffect(() => {
//         setInterval ( () => {
//             setCountdown(prevState => prevState - 1)
//         }, 1000)
//     }, [])
//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }
// export default Content;

// Bài 37: useEffect() with preview avatar
// cleanup func: Hàm dọn dẹp
// Bài tập: hiện thị ảnh avt, chọn vào hiện thị ảnh lun

// import { useEffect, useState } from 'react'
// function Content() {
//     const [avatar, setAvatar] = useState()

//     useEffect(() => {
//         // Cleanup
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }   
//     }, [avatar])

//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]
//         file.preview = URL.createObjectURL(file)
//         setAvatar(file)
//     }
//     return (
//         <div>
//             <input
//                 type="file"
//                 onChange={handlePreviewAvatar}
//             />
//             {avatar && (
//                 <img src={avatar.preview} alt="" width="80%" />
//             )}
//         </div>
//     )
// }
// export default Content

// Bài 38: useEffect() with fake Chat App
// import { useEffect, useState } from 'react'
// const lessons = [
//     {
//         id: 1,
//         name: `ReactJS la gi ?`
//     },
//     {
//         id: 2,
//         name: `SPA/MPA la gi`
//     },
//     {
//         id: 3, 
//         name: `Arrow function`
//     }
// ]

// function Content() {
//     const [lessonId, setLessonId] = useState(1)
//     useEffect(() => {
//         const handleComment = ({ detail }) => {
//             console.log(detail);
//         }
//         window.addEventListener(`lesson-${lessonId}`, handleComment)
//         return () => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment)
//         }
// dependency 
//     }, [lessonId])

//     return (
//         <div>
//             <ul>
//                 {lessons.map(lesson => (
//                     <li
//                         key={lesson.id}
//                         style={{
//                             color: lessonId === lesson.id ?
//                                 'red' :
//                                 '#333'
//                         }}
//                         onClick={() => setLessonId(lesson.id)}
//                         >
//                             {lesson.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default Content

// BAi 39: useLayoutEffect() hook?
// useEffect và useLayoutEffect giống nhau 
// khác ở thứ tự thực hiện

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup neeys deps thay đổi (sync)
// 4. Gọi useLayouEffect callback (sync)
// 5. Render lại UI

//import { useEffect, useLayoutEffect, useState } from 'react'
// Ứng dụng đếm số bấm thì tăng thêm 1
// đếm tới 3 trở về 0
// giải thích cách 1: khi đi setState: setCount(count + 1)
// nó đi Cập nhật lại state
// Sau đó render lại component thì Cập nhật DOM (mutated)
// sau đó Render lại UI
// Gọi cleanup nếu deps thay đổi
// Gọi useEffect callback
// function Content() {
//     const [count, setCount] = useState(0)

//     // cách 1. khi trở lại 0 thì nó nhấp nháy
//     useEffect(() => {
//         // ví dụ 4 > 3 set về 0
//         if (count > 3)
//             setCount(0)
//      //dependency 
//     }, [count])

//     // cách 2 nên dùng
//     useLayoutEffect(() => {
//         // ví dụ 4 > 3 set về 0
//         if (count > 3)
//             setCount(0)
//      //dependency 
//     }, [count])

//     const handleRun = () => {
//         setCount(count + 1)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleRun}>Run</button>
//         </div>
//     )
// }
// export default Content


// Bài 41
// nguyên lý hoạt động memo
// nhận vào 1 component
// check các drop của component này sau môi lần render có thay đổi ko
// nếu có 1 drop bị đổi thì render, ko thì thôi
// memo dùng === để nhận biết drop có thay đổi ko 

// import { memo } from "react";

// function Content({ count }) {
//     console.log('re-render');
//     return (
//         <h2>HELLO ANH EM F8 {count}</h2>
//     )
// }
//                   //component
// export default memo(Content)


// Bài 42
// import { memo } from "react";

// function Content({ onIncrease }) {
//     console.log('re-render');
//     return (
//         <>
//             <h2>HELLO ANH EM F8</h2>
//             <button onClick={onIncrease}>Click me</button>
//         </>
//     )
// }
// //component
// export default memo(Content)

// Bài 47: React Context & useContext() hook
// import Paragraph from "./Paragraph";

// function Content() {
//     return (
//         <div>
//             <Paragraph />
//         </div>
//     )
// }

// export default Content




