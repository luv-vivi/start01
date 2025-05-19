import '../css/stack.css'
import { DiJavascript1 } from "react-icons/di";
import { ImGithub } from "react-icons/im";
import { FaJava } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { forwardRef } from 'react';

/*
    react-icons 기반
    link : https://react-icons.github.io/react-icons/
    해당 link에서 icon의 주소를 가져온뒤 사용,
    skill, tool에 icon을 등록해면 자동 입력 됩니다.
    skil 과 tool 은
    icon <- 사용될 아이콘,
    color <- icon의 색상 ( 기본 검은색 )
    background <- 네모난 배경 색상 ( 기본 미정 )
*/

const skill = [
    { icon: FaJava, }
]

const tool = [
    { icon: DiJavascript1, },
    { icon: ImGithub, }
]

export const Stack = forwardRef(({data}, ref)=>{
    return(<>
        <section className="stack" ref={ref}>
            <h2>ST<strong>A</strong>CK</h2>
            <div>
                <strong>SKILL</strong>
                <article>{ skill.map((o,k)=>{ 
                    const Icon = o.icon;
                    const color = o.color !== undefined ?o.color :"black"   
                    const background = o.background !== undefined ?o.background :"var(--highlight-color-1)"
                    return(<>
                        <div k={k} style={{ background: background }}>
                            <Icon style={{ color: color}}/>
                        </div>
                    </>)
                })}
                </article>
            </div>
            <div>
                <strong>TOOL</strong>
                <article>{ tool.map((o,k)=>{ 
                    const Icon = o.icon;
                    const color = o.color !== undefined ?o.color :"black"   
                    const background = o.background !== undefined ?o.background :"var(--highlight-color-2)"
                    return(<>
                        <div k={k} style={{ background: background }}>
                            <Icon style={{ color: color}}/>
                        </div>
                    </>)
                })}
                </article>
            </div>
        </section>
    </>)
});