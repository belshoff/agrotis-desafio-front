import React from 'react'
import styled from 'styled-components'

// const _header = ( { className, children } ) => {
//   return (
//     <header className={className}>
//       { children }
//     </header>
//   )
// }

export const Header = {
  width: '100vw',
  height: '4rem',
  backgroundColor: '#145e43',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 1rem',
  color: 'white',
}

const divFooter = ( { className, children } ) => (
  <div className={className} >{children}</div>
)

export const Footer = styled(divFooter)`
  display: flex;
  flex-direction: row-reverse;
`
// {
//   color: 'white',
//   fontSize: '1rem',
//   fontWeight: 'bolder',
//   backgroundColor: '#b45f06'
// }

const btn = ( { className, children } ) => (
  <button className={className} >
    { children }
  </button>
)


export const Button = styled(btn)`
  color: white;
  font-weight: bolder;
  border: none;
  font-size: 3rem;
  margin: 1rem;
  border-radius: 3px;
  padding: 0px 1.25rem;
  background-color: #b45f06;
`;

export const Container = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
`
