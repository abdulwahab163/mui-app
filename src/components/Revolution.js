import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

import technologyAnimation from "../animations/technologyAnimation/data";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function Revolution() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="vision through"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Thr rise of computers, and subsequently the Internet, has
              completely altered very aspect of human life. This has increased
              our comfort, broadened our connections,and reshaped how we view
              the world.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              What once was confined to huge rooms and terms of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We want to help business capitalize on the latest and greatest
              technology. The best wat to predic the future is to be the one
              bulding it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tool necesary to thrive
              in this new frontier.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We see a future where every individual has personalized softare
              custom tailored to thier lifestyle, culture, and interest, helping
              them overcome life's obstacles. Each project is a step towards
              that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Technology
            </Typography>
            <Grid />
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                In 2013, Facebook invented a new way of building websites. This
                new system, React.js, completely revolutionizes the process and
                practice of website development.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                What once was confined to huge rooms and terms of engineers now
                resides in every single one of our hands. Harnessing this
                unlimited potential by using it to solve problems and better
                lives is at the heart of everything we do.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We want to help business capitalize on the latest and greatest
                technology. The best wat to predic the future is to be the one
                bulding it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                By holding ourselves to rigorous standards and pristine quality,
                we can ensure you have the absolute best tool necesary to thrive
                in this new frontier.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We see a future where every individual has personalized softare
                custom tailored to thier lifestyle, culture, and interest,
                helping them overcome life's obstacles. Each project is a step
                towards that goal.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                The best wat to predic the future is to be the one bulding it,
                and we want to help guide the world into this next chapter of
                technological expansion, exploration, and innovation.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg container justify={matchesMD ? "center" : "flex-end"}>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Processes
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "3.5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Our technology enables a innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place. This allow you to extend your reach, reinvent
              interactions, and develop a stronger relationship with your users
              than ever before.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
              Putting everything you need right in one convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Putting everything you need right in one convenient place. This
              allow you to extend your reach, reinvent interactions.This allow
              you to extend your reach, reinvent interactions, and develop a
              stronger relationship with your users.and develop a stronger
              relationship with your users.and develop a stronger relationship
              with your users.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={consultation}
            alt="handshake"
            width="100%"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FF7373", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Our technology enables a innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place. This allow you to extend your reach, reinvent
              interactions, and develop a stronger relationship with your users
              than ever before.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
              Putting everything you need right in one convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Putting everything you need right in one convenient place. This
              allow you to extend your reach, reinvent interactions.This allow
              you to extend your reach, reinvent interactions, and develop a
              stronger relationship with your users.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={mockup}
            alt="website design"
            width="100%"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: "3.5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Our technology enables a innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place. This allow you to extend your reach, reinvent
              interactions, and develop a stronger relationship with your users
              than ever before.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
              Putting everything you need right in one convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Putting everything you need right in one convenient place. This
              allow you to extend your reach, reinvent interactions.This allow
              you to extend your reach, reinvent interactions, and develop a
              stronger relationship with your users.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="review" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#A67C52", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: "3.5em" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Our technology enables a innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place. This allow you to extend your reach, reinvent
              interactions, and develop a stronger relationship with your users
              than ever before.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={design}
            alt="design"
            width="100%"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: "3.5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Putting everything you need right in one convenient place. This
              allow you to extend your reach, reinvent interactions.This allow
              you to extend your reach, reinvent interactions, and develop a
              stronger relationship with your users.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FBB038", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: "3.5em" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Our technology enables a innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place. This allow you to extend your reach, reinvent
              interactions, and develop a stronger relationship with your users
              than ever before.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
              Putting everything you need right in one convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Putting everything you need right in one convenient place. This
              allow you to extend your reach, reinvent interactions.This allow
              you to extend your reach, reinvent interactions, and develop a
              stronger relationship with your users.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={build}
            alt="build"
            width="100%"
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#C1272D", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Putting everything you need right in one convenient place. This
              allow you to extend your reach, reinvent interactions.This allow
              you to extend your reach, reinvent interactions, and develop a
              stronger relationship with your users.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={launch}
            alt="rocket"
            width="100%"
            style={{ maxWidth: 200 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "3.5em" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Putting everything you need right in one convenient place. This
              allow you to extend your reach, reinvent interactions.This allow
              you to extend your reach, reinvent interactions, and develop a
              stronger relationship with your users.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={maintain}
            alt="wrench tightening"
            width="100%"
            style={{ maxWidth: 500 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#29ABE2", height: "90em" }}
      >
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: "3.5em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
              extend your reach.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This allow you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
              extend your reach, reinvent interactions.This allow you to extend
              your reach.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Putting everything you need right in one convenient place. This
              allow you to extend your reach, reinvent interactions.This allow
              you to extend your reach.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={iterate} alt="itrate" width="100%" />
        </Grid>
      </Grid>
    </Grid>
  );
}
