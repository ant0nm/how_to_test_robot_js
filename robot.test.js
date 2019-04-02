const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  const needsRepairs = true;
  const isForeign = true;
  const isVintage = true;
  const robot = newRobot(needsRepairs, isForeign, isVintage);
  const expectation = 1;
  // act
  const result = station(robot);
  // assert
  expect(result).toBe(expectation);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  const needsRepairs = true;
  const isForeign = false;
  const isVintage = true;
  const robot = newRobot(needsRepairs, isForeign, isVintage);
  const expectation = 2;
  // act
  const result = station(robot);
  // assert
  expect(result).toBe(expectation);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  const needsRepairs = true;
  const isForeign = false;
  const isVintage = false;
  const robot = newRobot(needsRepairs, isForeign, isVintage);
  const expectation = 3;
  // act
  const result = station(robot);
  // assert
  expect(result).toBe(expectation);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  const needsRepairs = false;
  const isForeign = true;
  const isVintage = true;
  const robot = newRobot(needsRepairs, isForeign, isVintage);
  const expectation = 4;
  // act
  const result = station(robot);
  // assert
  expect(result).toBe(expectation);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  const needsRepairs = false;
  const isForeign = true;
  const isVintage = false;
  const robot = newRobot(needsRepairs, isForeign, isVintage);
  const expectation = -1;
  // act
  const result = prioritizeTasks(robot);
  // assert
  expect(result).toBe(expectation);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const needsRepairs = false;
  const isForeign = true;
  const isVintage = false;
  const robot = newRobot(needsRepairs, isForeign, isVintage);
  robot.todos.push(1);
  robot.todos.push(55);
  robot.todos.push(100);
  const expectation = 100;
  // act
  const result = prioritizeTasks(robot);
  // assert
  expect(result).toBe(expectation);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  const needsRepairs = false;
  const isForeign = true;
  const isVintage = false;
  const robot = newRobot(needsRepairs, isForeign, isVintage);
  robot.dayOff = 'Monday';
  const expectation = false;
  // act
  const result = isWorkday(robot, 'Monday');
  // assert
  expect(result).toBe(expectation);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  const needsRepairs = false;
  const isForeign = true;
  const isVintage = false;
  const robot = newRobot(needsRepairs, isForeign, isVintage);
  robot.dayOff = 'Monday';
  const expectation = true;
  // act
  const result = isWorkday(robot, 'Tuesday');
  // assert
  expect(result).toBe(expectation);
});
