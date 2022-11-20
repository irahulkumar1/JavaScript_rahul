function lifeWeek(age) {
  let yearRemainig = 90 - age;
  let days = yearRemainig * 365;
  let weeks = yearRemainig * 52;
  let months = yearRemainig * 12;

  console.log(`you have ${days}, ${weeks}, ${months} left`);
}
export default lifeWeek;
