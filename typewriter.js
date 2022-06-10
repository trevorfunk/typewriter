const sentence = "hello there from lighthouse labs";

time = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  },  time);
  time += 100;
}

