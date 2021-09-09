let friends = ["Dan", "Jason", "Blake", "Will", "Ty"];
let songCount = 99;

function singingFriends(friends) {
  let name = "";
  let y = 0;

  for (let i = 0; i < friends.length; i++) {
    name = friends[i];

    for (let x = songCount; x > 0; x--)
      if (x > 1) {
        y = x - 1;

        console.log(
          x +
            " lines of code to write" +
             x +
            " lines of code;" +
             name +
            " strikes one out, leaves a comment" +
             y +
            " lines of code to write"
        );
      } else {
        console.log(
          x +
            " line of code to write" +
             x +
            " more line of code;" +
            name +
            " strikes it out, leaves a comment. No more lines of code left to write"
        );
      }
  }
}

singingFriends(friends);
