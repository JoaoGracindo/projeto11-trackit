import styled from "styled-components";

const StyledHoje = styled.div`
  background-color: #e5e5e5;
  position: fixed;
  top: 70px;
  bottom: 70px;
  width: 100%;
  z-index: -1;

  .header {
    margin-top: 28px;
    margin-bottom: 28px;
    margin-left:5%;

    h1 {
      font-weight: 400;
      font-size: 22.976px;
      line-height: 29px;
      color: #126ba5;
      margin-bottom:2px;
    }

    h2 {
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;

      color: #bababa;
    }

  }

  .habito {
    width: 90%;
    height: 94px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
    position: relative;

    h1 {
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #666666;
      position: absolute;
      top: 13px;
      left: 5%;
    }

    div{
      position:absolute;
      bottom:17px;
      left:5%;
      font-weight: 400;
      font-size: 12.976px;
      line-height: 16px;

      color: #666666;
    }

    ion-icon {
      font-size:75px;
      color: #ebebeb;
      border-radius: 5px;
      position: absolute;
      top: 13px;
      right: 5%;
    }

  }
`;

export default StyledHoje;