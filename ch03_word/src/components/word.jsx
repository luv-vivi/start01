import { useState } from "react";

export default function Word({word:w}){
    const[word,setWord]=useState(w);
    const[isShow, setIsShow]=useState(false);
    const[isDone, setIsDone]=useState(word.isDone);
    const[loading, setLoading] =useState(false);

    function toggleShow(){
        setIsShow(!isShow);
    }
    function toggleDone(){
        fetch(`http://localhost:3010/words/${word.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                ...word,
                isDone:!isDone,
            }),
        }).then(res => {
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        if(window.confirm("삭제 하시겠습니까?")){
            setLoading(true);
            fetch(`htpp://localhost:3010/words/${word.id}`,{ method:"DELETE",
            }).then(res => { 
                if(res.ok){
                    setWord({ id:0});
                }
            })
            .catch((error)=> {
                console.error("Error:",error);
                alert("서버와의 통신에 문제가 발생하였습니다.");
            })
            .finally(()=>setLoading(false));
        }
    }
    if(word.id === 0 ){
        return null;
    }

    return(
        <tr className={isDone ? "off": " "}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? " 숨기기" : "보기"}</button>
                <button onClick={del} className="btn_del" disabled={loading}  >{loading ? "삭제중..":"삭제"} </button>
            </td>
        </tr>
    )
}