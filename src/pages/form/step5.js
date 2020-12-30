import React, { useEffect } from 'react'
import Form from '../../layout/Form'
import Head from 'next/head'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { useSelector, useDispatch } from 'react-redux'
import { formCounter } from '../../../store/counter/action'
import { logEvent } from '../../utils/tracker'
import { useRouter } from 'next/router'

// Styling
const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiDialogTitle-root': {
      background: theme.palette.cep.primary,
      paddingTop: 20,
      paddingBottom: 20,
      color: '#fff',
      '& h2': {
        fontstyle: 'normal',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: '32px',
        textAlign: 'center',
        color: '#fff',
        marginbottom: 0
      }
    },
    '& .MuiDialogContent-root': {
      paddingTop: '16px',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        paddingLeft: '60px',
        paddingRight: '60px'
      }
    }
  },
  dialogintro: {
    textAlign: 'center',
    margin: '20px 0',
    fontSize: 24,
    lineHeight: '28px',
    color: '#404040'
  },
  formcontrol: {
    width: '100%',
    fontStyle: 'italic',
    color: '#333',
    fontWeight: '700',
    '& .MuiInputBase-formControl': {
      height: 60,
      minHeight: 60,
      lineHeight: '60px'
    },
    '& input': {
      fontWeight: 700,
      fontSize: 21
    },
    '& > div.Mui-error input': {
      color: 'red!important'
    },
    '& fieldset': {
      border: '1px solid #dfdfdf'
    }
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: '27px',
    color: '#474747',
    marginBottom: 15,
    textAlign: 'left'
  },
  mb4: {
    marginBottom: 20
  },
  valid: {
    color: `${theme.palette.secondary.main}`,
    '& input, & .seltext, & .MuiInputBase-input, & .seltext-root, & .MuiInputLabel-root': {
      color: `${theme.palette.secondary.main}`
    },
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.palette.secondary.main}`
      }
    },
    '& fieldset': {
      borderColor: `${theme.palette.secondary.main}`
    }
  },
  submitbutton: {
    fontSize: 25,
    paddingTop: 13,
    paddingBottom: 13,
    fontWeight: 800,
    textTransform: 'unset',
    backgroundColor: theme.palette.cep.secondary,
    color: '#fff',
    marginBottom: 30,
    '&:hover': {
      backgroundColor: '#035AA6'
    }
  }
}))

// Main Page component
export default function Step5(props) {
  const classes = useStyles(props)
  const router = useRouter()
  const state = useSelector((state) => state.counter.form)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(true)

  useEffect(() => {
    ValidatorForm.addValidationRule('auPhone', (phone_num) => {
      const phonePattern = /^0[0-8]\d{8}$/g
      return phonePattern.test(phone_num)
    })
  })

  useEffect(() => {
    logEvent({
      event_type: `Opened Form Step 5`
    })
  }, [])

  // Open Dialog
  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  // Close Dialog
  const handleClose = () => {
    setOpen(false)
  }

  // Handle Submit
  const handleSubmit = () => {
    logEvent({
      event_type: `Submitted Form Step 5`
    })
    router.push(`/form/thankyou`).then(() => window.scrollTo(0, 0))
  }

  // Handle input change
  const handleChange = (e, key) => {
    const { value } = e.target

    dispatch(
      formCounter({
        ...state,
        [key]: value
      })
    )
  }

  return (
    <>
      <Head>
        <title>Compare Health Insurance - Count Every Penny</title>
      </Head>

      {/* DIALOG BOX */}
      <Dialog
        scroll="body"
        open={open}
        disableBackdropClick
        disableEscapeKeyDown
        onClose={handleClose}
        className={classes.dialog}>
        <DialogTitle>{'Almost there.'}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialogintro}>
            Add your details so we can get the best comparison from our panel direct to you.
          </DialogContentText>

          <ValidatorForm instantValidate onSubmit={handleSubmit} key={'profileform'}>
            {/* MY NAME */}
            <div className={`${classes.mb4} ${state.name != '' && classes.valid}`}>
              <InputLabel className={`${classes.label}`} id="age-label">
                My Name Is
              </InputLabel>
              <TextValidator
                validators={['required']}
                errorMessages={['Required']}
                placeholder="Enter my name"
                variant="outlined"
                value={state.name}
                className={`${classes.formcontrol}`}
                onChange={(e) => {
                  handleChange(e, 'name')
                }}
              />
            </div>

            {/* My 10 digit phone number */}
            <div className={`${classes.mb4} ${state.phone != '' && classes.valid}`}>
              <InputLabel className={`${classes.label}`} id="age-label">
                My 10 digit phone number
              </InputLabel>
              <TextValidator
                validators={['required', 'auPhone']}
                errorMessages={['Required', 'Invalid phone number format']}
                placeholder="Enter preferred number"
                variant="outlined"
                value={state.phone}
                className={`${classes.formcontrol}`}
                inputProps={{ maxLength: 10, pattern: '[0-9]', type: 'number' }}
                onChange={(e) => {
                  handleChange(e, 'phone')
                }}
              />
            </div>

            {/* EMAIL */}
            <div className={`${classes.mb4} ${state.email != '' && classes.valid}`}>
              <InputLabel className={`${classes.label}`} id="age-label">
                My email address
              </InputLabel>
              <TextValidator
                validators={['required', 'isEmail']}
                errorMessages={['Required', 'Invalid email address']}
                placeholder="Enter email"
                variant="outlined"
                maxLength={10}
                value={state.email}
                className={`${classes.formcontrol}`}
                onChange={(e) => {
                  handleChange(e, 'email')
                }}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disableElevation
              className={classes.submitbutton}
              fullWidth>
              Show My Quotes
            </Button>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </>
  )
}

Step5.Layout = Form