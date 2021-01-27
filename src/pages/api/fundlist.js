export default (req, res) => {
  res.statusCode = 200
  res.json({
    ahm: {
      2020: '3.27',
      2021: '3.25'
    },
    ACA: {
      2020: '3.94',
      2021: '3.54'
    },
    'Australian Unity': {
      2020: '2.79',
      2021: '1.99'
    },
    BUPA: {
      2020: '3.26',
      2021: '3.21'
    },
    GMHBA: {
      2020: '3.34',
      2021: '3.24'
    },
    HBF: {
      2020: '1.98',
      2021: '0.94'
    },
    'health.com.au': {
      2020: '3.94',
      2021: '0.83'
    },
    HCF: {
      2020: '3.39',
      2021: '2.95'
    },
    Latrobe: {
      2020: '3.49',
      2021: '3.42'
    },
    Medibank: {
      2020: '3.27',
      2021: '3.25'
    },
    NIB: {
      2020: '2.90',
      2021: '4.36'
    },
    "Average / I don't have a fund": {
      2020: '2.92',
      2021: '2.74'
    }
  })
}