import Timer from 'timer-machine-node';
import { log } from './log';

const DEFAULT_TIMER = 'DEFAULT_TIMER';

export const startTimer = (timer = DEFAULT_TIMER, logMethod = log) => {
  Timer.get(timer).start();

  if (logMethod) {
    logMethod(`Timer '${timer}'' started.`);
  }
};

export const toggleTimer = (timer = DEFAULT_TIMER, logMethod = log) => {
  Timer.get(timer).toggle();

  if (logMethod) {
    logMethod(`Timer '${timer}'' toggled at ${Timer.get(timer).time()}.`);
  }
};

export const stopTimer = (timer = DEFAULT_TIMER, logMethod = log) => {
  Timer.get(timer).stop();

  if (logMethod) {
    logMethod(`Timer '${timer}'' stopped at ${Timer.get(timer).time()}.`);
  }
};
