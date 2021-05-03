import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

interface AnimationProps {
}

const AnimationWrapper = styled(motion.div)`
    width: 100%;
`;

const Animation = (props: PropsWithChildren<AnimationProps>) => {
  const { children } = props;
  return (
    <AnimationWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}> 
        {children}
    </AnimationWrapper>
    );
};

export default Animation;