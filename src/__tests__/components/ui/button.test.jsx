import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Button from '../../../components/ui/button'

describe('Testing Button component', () => {
  let rendered

  test('should render button only with text and aria label', () => {
    const text = 'submit button'
    rendered = render(<Button text={text} />)
    const buttonElem = rendered.getByRole('button')
    expect(buttonElem).toBeVisible()
    expect(buttonElem.textContent).toBe(text)
    expect(buttonElem.getAttribute('aria-label')).toBe(`${text} button`)
  })

  test('should render button with className', () => {
    const text = 'submit button'
    const className = 'buttonClass'
    rendered = render (<Button text={text} type="submit" className={className} />)
    const buttonElem = rendered.getByRole('button')
    expect(buttonElem).toBeVisible()
    expect(buttonElem.classList.contains(className)).toBe(true)
  })

  test('renders button with custom onClick', () => {
    const text = 'submit button'
    const onClick = jest.fn()
    rendered = render (<Button text={text} onClick={onClick} />)
    fireEvent.click(rendered.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})