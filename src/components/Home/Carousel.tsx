import React, {useEffect, useRef} from "react";
import styled from "styled-components";


const Container = styled.div`
  border: 1px solid red;
  overflow: hidden;
  margin: 10px 0;
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  >img{
  object-fit: cover;
  ;
  }
  >ol{
     width: 100%;
     display: flex;
     position: absolute;
     bottom: 0;
     justify-content: center;
     &::-webkit-scrollbar{
     display: none;
     }
      >li{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ccc;
        margin: 10px 10px ;
        cursor: pointer;
        &.active{
        width: 20px;
        background: white;
        }
    }
  }
`;



const Carousel: React.FC = () => {
  const content = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLImageElement>(null);
  const $ = (s: string) => document.querySelector(s);
  const $$ = (s: string) => document.querySelectorAll(s);
  const urlMap = new Map([["0", "assets/1.jpg"], ["1", "assets/2.jpg"], ["2", "assets/3.jpg"], ["3", "assets/4.jpg"]]);

  const listStyle = (n: number) => {
    $$(".wrapper li").forEach(item => item.classList.remove("active"));
    $$(".wrapper li")[n].classList.add("active");
  };

  useEffect(() => {
    if (content.current) {
      content.current.addEventListener("touchmove", (e) => {
        console.log(e.targetTouches[0]);
      });
    }
    $(".wrapper")!.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {return; }
      let index = Array.from($$(".wrapper li")).indexOf(e.target as Element);
      listStyle(index);
      if (photo.current) {
        photo.current.src = urlMap.get(String(index)) as string;
      }
    });
    // let n = -1;
    // setInterval(() => {
    //   n += 1;
    //   listStyle(n);
    //   photo.current!.src = urlMap.get(String(n)) as string;
    // }, 3000);
  }, [urlMap]);

  return (
    <>
      <Container ref={content}>
        <img src='assets/1.jpg' alt="" ref={photo}/>
        <ol className='wrapper'>
          <li id='1' className='active'/>
          <li id='2'/>
          <li id='3'/>
          <li id='4'/>
        </ol>
      </Container>
    </>
  );
};

export {Carousel};