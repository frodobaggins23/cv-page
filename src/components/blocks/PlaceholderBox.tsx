import React from 'react'

type Props = {
    big? : boolean,
}

const smallStyles = {
  height: '250px',
  border: '1px solid blue',
  textAlign: 'center' as const
}

const bigStyles = {
  height: '600px',
  textAlign: 'center' as const
}

const PlaceholderBox = ({ big }:Props) => {
  return (
        <div style={big ? bigStyles : smallStyles}>
            {big ? 'big placeholder' : 'small placeholder'}
        </div>
  )
}

export default PlaceholderBox
