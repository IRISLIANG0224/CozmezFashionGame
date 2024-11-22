import React, { useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import styled, { css, keyframes } from "styled-components";
import bg from "../../assests/img/sceneOne/bg.png";
import fixedUI from "../../assests/img/sceneOne/FixedUI.png";
import kntHeart5 from "../../assests/img/sceneOne/knt5.png";
import kntHeart4 from "../../assests/img/sceneOne/knt4.png";
import kntHeart3 from "../../assests/img/sceneOne/kntheart3.png";
import kntHeart2 from "../../assests/img/sceneOne/kntheart2.png";
import kntHeart1 from "../../assests/img/sceneOne/kntheart1.png";
import kntHeart0 from "../../assests/img/sceneOne/kntheart0.png";
import kntOne from "../../assests/img/sceneOne/knt1.png";
import kntTwo from "../../assests/img/sceneOne/knt2.png";
import kntThree from "../../assests/img/sceneOne/knt3.png";
import nytOne from "../../assests/img/sceneOne/nyt1.png";
import nytTwo from "../../assests/img/sceneOne/nyt2.png";
//import handCursor from '../../assests/img/sceneOne/hand.png'
import bgMusic from "../../assests/audio/SceneOneBG.mp3";
import BGAudioPlayer from "../../utils/BGAudioPlayer";
import startBG from "../../assests/img/sceneOne/StartScene.png";
import startButton from "../../assests/img/sceneOne/StartButton.png";
import closeButton from "../../assests/img/sceneOne/CloseButton.png";
import reStartButton from "../../assests/img/sceneOne/RestartButton.png";
import catMeow1 from "../../assests/audio/cat-meow-1.mp3";
import catMeow2 from "../../assests/audio/cat-meow-2.mp3";
import catMeow3 from "../../assests/audio/cat-meow-3.mp3";
import angryCatMeow1 from "../../assests/audio/angry-cat.mp3";
import angryCatMeow2 from "../../assests/audio/very-angry-cat.mp3";
import click from "../../assests/audio/click.mp3";
import menuClick from "../../assests/audio/menu-click.mp3";
import angry1 from "../../assests/img/sceneOne/kntAngery1.png";
import angry2 from "../../assests/img/sceneOne/kntAngery2.png";
import angry3 from "../../assests/img/sceneOne/kntAngery3.png";
import question from "../../assests/img/sceneOne/questionMark.png";
import question2 from "../../assests/img/sceneOne/kntQuestion.png";
import paw1 from "../../assests/img/sceneOne/paw1.png";
import paw2 from "../../assests/img/sceneOne/paw2.png";
import scratch1 from "../../assests/img/sceneOne/scratch1.png";
import scratch2 from "../../assests/img/sceneOne/scratch2.png";
import frame from "../../assests/img/sceneOne/frame.png";
import hand from "../../assests/img/sceneOne/hand.png";
import lollipop from "../../assests/img/sceneOne/lollipop.png";
import food2 from "../../assests/img/sceneOne/food2.png";
import towel from "../../assests/img/sceneOne/towel.PNG";
import be from "../../assests/img/sceneOne/BE.png";
import he from "../../assests/img/sceneOne/HE.png";
import nytHappy from "../../assests/img/sceneOne/nytHappy.png";
import kntHappy from "../../assests/img/sceneOne/kntHappy.png";

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const bounce2 = keyframes`
  0% { transform: translateY(-800px); }
  50% { transform: translateY(-500px); }
  100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const OuterContainer = styled.div`
  width: 1300px;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 1000px;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MainPanel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${(props) => (!props.start ? props.startBG : props.bg)})
    no-repeat center center;
  background-size: cover;
  cursor: pointer;
  font-size: 40px;
`;

const EndPanel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${(props) => (props.he ? props.HEBG : props.HEBG)}) no-repeat
    center center;
  background-size: cover;
  cursor: pointer;
  font-size: 40px;
`;

const FixedUI = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1);
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
    `}
  &:hover {
    filter: brightness(1.1);
  }
`;

const Angry1 = styled.img`
  position: absolute;
  top: 200px;
  left: 200px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const Angry2 = styled.img`
  position: absolute;
  top: 150px;
  left: 400px;
  width: 82px;
  height: 70px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const Angry3 = styled.img`
  position: absolute;
  top: 130px;
  left: 260px;
  width: 90px;
  height: 90px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const Paw1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  object-fit: cover;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.5s;
  opacity: 50%;
`;

