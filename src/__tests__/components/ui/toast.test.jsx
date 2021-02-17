import { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitForElementToBeRemoved, act } from '@testing-library/react'
import Toast from '../../../components/ui/toast'

let toastData
let setToastData

const setup = toast => {
  const MockedComponent = () => {
    [toastData, setToastData] = useState(toast)
    return <Toast toastData={toastData} />
  }

  return render(<MockedComponent />)
}

describe('Testing Toast component', () => {
  let rendered

  test('should render toast immediately and then hide in 4 seconds', async() => {
    const toastData = {
      title: 'Toast Title',
      description: 'That is the toast message'
    }

    rendered = render(<Toast toastData={toastData} />)
    expect(rendered.getByText(toastData.title)).toBeVisible()
    expect(rendered.getByText(toastData.description)).toBeVisible()

    await waitForElementToBeRemoved(rendered.queryByText(toastData.title), { timeout: 5000 })
    expect(rendered.queryByText(toastData.title)).toBeNull()
  })

  test('should wait for data to show toast', async() => {
    rendered = setup()

    expect(rendered.container.querySelector('.notification-container')).toBeNull()
    const toast = {
      title: 'Toast Title',
      description: 'That is the toast message',
      dismissTime: 200
    }

    act(() => {setToastData(toast)})


    expect(rendered.getByText(toast.title)).toBeVisible()
    expect(rendered.getByText(toast.description)).toBeVisible()

    await waitForElementToBeRemoved(rendered.queryByText(toast.title), { timeout: 300 })

    expect(rendered.queryByText(toast.title)).toBeNull()
  })

  test('should show toastData and then show again with new toastData', async() => {
    let toast = {
      title: 'First Toast Title',
      description: 'That is the first toast message',
      dismissTime: 200
    }

    rendered = setup(toast)

    expect(rendered.getByText(toast.title)).toBeVisible()
    expect(rendered.getByText(toast.description)).toBeVisible()


    await waitForElementToBeRemoved(rendered.queryByText(toastData.title), { timeout: 300 })

    expect(rendered.queryByText(toast.title)).toBeNull()

    toast = {
      title: 'Second Toast Title',
      description: 'That is the second toast message',
      dismissTime: 200
    }

    act(() => {setToastData(toast)})

    expect(rendered.getByText(toast.title)).toBeVisible()
    expect(rendered.getByText(toast.description)).toBeVisible()


    await waitForElementToBeRemoved(rendered.queryByText(toastData.title), { timeout: 300 })

    expect(rendered.queryByText(toast.title)).toBeNull()


  })
})