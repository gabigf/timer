const args  = process.argv.slice(2);

const timer = secs => {
  for (let val of secs) {
    if (val > 0 && typeof val === 'number') {
      let delay = Number(val + '000');
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    }
  }
};

timer(args);