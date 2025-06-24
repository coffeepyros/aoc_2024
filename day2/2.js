// ADVENT OF CODE - DAY 2
import { loadFile } from "../utils";

const reports = await loadFile("./test.input");

// Trying out the check for ONE report first
// const reportLevels = reports[1].split(" ");

let safeReports = 0;

reports.forEach((reportString) => {
  const reportLevels = reportString.split(" ");
  // using flag "direction" to remember if the previous step
  // was increasing (1) or decreasing (-1)
  let direction;
  let oldDirection;
  let safeFlag = true;

  for (let i = 1; i < reportLevels.length; i++) {
    // after first comparision remember old directions
    if (i > 1) oldDirection = direction;

    if (reportLevels[i - 1] < reportLevels[i]) direction = 1;
    else if (reportLevels[i - 1] > reportLevels[i]) direction = -1;

    console.log(i, reportLevels[i - 1], reportLevels[i], direction);

    // a report is SAFE if all levels are ALL increasing, or decreasing
    // two adjacent levels >= 1 difference or <= 3
    const diff = Math.abs(reportLevels[i - 1] - reportLevels[i]);
    if (diff < 1 || diff > 3 || (i > 1 && direction != oldDirection)) {
      safeFlag = false;
      break;
    }
  }
  if (safeFlag) safeReports++;

  console.log(safeFlag, safeReports);
});
