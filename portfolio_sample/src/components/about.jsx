import '../css/about.css'
import { forwardRef } from 'react';

export const About = forwardRef(({data}, ref)=>{
    return(<>
        <section className='about' ref={ref}>
            <h2><strong>A</strong>BOUT ME</h2>
            <div className='profile'>
                <div className='pace'>
                    <img src={`/${data.pace_img}.png`} alt={data.pace_img} />
                </div>
                { data.profile !== undefined &&(
                    <div className='text'>{
                        data.profile.map((o,k)=>{return(<>
                            <p key={k}>
                                <small>{o.tag}</small>{o.str}
                            </p>
                        </>)})    
                    }</div>
                )}
            </div>
            { data.career !== undefined &&(
                <ul className='career'>
                    <h3>Carerr</h3>
                    {data.career.map((o,k)=>{return(
                        <li key={k}>
                            <h4>
                                {o.company}
                                <br/>
                                <small>
                                    {o.date.start} ~ {o.date.end}
                                </small>
                            </h4>
                            <div>{ o.work.map((oj,key)=>
                                <p key={key}>{oj}</p>
                            )}
                            </div>
                        </li>
                    )})}
                </ul>    
            )}
            { data.qna !== undefined &&(
                <ul className='qna'>
                    <h3>QnA</h3>
                    { data.qna.map((o,k)=>{return(
                        <li key={k}>
                            <h4>#{k}. {o.q}</h4>
                            <p>{o.a}</p>
                        </li>
                    )})}
                </ul>     
            )} 
        </section>
    </>)
})