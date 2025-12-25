'use client';
import React from 'react';
import styled, { css } from 'styled-components';

/* =======================
   Tipagens
======================= */

type UnlockEffect = 'rotateX' | 'rotate';
type LockState = 'open' | 'closed';

interface PadlockStyleProps {
  unlockEffect?: UnlockEffect;
  bgColor: string;
  w: number | string;
  h: number | string;
  latchHeight: number | string;
  latchWidth: number | string;
  state: LockState;
}

interface PadlockProps {
  unlockEffect?: UnlockEffect;
  color: string;
  width: number | string;
  height: number | string;
  latchHeight: number | string;
  latchWidth: number | string;
  state : 'open' | 'closed'
}

/* =======================
   Utils
======================= */

function formatSize(value: number | string): string {
  return typeof value === 'number' ? `${value}px` : value;
}

function getOpenStyles(props: PadlockStyleProps) {
  return css`
    transform: ${
      props.unlockEffect === 'rotateX'
        ? 'scaleX(-1)'
        : 'rotate(-45deg)'
    };
    bottom: 130%;
    left: -${props.unlockEffect === 'rotateX' ? 55 : 25}%;
  `;
}

/* =======================
   Styled Component
======================= */

const PadlockIcon = styled.span<PadlockStyleProps>`
  border: 3px solid ${({ bgColor }) => bgColor};
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0;
  padding: 0;
  position: relative;
  transition: all 0.1s ease-in-out;
  width: ${({ w }) => formatSize(w)};
  height: ${({ h }) => formatSize(h)};

  &::after {
    background: ${({ bgColor }) => bgColor};
    content: '';
    display: block;
    height: 7px;
    left: 42%;
    position: absolute;
    top: 35%;
    transition: all 0.1s ease-in-out;
    width: 3px;
  }

  &::before {
    border: 3px solid ${({ bgColor }) => bgColor};
    border-bottom: 0;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    bottom: 100%;
    content: '';
    display: block;
    height: ${({ latchHeight }) => formatSize(latchHeight)};
    left: 7%;
    position: absolute;
    transition: all 0.1s ease-in-out;
    width: ${({ latchWidth }) => formatSize(latchWidth)};
    ${({ state, ...props }) =>
      state === 'open' && getOpenStyles(props as unknown as PadlockStyleProps)};
  }

  &:hover::before {
    ${({ state }) => state === 'closed' && 'height: 12px'};
  }
`;

/* =======================
   Component
======================= */


export function Padlock({
  unlockEffect,
  color,
  width,
  height,
  latchHeight,
  latchWidth,
  state,
}: PadlockProps) {

  return (
    <PadlockIcon
      unlockEffect={unlockEffect}
      bgColor={color}
      w={width}
      h={height}
      latchHeight={latchHeight}
      latchWidth={latchWidth}
      state={state}
    />
  );
}
