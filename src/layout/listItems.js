import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import DescriptionIcon from '@material-ui/icons/Description'
import PostAddIcon from '@material-ui/icons/PostAdd'
import AssignmentIcon from '@material-ui/icons/Assignment'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListSubheader inset>Articles</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="All Articles" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PostAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Articles" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
)