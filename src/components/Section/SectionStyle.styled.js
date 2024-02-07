import styled from 'styled-components';

export const SectionStyle = styled.section`
  font-size: 24px;
  line-height: 1.3;
  font-weight: 400;
  margin-top: 50px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 32px;
  padding-left: 32px;

  button {
    padding: 8px 12px;
    background: #fff;
    border: 1px solid #00000050;
    border-radius: 4%;
    transition: border-color 0.3s ease-in-out;
    cursor: pointer;
    font-size: 18px;
    line-height: 1.5;
    margin-right: 10px;
    &:hover,
    &:focus {
      border-color: blue;
    }
  }
`;
