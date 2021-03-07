import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function Bar(props) {
  const classes = useStyles();


  React.useEffect(() => {
    setProgress5((oldProgress) => {
      if (oldProgress === 100) {
        return 0;
      }
      const diff = props.count1 * 100;
      return Math.min(oldProgress + diff, 100);
    });
    setProgress4((oldProgress) => {
      if (oldProgress === 100) {
        return 0;
      }
      const diff = 50;
      return Math.min(oldProgress + diff, 100);
    });
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <LinearProgress list={props.list} variant="determinate" value={70} />
      </div>
      <div>
        <LinearProgress variant="determinate" value={80} />
      </div>
      <div>
        <LinearProgress variant="determinate" value={30} />
      </div>
      <LinearProgress variant="determinate" value={20} />

      <LinearProgress variant="determinate" value={50} />
    </div>
  );
}