const Paw2 = styled.img`
  position: absolute;
  top: 0px;
  left: 100px;
  width: auto;
  height: auto;
  object-fit: cover;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.5s;
  opacity: 50%;
`;

const Scratch1 = styled.img`
  position: absolute;
  top: 0px;
  left: 100px;
  width: auto;
  height: auto;
  object-fit: cover;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  animation: ${bounce2} 0.6s ease-in-out infinite,
    ${fadeIn} 0.3s linear forwards;
`;

const Scratch2 = styled.img`
  position: absolute;
  top: 0px;
  left: 100px;
  width: auto;
  height: auto;
  object-fit: cover;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  animation: ${bounce2} 0.6s ease-in-out infinite,
    ${fadeIn} 0.3s linear forwards;
`;

const QuestionMark = styled.img`
  position: absolute;
  top: 180px;
  left: 650px;
  width: auto;
  height: auto;
  object-fit: cover;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      animation: ${bounce} 0.5s ease-in-out infinite,
        ${fadeIn} 0.3s linear forwards;
    `};
`;

const QuestionMark2 = styled.img`
  position: absolute;
  top: 170px;
  left: 160px;
  width: 80px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      animation: ${bounce} 0.5s ease-in-out infinite,
        ${fadeIn} 0.3s linear forwards;
    `};
`;

const NytHappy = styled.img`
  position: absolute;
  top: 180px;
  left: 650px;
  width: 100px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      animation: ${bounce} 0.5s ease-in-out infinite,
        ${fadeIn} 0.3s linear forwards;
    `};
`;

const KntHappy = styled.img`
  position: absolute;
  top: 170px;
  left: 190px;
  width: 50px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      animation: ${bounce} 0.5s ease-in-out infinite,
        ${fadeIn} 0.3s linear forwards;
    `};
`;

const CatOne = styled.img`
  position: absolute;
  top: 140px;
  left: 120px;
  width: 320px;
  height: 300px;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
`;
const CatOne2 = styled.img`
  position: absolute;
  top: 140px;
  left: 120px;
  width: 320px;
  height: 330px;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
`;
const CatOne3 = styled.img`
  position: absolute;
  top: 70px;
  left: 120px;
  width: 300px;
  height: 380px;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
`;

const CatTwo = styled.img`
  position: absolute;
  top: 160px;
  left: 320px;
  width: 330px;
  height: 280px;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
`;

const CatOneHeart = styled.img`
  position: absolute;
  top: 422px;
  left: 100px;
  width: 120px;
  height: 18px;
  object-fit: cover;
`;

const CatTwoHeart = styled.img`
  position: absolute;
  top: 414px;
  left: 670px;
  width: 120px;
  height: 18px;
  object-fit: cover;
`;

const StartButton = styled.img`
  position: absolute;
  top: 330px;
  left: 190px;
  width: 180px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.03);
  }
`;

const CloseButton = styled.img`
  position: absolute;
  top: 330px;
  left: 600px;
  width: 180px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.03);
  }
`;

const RestartButton = styled.img`
  position: absolute;
  top: 480px;
  left: 30px;
  width: 180px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.03);
  }
`;

const Frame = styled.img`
  position: absolute;
  top: 60px;
  left: 720px;
  width: 520px;
  height: auto;
  object-fit: cover;
`;

const Hand = styled.img`
  position: absolute;
  top: 105px;
  left: 875px;
  width: 80px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
  filter: ${(props) =>
    props.selected ? "brightness(1.1)" : "brightness(0.6)"};
  transform: ${(props) => (props.selected ? "scale(1.1)" : "scale(1)")};
  transition: filter 0.3s, transform 0.3s;
`;

const Lollipop = styled.img`
  position: absolute;
  top: 184px;
  left: 880px;
  width: 63px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
  filter: ${(props) =>
    props.selected ? "brightness(1.1)" : "brightness(0.6)"};
  transform: ${(props) => (props.selected ? "scale(1.1)" : "scale(1)")};
  transition: filter 0.3s, transform 0.3s;
`;

const Food2 = styled.img`
  position: absolute;
  top: 260px;
  left: 870px;
  width: 90px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
  filter: ${(props) =>
    props.selected ? "brightness(1.1)" : "brightness(0.6)"};
  transform: ${(props) => (props.selected ? "scale(1.1)" : "scale(1)")};
  transition: filter 0.3s, transform 0.3s;
`;

