import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word.js";
export default function Day(){
    const {day}=useParams();
    const wordList=dummy.words.filter(word=>word.day==day);
    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {
                        wordList.map(word=>(
                            <Word key={word.id} word={word}/>
                        ))

                        // <tr>
                        //         <td>id</td><td>{word.id}</td><td>{word.kor}</td>
                        //     </tr>
                    }
                </tbody>
            </table>
        </>
    )
}