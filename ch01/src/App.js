import React, { useEffect, useRef, useState } from 'react';

function TimerComponent() {
    const [running, setRunning] = useState(false);    // 기본값: 정지 상태
    const intervalRef = useRef(null);                 // 타이머 ID 저장용 ref

    // 타이머 시작 함수
    const startTimer = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                console.log('1초마다 실행됨');
            }, 1000);
            console.log('타이머 다시 시작됨');
            setRunning(true);
        }
    };

    // 타이머 정지 함수
    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            console.log('타이머 정지됨');
            setRunning(false);
        }
    };

    // 컴포넌트가 처음 마운트될 때 타이머 시작
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            console.log('1초마다 실행됨');
        }, 1000);
        setRunning(true);
        console.log('초기 타이머 시작됨');

        // 언마운트 시 정리
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                console.log('컴포넌트 언마운트 시 타이머 정리됨');
            }
        };
    }, []);

    return (
        <div>
            <p>타이머 상태: {running ? '실행 중' : '정지됨'} (콘솔 확인)</p>
            <button onClick={stopTimer} disabled={!running}>
                타이머 정지
            </button>
            <button onClick={startTimer} disabled={running}>
                타이머 시작
            </button>
        </div>
    );
}

export default TimerComponent;
