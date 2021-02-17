import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import LocationInfo from '../../../components/ui/location_info'
import { locationDefaultProps } from '../../../helpers/common_prop_types'

// eslint-disable-next-line max-lines-per-function
describe('Testing LocationInfo component', () => {
  let rendered

  test('should render location info with placeholders (no location data passed)', () => {
    const title = 'Location title'
    rendered = render(<LocationInfo title={title} />)
    expect(rendered.getByText(title)).toBeVisible()
    Object.keys(locationDefaultProps).forEach(key => {
      const value = locationDefaultProps[key]
      if (typeof value === 'string') expect(rendered.getByText(value)).toBeVisible()
      else expect(rendered.queryByText(key)).toBeNull()
    })
  })

  test('should render location info with placeholders only on dimension and name', () => {
    const title = 'Location title'
    const type = 'Far Far Away Galaxy'
    const residents = [{ id: 1 }, { id: 2 }, { id: 3 }]
    rendered = render(<LocationInfo title={title} location={{ type, residents }} />)
    expect(rendered.getByText(title)).toBeVisible()
    expect(rendered.getByText(type)).toBeVisible()
    expect(rendered.getByText(`${residents.length} residents`)).toBeVisible()
    expect(rendered.getByText(locationDefaultProps.dimension)).toBeVisible()
    expect(rendered.getByText(locationDefaultProps.name)).toBeVisible()
  })

  test('should render location info with all data filled', () => {
    const title = 'Location title'
    const type = 'Far Far Away Galaxy'
    const dimension = 'Some other dimension'
    const name = 'Cool Planet Name'
    const residents = [{ id: 1 }, { id: 2 }, { id: 3 }]
    rendered = render(
      <LocationInfo
        title={title}
        location={{ type, residents, name, dimension }}
      />
    )
    expect(rendered.getByText(title)).toBeVisible()
    expect(rendered.getByText(type)).toBeVisible()
    expect(rendered.getByText(`${residents.length} residents`)).toBeVisible()
    expect(rendered.getByText(dimension)).toBeVisible()
    expect(rendered.getByText(name)).toBeVisible()
  })
})
