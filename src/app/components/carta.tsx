'use client';
import { useRef } from "react";
import styled from "styled-components"

const CartaStyle = styled.div`
    width: 300px;
    height: 200px;
    /* background: blue; */
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: 1s;
    div {
        background: #ffddbe;
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 1rem;
        transition: 1s;
        box-shadow: 0 0 5px black;
    }
    .folhado {
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 47%; /* metade da altura do pai */
        border-bottom: 100% solid black; /* cor da borda do triângulo */
        background: transparent;
    } 
    &:hover > .back {
        transform:translateX(100);
    }
    /* HTML: <div class="triangle"></div> */
    /* HTML: <div class="triangle"></div> */

    .front {
        background: #ffddbe;
        border: 2px #261b10 solid;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            height:32px;
            background: #FF5252; /* 色 */
            width: 32px;
	        clip-path: path("M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z");
        }
    }
    .back {
        padding: 1rem;
        color: black;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: lighter;

        /* transform: rotateY(180deg) translateZ(-100px); */

    }
`
export default function Carta(props : { text : string}) {
    const refBack = useRef<HTMLDivElement>(null)
    const refFront = useRef<HTMLDivElement>(null)
    return <CartaStyle >
        <div className="front" ref={refFront}>
            <div className="folhado"></div>
            <button className="flex justify-center items-center" onClick={() => {

                if (refBack == null) {
                    return
                }
                if (!refBack.current) {
                    return
                }
                if (!refFront.current) {
                    return
                }
                // refFront.current.style.transform = "rotateY(45deg)"
                setTimeout(() => {
                    if (!refFront.current) return
                    refFront.current.style.transform = "translateX(-400px)"
                    refFront.current.style.zIndex = '0'
                }, 100)
                setTimeout(() => {
                    if (!refBack.current) return
                    if (!refFront.current) return
                    refBack.current.style.transform = "translateZ(200px) translateX(200px) rotateY(40deg)";
                    refBack.current.style.zIndex = '1'
                    refFront.current.style.transform = "rotateY(40deg)"
                }, 1200)

                setTimeout(() => {
                    if (!refBack.current) return
                    if (!refFront.current) return
                    refBack.current.style.transform = "translateX(0)"
                    refFront.current.style.transform = "translateX(0)"
                }, 2000)
            }}>
            </button>
        </div>
        <div className="back" ref={refBack}>{props.text}</div>
    </CartaStyle>

}