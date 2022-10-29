export class Board{
    createBoard(){
        // create a board
        let canvas = document.getElementById('board') as HTMLCanvasElement;
        console.log(canvas);
        return canvas;
    }
}