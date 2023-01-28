import styled from 'styled-components'

const Wrapper = styled.section`
  ul {
    @media (min-width: 933px) {
      flex-direction: row;
      text-align: start;
      margin-left: 1vw;
      margin-right: 1vw;
    }
    text-align: center;
    padding: 2vw;
    margin-bottom: 0;
    display: flex;
    gap: 50px;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    //same box shadow as the rest i think
    box-shadow: rgba(0, 0, 0, 0.35) 15px 25px 55px 50px;
  }

  li {
    //purple
    background-color: rgba(191, 85, 236, 0.6);
    box-shadow: rgba(255, 255, 255, 0.7) 0px -10px 20px 10px, inset rgba(0, 0, 0, 0.4) 0px 0px 8px 4px;
  }

  .main {
    margin-bottom: calc(100px + 5vw);
  }

  .content {
    gap: 100px;
    @media (min-width: 933px) {
      flex-direction: row;
      gap: 0;
    }
    margin-bottom: 100px;
    @media (min-width: 550px) {
      margin-bottom: 250px;
    }
    padding: 2vw;
    display: flex;
    position: relative;
    //same as between cards
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    //guess its the same as the others
    box-shadow: rgba(255, 255, 255, 0.7) 0px -10px 20px 10px;
    border-radius: 10px;
    margin-left: 1vw;
    margin-right: 1vw;
    //same as hero
    background-color: rgba(0, 0, 0, 0.4);
  }

  .insta, .menu {
    position: relative;
    margin-right: 0;
  }

  .insta {
    box-shadow: 0 0 35px 20px rgba(255,225,0,1);
  }

  .menu {
    box-shadow: 0 0 8px 6px rgba(40,155,255,1), inset 0 0 80px 16px rgba(40,155,255,1);
  }

  a {
    z-index: 1;
    position: absolute;
  }

  .insta > a {
    transform: rotate(-60deg);
    top: 50px;
    left: -60px;
  }

  .menu > a {
    transform: rotate(40deg);
    bottom: 50px;
  }

`

export default Wrapper