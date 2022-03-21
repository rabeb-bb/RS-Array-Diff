const RSDiff = (arr1, arr2) => {
  // compare function
  const isSame = (a, b) => a.msgid === b.msgid;
  const isDiff = (a, b) => a.msgid !== b.msgid;

  //extract differences
  const Diff = (one, two, compareFunction) =>
    two.filter((item2) => {
      !one.some((item1) => compareFunction(item2, item1));
    });

  const Similar = (one, two, compareFunction) =>
    two.filter((item2) => one.some((item1) => compareFunction(item2, item1)));

  const added = Diff(arr1, arr2, isSame);
  const deleted = Diff(arr2, arr1, isSame);
  const similar = Similar(arr2, arr1, isSame);

  return {
    added: added,
    deleted: deleted,
    similar: similar,
  };
};

module.exports = RSDiff;
