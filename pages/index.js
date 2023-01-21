import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
//   let prev = document.getElementById("prev");
// let next = document.getElementById("next");
const [con,setcon]=useState(0)
const [con1,setcon1]=useState(1300)
let arr =[]
let arr1 =[]
var inde = 90
// let cont =document.querySelector(".cont")
for (let index = 0; index < 1334; index++) {
  arr.push(`https://firebasestorage.googleapis.com/v0/b/ketab-dbb85.appspot.com/o/result_0001${index+1}.png?alt=media&token=020baa8c-9627-4c07-a994-4fdfbae72eed`) 
  }
  for (let index = 0; index <50; index++) {
    let y =arr
     let z = index*2 
      arr1.push( y.slice(z,2+z))
      
  }
  

const zIndex=()=> setcon1(con1-1)
function prevImg() {
 if (con>0)
 {
  document.getElementById(`${con-1}`).style.msTransform = "rotateY(0deg)";
  document.getElementById(`${con-1}`).style.webkitTransform = "rotateY(0deg)";
  document.getElementById(`${con-1}`).style.transform = "rotateY(0deg)";
  setcon(con-1)
  document.getElementById(`${con}`).style.zIndex =`${con*-1}`;
  console.log(inde)
 }
}
   
function nextImg() {
  if(con<30){
    document.getElementById(`${con}`).style.msTransform ="rotateY(-180deg)";
  document.getElementById(`${con}`).style.webkitTransform ="rotateY(-180deg)";
  document.getElementById(`${con}`).style.transform ="rotateY(-180deg)";
  setcon(con+1)
  document.getElementById(`${con}`).style.zIndex =`${con}`;
  document.getElementById(`${con}`).style.animationName="example";
  document.getElementById(`${con}`).style.animationDuration=".5s";
  document.getElementById(`${con}`).style.animationTimingFunction="ease-in-out";
  
  }
}
console.log(inde)
// function nextImg() {
//   second.style.msTransform = "rotateY(-180deg)";
//      second.style.webkitTransform  = "rotateY(-180deg)";
//     second.style.transform = "rotateY(-180deg)";
// console.log(con)
// }
  return (
    <div >
      <Head>
        <title>براءات الاختراع</title>
        <link rel="icon" href="/logo.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
      </Head>
      <div class="container1">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img class="ilog m-0 p-0" src="logo.png" alt=""/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">فئة أ</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  باقي الفئات
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">فئة أ</a></li>
                  <li><a class="dropdown-item" href="#">فئة ب</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">فئة جـ</a></li>
                </ul>
              </li>
             
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
   </div>
      <div className="cont1">
 
 <p id="next" onClick={nextImg}>
   {'>'}
 </p>
 <p id="prev" onClick={prevImg}>
   {"<"}
 </p>
 <div className="cont x">
  {arr1.map(x=>
   <div className="paper z1" key={arr1.indexOf(x)} style={{zIndex:`${arr1.indexOf(x)*-1}`}} id={`${arr1.indexOf(x)}`}>
   <div className="page1 ">
     <img className="page-img" src={x[0]} alt=""/>
   </div>
   <div className="page2">
     <img className="page-img" src={x[1]} alt=""/>
   </div>
 </div>)
  }
 
 </div>
</div>

      <footer>
        
      </footer>

      <style jsx>{`
       body *{
        margin: 0px;
        box-sizing: border-box;
        padding: 0px;
        }
        ilog{
            width: 150px;
            height: 80px;
        }
        .container1{
            width: 90%;
            margin: auto;
        }
        body {
          margin: 4em;
        }
        
        
        #second {
          z-index: 103;
          transition: transform 1s ease-in-out;
        }
        
        
        /* controls */
        #prev, #next {
          position: absolute;
         font-size: xx-large;
         font-weight: bolder;
          z-index: 999;
        }
        #prev:hover, #next:hover {
          background: rgba(0,0,0,0.05);
          cursor: pointer;
        }
        #prev {
          top: 50%;
          left: 0px;
          position: absolute;
        }
        #next {
          top: 50%;
          right: 0px;
        }
        
        .cont1{
          width: 60%;
          margin: auto;
          height: 600px;
          position: relative;
          background-color: rgb(174, 171, 171);
          margin-top:10px;
         
        }
        .cont{
          position: relative;
          width: 80%;
          height: 100%;
          margin: auto;
          
          perspective: 1000px;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        }
        .paper{
          position: absolute;
          left: 50%;
          top: 0px;
          width: 50%;
          height: 100%;
          transform-style: preserve-3d;
          transform-origin:left;
            transition: transform 1s ease-in-out;
        background-color: rgb(255, 255, 255);
        }
        .page1{
          width: 100%;
          height: 100%;
          position: absolute;
          transform: rotateY(-180deg);
          transform-style: preserve-3d;
          z-index:1000;
          backface-visibility: hidden;
          background-color: white;
          box-shadow:  rgba(0, 0, 0, 0.35) -20px 0px 36px -28px inset;
        }
        .page2{
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          z-index: 1000;
          backface-visibility: hidden;
          background-color: white;
          box-shadow:  rgba(0, 0, 0, 0.35) 20px 0px 36px -28px inset;
        }
        .page-img{
          width:80%;
          margin: auto;
          display: block;
        }
        
        .x{
          height: 100%;
          background-color: rgb(142, 135, 135);
          width: 100%;
        }
        @keyframes example {
          from {width: 45%;box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;;}
          to {width: 40%;box-shadow:rgba(59, 58, 58, 0.347) 50px 0px 50px 60px;}
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}