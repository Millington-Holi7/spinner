  const characters = ['|   ', '/   ', '-   ', '\\  '];
  const delay =  200; // Delay between each character in milliseconds

  for (const char of characters) {
    setTimeout(() => {
    process.stdout.write('\r' + char);
  }, delay);
  }
  // Move to the next line after the animation
  process.stdout.write('\n');

