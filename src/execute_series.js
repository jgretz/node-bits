const execute = (arr, index, resolve, reject) => {
  if (index >= arr.length) {
    resolve();
    return;
  }

  const task = arr[index];
  task()
    .then(() => { execute(arr, index + 1, resolve, reject); })
    .catch((err) => { reject(err); });
};

export const executeSeries = (arr) => {
  return new Promise((resolve, reject) => {
    execute(arr, 0, resolve, reject);
  });
};
