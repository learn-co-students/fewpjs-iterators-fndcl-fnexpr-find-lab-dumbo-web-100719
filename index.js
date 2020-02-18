superbowlWin = (record) => {

  let result = record.find(record => record.result === "W")
  // console.log(result)
     return result ?  result.year :  undefined
}
