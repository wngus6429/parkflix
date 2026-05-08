import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 18px;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  max-width: 720px;
  width: 100%;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
