// the front and back of a card will store
// a github-style markdown string which
// will be used to display the card.
export interface Card {
    front: string;
    back: string;

    front_raw: string[];
    back_raw: string[];
}