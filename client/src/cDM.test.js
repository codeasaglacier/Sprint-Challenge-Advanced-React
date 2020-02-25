import React from 'react'
import { render, getByTestId, getByText } from '@testing-library/react'
import Cards from './components/componentDidMount'

test ( 'name is rendered', () => {
  const { getByTestId } = render( <Cards /> )

  const nameText = getByTestId( 'wwcCards' )
  // expect( nameText ).toBeInTheDocument()
} )

test ( 'country is rendered', () => {
  const { getByText } = render( <Cards /> )

  const countryText = getByText( 'Country:' )
} )

test ( 'searches is rendered', () => {
  const { getByText } = render( <Cards /> )

  const countryText = getByText( 'Searches:' )
} )
