import React from 'react'
import { render, screen } from '@testing-library/react'
import App from "../App";
import '@testing-library/jest-dom'

describe('Blog Site Tests', () => {
  test('renders Header with blog name', () => {
    render(<App />)
    expect(screen.getByText('My Personal Blog')).toBeInTheDocument()
  })

  test('renders About with image and description', () => {
    render(<App />)
    const img = screen.getByAltText('blog logo')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://via.placeholder.com/150')
    expect(screen.getByText(/Welcome to my personal blog/i)).toBeInTheDocument()
  })

  test('renders ArticleList with all articles', () => {
    render(<App />)
    expect(screen.getByText('My First Blog Post')).toBeInTheDocument()
    expect(screen.getByText('Learning React')).toBeInTheDocument()
    expect(screen.getByText('Building a Blog Site')).toBeInTheDocument()
  })

  test('renders Article with correct props', () => {
    render(<App />)
    expect(screen.getByText('September, 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('September, 6, 2026')).toBeInTheDocument()
    expect(screen.getByText('September, 7, 2026')).toBeInTheDocument()
    expect(screen.getByText(/This is my first blog post/i)).toBeInTheDocument()
    expect(screen.getByText(/I've been learning React/i)).toBeInTheDocument()
    expect(screen.getByText(/I'll walk through building this very blog site/i)).toBeInTheDocument()
  })
})