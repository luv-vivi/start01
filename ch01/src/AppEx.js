import { useState } from "react";


const quizData = [
    { question: "지구는 태양을 돈다.", answer: "O" },
    { question: "1+1 = 4 이다.", answer: "X" },
    { question: "앵무새는 날 수 있다.", answer: "O" },
    { question: "기름은 물과 섞인다.", answer: "X" },
];


function App() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [socre, setScore] = useState(0);

    const [showResult, setShowResult] = useState(false);


    const handelAnswer = (userAnswer) => {
        if (userAnswer === quizData[currentIndex].answer) {
            setScore(score + 1);
            alert("정답입니다! ❤️");
        } else {
            alert("오답입니다.😂");
        }


        if (currentIndex + 1 < quizData.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setShowResult(true);
        }
    };


    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>ox 퀴즈 게임 🎶</h1>


         
        </div>
    )
}

