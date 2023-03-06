import React from 'react'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

it('Renders <Todo />', () => {
  const todo = {
    text: 'Sample text',
    done: false,
  }
  render(
    <Todo todo={todo} onClickComplete={() => {}} onClickDelete={() => {}} />
  )
  expect(screen.getByText('Sample text')).toBeInTheDocument()
})
