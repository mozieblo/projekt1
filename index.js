function playChess() {
    let size = 3;
    let board = "_";

    for (let y = 0; y < size; y++)
    {
        for (let x = 0; x < size; x++)
        {
            if ((x + y) % 2 == 0)
            {
                board += "o";
            } else
            {
                board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);
}
playChess();