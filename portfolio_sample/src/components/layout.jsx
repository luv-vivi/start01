import { Component, useCallback, useRef } from "react"
import database from '../index.json'
import '../css/layout.css'
import { Main } from "./main";
import { About } from "./about";
import { Stack } from "./stack";
import { Portfolio } from './portfolio';
 

const pages = {
    "MAIN": Main,
    "ABOUT": About,
    "STACK": Stack,
    "PORTFOLIO": Portfolio,
}

export function Layout(){
    const pageRef = useRef([]);
    const data = database.filter(item => item.tap !== "LINK");
    const link = database.find(item => item.tap === "LINK")?.items ?? [];

    const handleScroll = useCallback((e,k) => {
        e.preventDefault();
        window.scrollTo({
            top: k === 0 ?0 :pageRef.current[k].offsetTop-50,
            behavior: 'smooth',
        });
    }, [pageRef]);

    const handleLink = useCallback((e,src) => {
        e.preventDefault();
        if(src === undefined) {
            alert("해당 링크가 존재하지 않습니다.")
        } else { window.open(src, '_blank');  }
    });

    return(<>
        <main>
            <header>
            { data.map((o,k)=>{ 
                if(pages[o.tap.toUpperCase()] === undefined) { return }      
                return(<>
                <button key={k} onClick={(e)=>handleScroll(e,k)}> 
                    <p>{o.tap}</p>
                    <span />
                </button>
                </>)
            })}
            <div>{ link.map((o,k)=>
                <button key={k} onClick={(e)=>handleLink(e,o.src)}>
                    <p>{o.name}</p>
                    <span />
                </button>
            )}</div>
            </header>
            { data.map((o,k)=>{
                if(pages[o.tap.toUpperCase()] === undefined) { return }  
                const Page = pages[o.tap.toUpperCase()] 
                return(<Page key={k} ref={(el) => (pageRef.current[k] = el)} data={o}/>)
            })}
        </main>
    </>)
}