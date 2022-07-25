import styled from 'styled-components';


export const SMain = styled.div`
    cursor: url("https://raw.githubusercontent.com/IMXNOOBX/imxnoobx.github.io/main/mouse/default.svg"), auto;
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);/*background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);*/
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @media (max-width:650px){

        h1 {
          font-size: 500%;
        }
      
        ul {
          width: 400px;
        }
      
        ul li a{
            padding: 0 25px;
          z-index: 1000;
        }
      
        ul li a {
          font-size: 1.75em;
        }
      
      }
      
      @media (max-width:400px){
      
        h1 {
          font-size: 400%;
        }
      
        ul {
          width: 350px;
        }
      
        ul li a{
          padding: 0 20px;
          z-index: 1000;
        }
      
        ul li a {
          font-size: 1.5em;
        }
      
      }
`;

export const NoSelect = styled.div`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const ContainerFluid = styled.div`
    text-align: center;
    height: 200px;
    width: 100%;

    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;

export const CoolEffect = styled.div`
    font-size: 100px;
    color: #fff;
    span {
        transition: 0.5s;
    }
    &:hover span:nth-child(1){
        margin-right: 5px;
    }
    &:hover span:nth-child(1):after{
        content: "'";
    }
    &:hover span:nth-child(2){
        margin-left: 20px;
    }
    &:hover span{
        color: #fff;
        text-color: #fff;
        text-shadow: 0 0 10px #fff,
                        0 0 20px #fff,
                        0 0 40px #fff,
                        0 0 80px #fff,
                        0 0 120px #fff,
                        0 0 160px #fff;
    }
`;

export const CoolEffectSpan = styled.span`
    font-size: 100px;
    &:hover {
        &:span:nth-child(1) {
            margin-right: 5px;
        }
    }
    &:hover {
        &:span:nth-child(1):after {
            content: "'";
        }
    }
    &:hover {
        &:span:nth-child(2){
            margin-left: 20px;
        }
    }
    &:hover {
        &:span{
            color: #fff;
            text-shadow: 0 0 10px #fff,
                         0 0 20px #fff,
                         0 0 40px #fff,
                         0 0 80px #fff,
                         0 0 120px #fff,
                         0 0 160px #fff;
        }
    }
`;