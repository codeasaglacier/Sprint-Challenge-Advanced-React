import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Cards from './components/componentDidMount'

test ( 'name, country, searches are rendered', () => {
  const { getByTestId } = render( <Cards /> )

  const nameText = getByTestId( /someName/i )
  expect( nameText ).toBeInTheDocument()
} )
