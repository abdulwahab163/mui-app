import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  Typography,
  Avatar,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";

import CallToAction from "./ui/CallToAction";

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5em",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function About({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{
          marginTop: "3em",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person. We want to help business capitalize on
          the latest and greatest technology. The best wat to predic the future
          is to be the one bulding it, We want to help business capitalize on
          the latest and greatest technology. The best wat to predic the future
          is be the one bulding it,
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{
          marginTop: "10em",
          marginBottom: "10em",
        }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid in the block
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Founded in 2019,we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren't all business using
                avaliable technology? There are many differnet answers to that
                question: economis barrier, social barrier, educational
                barriers, and sometimes institutional sometimes institutional
                barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                we aim to be powerful force in overcoming these obstacles.
                Recent developments in There are many differnet answers to that
                question: economis barrier, social barrier, educational
                barriers, and sometimes institutional barriers.There are many
                differnet answers to that question: economis barrier, social
                barrier, educational barriers, and sometimes institutional
                barriers.differnet answers to that question: economis barrier,
                social barrier.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="history"
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basi coding from a library book in the third
                grade, and ever since then my passion hass solely been sete on
                learning - learning about computers, learning mathematics and
                philosophy, studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                now i'm ready to apply everything I've learned, and to help
                other with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            align={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item>
              <img
                src={yearbook}
                alt="yearbook page about"
                style={{ maxHeight: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basi coding from a library book in the third
                grade, and ever since then my passion hass solely been sete on
                learning - learning about computers, learning mathematics and
                philosophy, studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                now i'm ready to apply everything I've learned, and to help
                other with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            align={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src={puppy}
                alt="grey spotted puppy"
                style={{ maxHeight: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dashshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Call To Action Block */}
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
