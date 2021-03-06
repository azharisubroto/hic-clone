import { FORM4 } from './type'

const initialState = {
  server: '',
  client: '',
  form: {
    step_passed: 0,
    lifestage: '',
    cover_type: '',
    primary_health_cover: 'Select One',
    fund: 'Select One',
    yob: '',
    postcode: '',
    name: '',
    phone: '',
    email: ''
  }
}

// Creating my reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FORM4:
      return { ...state, form: action.payload }
    default:
      return state
  }
}
