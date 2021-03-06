import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@/components/Card'

export default function AwardBox({ maxWidth, ...rest }) {
  //const classes = useStyles(props)
  return (
    <Box {...rest} pt={5} pb={5} style={{ background: '#fff' }}>
      <Container style={{ maxWidth: maxWidth ? maxWidth : 1120 }}>
        <Grid item xs={12}>
          <Card padding="0">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box pr={2}>
                <img src="/static/img/form/gold-award.png" alt="" width="171" height="151" />
              </Box>
              {Array.apply(null, {
                length: 7
              }).map((e, i) => (
                <Box px={1} key={'award-' + i}>
                  <img src={'/static/img/form/award-' + parseInt(i + 1) + '-1.png'} width="94" height="94" alt="" />
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Container>
    </Box>
  )
}
