function superbowlWin(recordData) {
  const winningRecord = recordData.find((entry) => entry.result === "W");

  if (winningRecord) {
    return winningRecord.year;
  } else {
    return undefined;
  }
}

const data = [
  { year: "2016", result: "N/A" },
  { year: "2017", result: "L" },
  { year: "2018", result: "W" },
  { year: "2019", result: "N/A" },
  { year: "2020", result: "W" },
];

const superbowlWinner = superbowlWin(data);

console.log(superbowlWinner);

