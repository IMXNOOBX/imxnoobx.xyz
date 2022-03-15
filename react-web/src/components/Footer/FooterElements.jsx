import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Foot = styled.div`
  position: absolute;
  width: 1000px;

  bottom: 0;
  background: #242424;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  transition: height 0.2s ease-in-out;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Linkns = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  margin-right: 24px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 300px) {
    opacity: 0;
    
  }
  @media screen and (max-width: 280px) {
    display: none;
  }
`;
export const To = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const IconTo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const Img = styled.img`
  height: 40px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
