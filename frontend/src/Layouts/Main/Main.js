import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// VIEWS
import GameComponent from './code-breaker-game/code-breaker';

import { Switch, Route, Redirect } from "react-router-dom";

// import { useSnackbar } from 'notistack';

const useStyles = makeStyles({
  list: { width: 250 },
  fullList: { width: 'auto' },
  menuButton: {
    marginRight: "12px",
  },
  title: {
    flexGrow: 1,
  },
});

export default function MainLayout(props) {
  // const { location } = props;
  const classes = useStyles();

  return (
    <div>
      <React.Fragment key={"left"}>

        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
              Code breaker Game
            </Typography>

          </Toolbar>
        </AppBar>

        {/* BODY */}
        <main>
          <div />
          <Switch>
            <Redirect exact path="/main" to="/main/game" />
            <Route path="/main/game" exact render={(props) => <GameComponent {...props} />} />
            {/* redirect to 404 */}
            <Redirect to=""></Redirect>

          </Switch>
        </main>
        {/* BODY */}

      </React.Fragment>

    </div>
  );
}