import { useNode } from '@craftjs/core'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import ArticleAuthor from '@/components/Articles/ArticleAuthor'
import React from 'react'

export const Author = ({ avatar, name, date }) => {
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <ArticleAuthor avatar={avatar} name={name} date={date} />
    </div>
  )
}

export const ArticleAuthorSettings = () => {
  const {
    actions: { setProp },
    avatar,
    name,
    date
  } = useNode((node) => ({
    avatar: node.data.props.avatar,
    name: node.data.props.name,
    date: node.data.props.date
  }))

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Author Name</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={name}
          onChange={(e) => setProp((props) => (props.name = e.target.value))}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Avatar Image url</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={avatar}
          onChange={(e) => setProp((props) => (props.avatar = e.target.value))}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Date</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={date}
          onChange={(e) => setProp((props) => (props.date = e.target.value))}
        />
      </FormControl>
    </div>
  )
}

export const ArticleAuthorDefaultProps = {
  avatar: 'Audrea B.',
  name: '/static/img/audrea.webp',
  date: '10th February 2021'
}

Author.craft = {
  props: ArticleAuthorDefaultProps,
  related: {
    settings: ArticleAuthorSettings
  }
}
