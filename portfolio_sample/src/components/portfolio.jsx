import { forwardRef, useState } from 'react';
import '../css/portfolio.css'
import { FaJava } from "react-icons/fa";

/*
    <li>에 포트폴리오 작성
    TestPortfolio 처럼 작성
    <h3>는 헤더 ( 포트폴리오 제목, 인원수) 
    <p> 에는 포트폴리오 설명 작성 법
        <h4> 설명 제목
        <small> 설명 
        <span> 설명 강조
        <a> 링크
        <div> 이미지 슬라이더
            <img> 이미지 여러개도 됨 
        </div>
*/

const useToggle = (initToggle = false ) => {
    const [ value , setValue ] = useState(initToggle)
    return { 
        toggle:value,  
        setToggle:()=>{ setValue((prev)=>!prev) }
    };
}

function Nbsp({ number }) {
  return <>{Array(number).fill('\u00A0').join('')}</>;  // \u00A0는 &nbsp;의 유니코드
}


function TestPortfolio() {
    const { toggle, setToggle } = useToggle(true)
    return (<li>
        <h3 
        onClick={(e)=>{
            e.preventDefault();
            setToggle();  
        }}
        >
            <FaJava />PROJECT명<small> FOR (인원)</small>
        </h3>
        <p>
            <img src='https://marketplace.canva.com/EAGAslbsZtQ/4/0/1600w/canva-%ED%8E%98%EC%9D%BC-%EB%B8%94%EB%A3%A8-%EB%A7%A4%EA%B1%B0%EC%A7%84-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%98-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%ED%94%84%EB%A0%88%EC%A0%A0%ED%85%8C%EC%9D%B4%EC%85%98-kmrPW6Zw5Lg.jpg' />
            <p className={toggle?'open':'closed'}>
                <h4>🔗Deployment URL</h4>
                <a>url.com</a>
                <h4>📌 Summary</h4>
                <small> #1. 이걸 만들었는지 설명하시오.</small>
                <br />
                <small> #2. 이걸 만들었는지 설명하시오. 이걸 만들었는지 설명하시오.</small>
                <br/>
                <small><Nbsp number={7}/>이걸 왜만들었는지 설명하시오</small>
                <br />
                <span>주요기능: header, main</span>
                <h4>🔨 Technology Stack(s)</h4>
                <small>TypeScript, Next.js, Zustand, React-Query</small>
            </p>
        </p>
    </li>)
}

function TestPortfolio2() {
    const { toggle, setToggle } = useToggle()

    return (<li>
        <h3 
        onClick={(e)=>{
            e.preventDefault();
            setToggle();  
        }}
        >
            <FaJava />PROJECT명<small> FOR (인원)</small>
        </h3>
        <p>
            <img src='https://marketplace.canva.com/EAGAslbsZtQ/4/0/1600w/canva-%ED%8E%98%EC%9D%BC-%EB%B8%94%EB%A3%A8-%EB%A7%A4%EA%B1%B0%EC%A7%84-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%98-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%ED%94%84%EB%A0%88%EC%A0%A0%ED%85%8C%EC%9D%B4%EC%85%98-kmrPW6Zw5Lg.jpg' />
            <p className={toggle?'open':'closed'}>
                <h4>🔗Deployment URL</h4>
                <a>url.com</a>
                <h4>📌 Summary</h4>
                <small> #1. 이걸 만들었는지 설명하시오.</small>
                <br />
                <small> #2. 이걸 만들었는지 설명하시오. 이걸 만들었는지 설명하시오.</small>
                <br/>
                <small><Nbsp number={7}/>이걸 왜만들었는지 설명하시오</small>
                <br />
                <span>주요기능: header, main</span>
                <h4>🔨 Technology Stack(s)</h4>
                <small>TypeScript, Next.js, Zustand, React-Query</small>
            </p>
        </p>
    </li>)
}

export const Portfolio = forwardRef(({ data }, ref) => {
    return (<>
        <section className='portfolio' ref={ref}>
            <h2>PO<strong>R</strong>TFOLIO</h2>
            <ul>
                <TestPortfolio />
                <TestPortfolio2 />
            </ul>
        </section>
    </>)
})