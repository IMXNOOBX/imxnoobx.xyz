import React from "react";
import {
    Foot,
    IconTo,
    To,
    Img,
    Linkns
} from './FooterElements';

import gitCon from '../../assets/github.png';
import twitCon from '../../assets/twitter.png';
import homeCon from '../../assets/home.png';

export default function Footer() {
  return (
    <>
      <Foot>
      <IconTo to='/'>
        <Img src={homeCon} alt='Back Home Icon'/>
      </IconTo>
      <Linkns>
        <To href='https://github.com/IMXNOOBX'>
              <Img src={gitCon} alt='Github icon'/>
        </To>
        <To href='https://twitter.com/IMXNOOBX'>
          <Img src={twitCon} alt='Twitter icon'/>
        </To>
      </Linkns>
      </Foot>
    </>
  );
}
