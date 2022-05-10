import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BoardService {


  private initBoard = [
    {
      id: 1,
      title: 'To Do',
      color: '#e92c62',
      list: [
        {
          id: 1,
          text: 'Example card item',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'Some comment'
            }
          ]
        },
        {
          id: 2,
          text: 'Example card item 222',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'Some comment'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      color: 'green',
      list: [
        {
          id: 2,
          text: 'Example card item',
          like: 3,
          comments: [
            {
              id: 1,
              text: 'Some comment'
            },
            {
              id: 2,
              text: 'Some comment'
            },
            {
              id: 3,
              text: 'Some comment'
            }
          ]
        }
      ]
    }

  ]

  private board: any[] = this.initBoard
  private board$ = new BehaviorSubject<any[]>(this.initBoard)

  getBoard$() {
    return this.board$.asObservable()
  }

  // changeLike(cardId: number, columnId: number, increase: boolean){
  //   this.board = this.board.map((column) => {
  //     if (column.id === columnId) {
  //       const list = column.list.map((card) => {
  //         if(card.id === cardId) {
  //           if (increase) {
  //             card.like++;
  //           } else {
  //             if (card.like > 0) {
  //               card.like--;
  //             }
  //           }
  //         }
  //         return card;
  //       });
  //       column.list = list;
  //       return column;
  //     } else {
  //       return column;
  //     }
  //   });
  //   this.board$.next([...this.board]);
  // }
}