const Towel = styled.img`
  position: absolute;
  top: 335px;
  left: 860px;
  width: 95px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
  filter: ${(props) =>
    props.selected ? "brightness(1.1)" : "brightness(0.6)"};
  transform: ${(props) => (props.selected ? "scale(1.1)" : "scale(1)")};
  transition: filter 0.3s, transform 0.3s;
`;
const FirstPage = () => {
  //If game starts
  const [start, setStart] = useState(false);
  //If game ends
  const [end, setEnd] = useState(false);
  //Nty feed
  const [nytFeed, setNytFeed] = useState(0);

  //KNT mood
  const [catOneMood, setCatOneMood] = useState(5);
  //NYT mood
  const [catTwoMood, setCatTwoMood] = useState(5);

  //knt image and position control
  const [showCatOne, setShowCatOne] = useState(1);

  //knt image
  const [catTwoSrc, setCatTwoSrc] = useState(nytOne);
  //effect
  const [showQuestion, setShowQuestion] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showNytHappy, setShowNytHappy] = useState(false);
  const [showKntHappy, setShowKntHappy] = useState(false);
  const [showPaw1, setShowPaw1] = useState(false);
  const [showPaw2, setShowPaw2] = useState(false);
  const [showScratch1, setShowScratch1] = useState(false);
  const [showScratch2, setShowScratch2] = useState(false);
  const [showAngry1, setShowAngry1] = useState(false);
  const [showAngry2, setShowAngry2] = useState(false);
  const [showAngry3, setShowAngry3] = useState(false);

  //Function
  const [selectFunction, setSelectFunction] = useState("hand");
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const prevMousePosition = useRef({ x: 0, y: 0 });

  // useEffect(() => {
  //   const updateMousePosition = (e) => {
  //     const { clientX, clientY } = e;
  //     setMousePosition({ x: clientX, y: clientY });
  //   };

  //   window.addEventListener("mousemove", updateMousePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // }, []);

  // useEffect(() => {
  //   prevMousePosition.current = mousePosition;
  // }, [mousePosition]);

  // const renderHand = () => {
  //   let pic;

  //   switch (selectFunction) {
  //     case "hand":
  //       pic = hand;
  //       break;
  //     case "lollipop":
  //       pic = lollipop;
  //       break;
  //     case "food2":
  //       pic = food2;
  //       break;
  //     case "towel":
  //       pic = towel;
  //       break;
  //     default:
  //       pic = hand;
  //   }

  //   const shouldRender =
  //     Math.abs(mousePosition.x - prevMousePosition.current.x) > 2 ||
  //     Math.abs(mousePosition.y - prevMousePosition.current.y) > 2;

  //   return shouldRender ? (
  //     <div
  //       style={{
  //         position: "absolute",
  //         left: mousePosition.x,
  //         top: mousePosition.y,
  //         width: "50px",
  //         height: "auto",
  //         pointerEvents: "none",
  //         zIndex: 9999,
  //       }}
  //     >
  //       <img src={pic} alt="Hand" style={{ width: "100%", height: "auto" }} />
  //     </div>
  //   ) : null;
  // };

  //Handle click KNT
  const handleClickCatOne = debounce(() => {
    new Audio(click).play();

    //function control
    if (selectFunction === "hand") {
      //KNT gets angry
      setCatOneMood(catOneMood - 1);
      //Mood effect
      if (catOneMood <= 0) {
        new Audio(angryCatMeow2).play();
        setShowScratch2(true);
        setShowAngry2(true);
        setShowCatOne(3);
        setTimeout(() => {
          setShowScratch2(false);
          setShowCatOne(1);
          setShowAngry2(false);
        }, 600);
      } else if (catOneMood === 2 || catOneMood === 1) {
        new Audio(angryCatMeow1).play();
        setShowScratch1(true);
        setShowCatOne(2);
        setShowAngry3(true);
        setTimeout(() => {
          setShowScratch1(false);
          setShowCatOne(1);
          setShowAngry3(false);
        }, 300);
      } else if (catOneMood === 3 || catOneMood === 5) {
        setShowPaw2(true);
        setShowAngry1(true);
        setTimeout(() => {
          setShowPaw2(false);
          setShowAngry1(false);
        }, 600);
        new Audio(catMeow1).play();
      } else if (catOneMood === 4) {
        setShowPaw1(true);
        setShowAngry2(true);
        setTimeout(() => {
          setShowPaw1(false);
          setShowAngry2(false);
        }, 600);
        new Audio(catMeow1).play();
      } else {
        new Audio(catMeow3).play();
      }
    }

    if (selectFunction === "lollipop") {
      new Audio(catMeow2).play();
      //KNT feels confused
      setShowQuestion2(true);
      setTimeout(() => {
        setShowQuestion2(false);
      }, 900);
    }

    if (selectFunction === "food2") {
      new Audio(catMeow1).play();
      //KNT feels confused
      setShowQuestion2(true);
      setTimeout(() => {
        setShowQuestion2(false);
      }, 900);
    }

    if (selectFunction === "towel") {
      //KNT feels happy
      setCatOneMood(catOneMood + 1);
      setShowKntHappy(true);
      new Audio(catMeow2).play();
      setTimeout(() => {
        setShowKntHappy(false);
      }, 900);
    }

    if (catOneMood < 0) setCatOneMood(0);
    if (catOneMood > 5) setCatOneMood(5);
  }, 300);

  //Handle click NYT
  const handleClickCatTwo = debounce(() => {
    if (catTwoMood <= 0 || nytFeed >= 5) setEnd(true);
    //Play click sound
    new Audio(click).play();
    //Change image for 0.8s
    setCatTwoSrc(nytTwo);
    setTimeout(() => {
      setCatTwoSrc(nytOne);
    }, 800);

    //function control
    if (selectFunction === "hand") {
      //NYT gets angry a bit
      setCatTwoMood(catTwoMood - 0.5);
      //KNT gets angry too
      setCatOneMood(catOneMood - 1);
      const audio = new Audio(angryCatMeow2);
      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 1000);
      //Show question mark for NYT, show angry1 mark for KNT
      setShowQuestion(true);
      setTimeout(() => {
        setShowQuestion(false);
      }, 900);

      //Mood sound
      if (catTwoMood <= 2) {
        new Audio(angryCatMeow2).play();
      } else if (catTwoMood <= 3) {
        new Audio(catMeow1).play();
      } else if (catTwoMood <= 4) {
        new Audio(catMeow2).play();
      } else {
        new Audio(catMeow3).play();
      }

      //Mood effect for KNT
      if (catOneMood <= 1) {
        setShowAngry3(true);
        setTimeout(() => {
          setShowAngry3(false);
        }, 900);
      } else if (catOneMood === 4 || catOneMood === 2) {
        setShowAngry2(true);
        setTimeout(() => {
          setShowAngry2(false);
        }, 900);
      } else if (catOneMood === 5 || catOneMood === 3) {
        setShowAngry1(true);
        setTimeout(() => {
          setShowAngry1(false);
        }, 900);
      }
    }
    if (selectFunction === "lollipop") {
      setNytFeed(nytFeed + 0.5);
      //NYT gets happy
      setCatTwoMood(catTwoMood + 0.5);
      //NYT gets happy too
      setCatOneMood(catOneMood + 0.6);
      new Audio(catMeow2).play();
      //Show happy mark for both
      setShowNytHappy(true);
      setShowKntHappy(true);
      setTimeout(() => {
        setShowNytHappy(false);
        setShowKntHappy(false);
      }, 900);
    }
    if (selectFunction === "food2") {
      setNytFeed(nytFeed + 1);
      //NYT gets happy
      setCatTwoMood(catTwoMood + 1);
      //NYT gets happy too
      setCatOneMood(catOneMood + 1.1);
      new Audio(catMeow1).play();
      //Show happy mark for both
      setShowNytHappy(true);
      setShowKntHappy(true);
      setTimeout(() => {
        setShowNytHappy(false);
        setShowKntHappy(false);
      }, 900);
      setTimeout(() => {
        setShowNytHappy(false);
      }, 900);
    }
    if (selectFunction === "towel") {
      //Show question mark
      setShowQuestion(true);
      new Audio(catMeow2).play();
      setTimeout(() => {
        setShowQuestion(false);
      }, 900);
    }

    if (catOneMood < 0) setCatOneMood(0);
    if (catTwoMood < 0) setCatTwoMood(0);
    if (catOneMood > 5) setCatOneMood(5);
    if (catTwoMood > 5) setCatTwoMood(5);
  }, 300);

  const handleClickStart = () => {
    setStart(true);
    new Audio(menuClick).play();
  };

  const handleClickReStart = () => {
    new Audio(menuClick).play();
    window.location.reload();
  };

  const getKNTHeartImage = (mood) => {
    mood = Math.floor(mood);
    let heartImage;
    switch (true) {
      case mood >= 5:
        heartImage = kntHeart5;
        break;
      case mood <= 0:
        heartImage = kntHeart0;
        break;
      case mood === 1:
        heartImage = kntHeart1;
        break;
      case mood === 2:
        heartImage = kntHeart2;
        break;
      case mood === 3:
        heartImage = kntHeart3;
        break;
      case mood === 4:
        heartImage = kntHeart4;
        break;
      default:
        heartImage = kntHeart5;
        break;
    }
    return heartImage;
  };

  const handleFunctionOnClick = (type) => {
    //Play click sound
    new Audio(click).play();
    setSelectFunction(type);
  };

  const isFunctionSelected = (functionName) => {
    return selectFunction === functionName;
  };

  return (
    <OuterContainer>
      <Container>
        {!end ? (
          <MainPanel start={start} bg={bg} startBG={startBG}>
            {start ? (
              <>
                <BGAudioPlayer src={bgMusic} start={start} />
                <FixedUI src={fixedUI} alt="Fixed UI" />
                {/* Characters */}
                <CatTwo
                  src={catTwoSrc}
                  alt="catTwo"
                  onClick={handleClickCatTwo}
                />
                {showCatOne === 1 && (
                  <CatOne
                    src={kntOne}
                    alt="catOne"
                    onClick={handleClickCatOne}
                  />
                )}
                {showCatOne === 2 && (
                  <CatOne2
                    src={kntTwo}
                    alt="catOne"
                    onClick={handleClickCatOne}
                  />
                )}
                {showCatOne === 3 && (
                  <CatOne3
                    src={kntThree}
                    alt="catOne"
                    onClick={handleClickCatOne}
                  />
                )}
                {/* Status */}
                <Frame src={frame} alt="frame" />
                <Hand
                  src={hand}
                  alt="hand"
                  onClick={() => {
                    handleFunctionOnClick("hand");
                  }}
                  selected={isFunctionSelected("hand")}
                />
                <Lollipop
                  src={lollipop}
                  alt="lollipop"
                  onClick={() => handleFunctionOnClick("lollipop")}
                  selected={isFunctionSelected("lollipop")}
                />
                <Food2
                  src={food2}
                  alt="food2"
                  onClick={() => {
                    handleFunctionOnClick("food2");
                  }}
                  selected={isFunctionSelected("food2")}
                />
                <Towel
                  src={towel}
                  alt="towel"
                  onClick={() => {
                    handleFunctionOnClick("towel");
                  }}
                  selected={isFunctionSelected("towel")}
                />
                <CatOneHeart
                  src={getKNTHeartImage(catOneMood)}
                  alt="catOneHeart"
                  mood={catOneMood}
                />
                <CatTwoHeart
                  src={getKNTHeartImage(catTwoMood)}
                  alt="catOneHeart"
                  mood={catTwoMood}
                />
                <Angry1 src={angry1} alt="Angry1" show={showAngry1} />
                <Angry2 src={angry2} alt="Angry2" show={showAngry2} />
                <Angry3 src={angry3} alt="Angry3" show={showAngry3} />
                <QuestionMark
                  src={question}
                  alt="question"
                  visible={showQuestion}
                />
                <QuestionMark2
                  src={question2}
                  alt="question2"
                  visible={showQuestion2}
                />
                <NytHappy
                  src={nytHappy}
                  alt="NytHappy"
                  visible={showNytHappy}
                />
                <KntHappy
                  src={kntHappy}
                  alt="kntHappy"
                  visible={showKntHappy}
                />
                <Paw1 src={paw1} alt="paw1" show={showPaw1} />
                <Paw2 src={paw2} alt="paw2" show={showPaw2} />
                <Scratch1 src={scratch1} alt="scratch1" show={showScratch1} />
                <Scratch2 src={scratch2} alt="scratch2" show={showScratch2} />
              </>
            ) : (
              <div>
                <StartButton
                  src={startButton}
                  alt="StartButton"
                  onClick={handleClickStart}
                />
                <CloseButton src={closeButton} alt="CloseButton" />
              </div>
            )}
          </MainPanel>
        ) : (
          <EndPanel he={nytFeed >= 5} HEBG={nytFeed >= 5 ? he : be} BEBG={be}>
            <RestartButton
              src={reStartButton}
              alt="RestartButton"
              onClick={handleClickReStart}
            />
          </EndPanel>
        )}
      </Container>
      {/* {renderHand()} */}
    </OuterContainer>
  );
};

export default FirstPage;
