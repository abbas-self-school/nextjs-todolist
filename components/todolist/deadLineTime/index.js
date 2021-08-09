import React, { useState, useEffect, useRef } from 'react'

const CountDownTimer = (props) => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const countdownDate = new Date(props.date).getTime();
    let interval = useRef();

    const startTimer = () => {

            interval = setInterval(() => {
                const now = new Date().getTime();
                const distanceBtwDates = countdownDate - now;

                let days = Math.floor(distanceBtwDates / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distanceBtwDates % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                let minutes = Math.floor((distanceBtwDates % (1000 * 60 * 60) / (1000 * 60 )));
                let seconds = Math.floor((distanceBtwDates % (1000 * 60) / 1000));

                days = days < 10 ? '0' + days : days;
                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;

                if (distanceBtwDates < 0) {
                    clearInterval(interval.current);
                } else {
                    setDays(days);
                    setHours(hours);
                    setMinutes(minutes);
                    setSeconds(seconds);
                }

            }, 1000)

    }

    useEffect(() => {
        startTimer();

        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className="flex flex-row justify-center items-center mx-auto">
            <div className="z-30">
                <span className="text-sm font-bold z-30"> {days} :</span>
                <span className="text-sm font-bold z-30"> {hours} :</span>
                <span className="text-sm font-bold z-30"> {minutes} :</span>
                <span className="text-sm font-bold z-30"> {seconds} </span>
            </div>
        </div>
    )
}

export default CountDownTimer;