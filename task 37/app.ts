function make_shirt(
  size: string = "Large",
  printMessage: string = "I love typescript"
) {
  console.log(`Creating a ${size} shirt with the ${printMessage}`);
}
make_shirt()
make_shirt("Medium")
make_shirt("small", "I love java")

