import { createStore } from 'redux';

const contents = [
  { 
    path:"/benchPress",
    imagePath: "https://velog.velcdn.com/images/w4t3r/post/6fc6b966-ba0b-45a9-a700-5321a9ee8f6f/image.jpg",
    title: "벤치프레스",
    character: "가슴운동",
    detail:{
    description:"벤치프레스는 대표적인 상체 근력 운동 중 하나로, 가슴 근육을 발달시키는 운동입니다.<br/> 이 운동은 평평한 벤치 위에 누워 바벨 또는 덤벨을 가슴 앞에서 아래로 내리고 다시 위로 밀어올리는 동작으로 이루어집니다.",
    image:"https://velog.velcdn.com/images/w4t3r/post/6fc6b966-ba0b-45a9-a700-5321a9ee8f6f/image.jpg",
    videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/vthMCtgVtFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  }
  },{ 
    path:"/inclineBenchPress",
    imagePath: "https://velog.velcdn.com/images/w4t3r/post/82c52e39-7e22-4449-a6a1-fb838540f33c/image.jpg",
    title: "인클라인벤치프레스",
    character: "가슴운동",
    detail:{
    description:"인클라인 벤치프레스는 기울어진 벤치에서 수행합니다. 이 운동은 주로 가슴의 상부를 중점적으로 단련합니다.<br/> 기본 벤치프레스와 마찬가지로 바벨 또는 덤벨을 사용하여 가슴 앞에서 아래로 내리고 다시 위로 밀어올립니다. ",
    image:"https://velog.velcdn.com/images/w4t3r/post/82c52e39-7e22-4449-a6a1-fb838540f33c/image.jpg",
    videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/SrqOu55lrYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  }
  },{ 
    path:"/latPulldown",
    imagePath: "https://velog.velcdn.com/images/w4t3r/post/9b465598-702c-4b17-a571-a445bec777e9/image.jpg",
    title: "랫풀다운",
    character: "등운동",
    detail:{
    description:"랫풀다운은 주로 등의 광배근을 중점적으로 단련하는 운동입니다.<br/> 케이블 기구를 사용하여, 상단의 바를 손으로 잡고 어깨의 방향으로 당기는 동작으로 이루어집니다.",
    image:"https://velog.velcdn.com/images/w4t3r/post/9b465598-702c-4b17-a571-a445bec777e9/image.jpg",
    videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/OcFCHdQHjVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  }
},{ 
    path:"/squat",
    imagePath: "https://velog.velcdn.com/images/w4t3r/post/2386938f-def6-4036-b1ff-df1cf08d41c3/image.jpg",
    title: "스쿼트",
    character: "하체운동",
    detail:{
    description:"스쿼트는 하체 근력 운동의 기본 중 하나로, 하반신의 여러 근육들을 강화하는 데 효과적입니다.<br/> 운동 수행 시에는 무릎을 굽히면서 엉덩이를 뒤로 내밀고 다시 일어서는 동작으로 이루어집니다. ",
    image:"https://velog.velcdn.com/images/w4t3r/post/2386938f-def6-4036-b1ff-df1cf08d41c3/image.jpg",
    videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/q1fCgfieNEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  }
  },{ 
    path:"/deadLift",
    imagePath: "https://velog.velcdn.com/images/w4t3r/post/97bb2f52-8100-4220-b580-6834b5343bb7/image.jpg",
    title: "데드리프트",
    character: "등,하체운동",
    detail:{
    description:"데드리프트는 전체 몸의 근육을 단련하는 복합 운동 중 하나로, 특히 하반신과 등 근육의 발달에 중요한 역할을 합니다.<br/> 이 운동은 바벨을 바닥에서 들어올리고 다시 내려놓는 동작으로 이루어집니다.",
    image:"https://velog.velcdn.com/images/w4t3r/post/97bb2f52-8100-4220-b580-6834b5343bb7/image.jpg",
    videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/hCDzSR6bW10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  }
},{ 
    path:"/legPress",
    imagePath: "https://velog.velcdn.com/images/w4t3r/post/c9335488-ab4e-4d51-9c41-9ccf21d01cb3/image.jpg",
    title: "레그프레스",
    character: "하체운동",
    detail:{
    description:"레그프레스는 기구를 사용하여 대퇴근을 강화하는 운동으로, 다리를 밀어내는 동작으로 이루어집니다.",
    image:"https://velog.velcdn.com/images/w4t3r/post/c9335488-ab4e-4d51-9c41-9ccf21d01cb3/image.jpg",
    videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/IZxyjW7MPJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  }
},
  // { 
    // path:"/latPulldown",
    // imagePath: "https://velog.velcdn.com/images/w4t3r/post/9b465598-702c-4b17-a571-a445bec777e9/image.jpg",
    // title: "랫풀다운",
    // character: "등운동",
    // detail:{
    // description:"랫풀다운은 주로 등의 광배근을 중점적으로 단련하는 운동입니다. 케이블 기구를 사용하여, 상단의 바를 손으로 잡고 어깨의 방향으로 당기는 동작으로 이루어집니다.",
    // image:"https://velog.velcdn.com/images/w4t3r/post/9b465598-702c-4b17-a571-a445bec777e9/image.jpg",
    // videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/OcFCHdQHjVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  // }
// },
// { 
  // path:"/inclineBenchPress",
  // imagePath: "https://velog.velcdn.com/images/w4t3r/post/82c52e39-7e22-4449-a6a1-fb838540f33c/image.jpg",
  // title: "인클라인벤치프레스",
  // character: "가슴운동",
  // detail:{
  // description:"인클라인 벤치프레스는 기울어진 벤치에서 수행합니다. 이 운동은 주로 가슴의 상부를 중점적으로 단련합니다. 기본 벤치프레스와 마찬가지로 바벨 또는 덤벨을 사용하여 가슴 앞에서 아래로 내리고 다시 위로 밀어올립니다. ",
  // image:"https://velog.velcdn.com/images/w4t3r/post/82c52e39-7e22-4449-a6a1-fb838540f33c/image.jpg",
  // videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/SrqOu55lrYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
// }
// },
{ 
  path:"/ropePushDown",
  imagePath: "https://velog.velcdn.com/images/w4t3r/post/1c2bd621-8392-4697-aa36-bf8e0101b8f6/image.jpg",
  title: "로프푸쉬다운",
  character: "삼두운동",
  detail:{
  description:"로프 푸쉬다운은 팔의 삼두근을 중점적으로 단련하는 케이블 기계 운동입니다.<br/> 이 운동에서는 케이블의 끝에 붙은 로프 손잡이를 양손으로 잡고, 팔을 완전히 펴면서 로프를 아래로 당깁니다.  ",
  image:"https://velog.velcdn.com/images/w4t3r/post/1c2bd621-8392-4697-aa36-bf8e0101b8f6/image.jpg",
  videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/vB5OHsJ3EME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
},
{ 
  path:"/dumBellCurl",
  imagePath: "https://velog.velcdn.com/images/w4t3r/post/487544f9-14de-4755-9b7f-8bef0ad2c384/image.jpg",
  title: "덤벨컬",
  character: "이두운동",
  detail:{
  description:"덤벨컬은 덤벨을 사용하여 이두근을 강화하는 운동으로, 팔을 구부리고 펴는 동작으로 이루어집니다.",
  image:"https://velog.velcdn.com/images/w4t3r/post/487544f9-14de-4755-9b7f-8bef0ad2c384/image.jpg",
  videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/sAq_ocpRh_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
},
{ 
  path:"/barBellCurl",
  imagePath: "https://velog.velcdn.com/images/w4t3r/post/512f431d-b346-4c09-968d-5a4d2cce7182/image.jpg",
  title: "바벨컬",
  character: "이두운동",
  detail:{
  description:"바벨컬은 바벨을 사용하여 이두근을 강화하는 운동으로, 팔을 구부리고 펴는 동작으로 이루어집니다.",
  image:"https://velog.velcdn.com/images/w4t3r/post/512f431d-b346-4c09-968d-5a4d2cce7182/image.jpg",
  videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/kwG2ipFRgfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
},
// { 
  // path:"/pulldown",
  // imagePath: "https://velog.velcdn.com/images/w4t3r/post/c9335488-ab4e-4d51-9c41-9ccf21d01cb3/image.jpg",
  // title: "레그프레스",
  // character: "하체운동",
  // detail:{
  // description:"레그프레스는 기구를 사용하여 대퇴근을 강화하는 운동으로, 다리를 밀어내는 동작으로 이루어집니다.",
  // image:"https://velog.velcdn.com/images/w4t3r/post/c9335488-ab4e-4d51-9c41-9ccf21d01cb3/image.jpg",
  // videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/IZxyjW7MPJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
// }
// },
{ 
  path:"/overHeadPress",
  imagePath: "https://velog.velcdn.com/images/w4t3r/post/88922f34-b783-429f-92be-b8d1ccd8cbac/image.jpg",
  title: "오버헤드프레스",
  character: "어깨운동",
  detail:{
  description:"오버헤드프레스는 바벨이나 덤벨을 이용하여 어깨 근육을 강화하는 운동으로,<br/> 무게를 어깨 높이에서 머리 위까지 밀어올리는 동작으로 이루어집니다. ",
  image:"https://velog.velcdn.com/images/w4t3r/post/88922f34-b783-429f-92be-b8d1ccd8cbac/image.jpg",
  videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/KP1sYz2VICk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
},
{ 
  path:"/seatedRow",
  imagePath: "https://velog.velcdn.com/images/w4t3r/post/11c51744-9283-470f-9dab-3d0447066b86/image.jpg",
  title: "시티드로우",
  character: "등운동",
  detail:{
  description:"시티드로우는 기구를 이용하여 등근육을 강화하는 운동으로,<br/> 앉아서 중량을 가슴 쪽으로 당기는 동작으로 이루어집니다",
  image:"https://velog.velcdn.com/images/w4t3r/post/11c51744-9283-470f-9dab-3d0447066b86/image.jpg",
  videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/vwHG9Jfu4sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
},
{ 
  path:"/oneArmDumBellRow",
  imagePath: "https://velog.velcdn.com/images/w4t3r/post/4b37cfc9-1b63-4373-a75f-baf4b077ce3a/image.jpg",
  title: "원암덤벨로우",
  character: "등운동",
  detail:{
  description:"원암덤벨로우는 덤벨을 이용하여 등근육을 강화하는 운동으로,<br/> 한 손에 덤벨을 든 채 반대쪽 무릎과 손을 벤치에 기댄상태로 덤벨을 당기는 동작으로 이루어집니다.",
  image:"https://velog.velcdn.com/images/w4t3r/post/4b37cfc9-1b63-4373-a75f-baf4b077ce3a/image.jpg",
  videoSrc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/dFzUjzfih7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
},
]

function reducer(state, action) {
  return { contents } ;
}

export const store = createStore(reducer);






