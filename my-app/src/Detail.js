import React from 'react'
import { useNavigate } from 'react-router-dom';

// Detail 컴포넌트 정의
const Detail = (props) =>{
  const navigate = useNavigate();       // useNavigate 훅을 사용하여 페이지 이동을 위한 navigate 함수 생성
  return <div style={{paddingTop:20, textAlign:'center', color: 'white'}}>
    {/* <p>{props.content.description}</p>*/}
     <p dangerouslySetInnerHTML={{ __html: props.content.description }}></p>
     <br />
    <img src={props.content.image} alt="운동 이미지" style={{ width: '37%', height: 'auto', borderRadius: '10px'  }}/>
    <br />
    <br />
    <br />
    <br />
    <br />
    
    <div dangerouslySetInnerHTML={{ __html: props.content.videoSrc }}></div>
    <button onClick={() => navigate(-1)}>BACK</button>
  </div>
}

export default Detail