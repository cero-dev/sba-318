const generateID = (
    (id = 0) =>
    () =>
      (id += 1)
  )();

class Comic {
    static #all = [];

    constructor(seriesName, amountOfIssues, creator){
        this.seriesName = seriesName;
        this.amountOfIssues = amountOfIssues
        this.creator = creator;
        this.id = generateID();

        Comic.#all.push(this);
    }

    static create(seriesName, amountOfIssues, creator){
        return new Comic(seriesName, amountOfIssues, creator);
    }

    static list(){
        return Comic.#all;
    }

    static find(id){
        return Comic.#all.find((comic) => comic.id === Number(id) || null);
    }

    static update(id, seriesName, amountOfIssues, creator){
        const comic = this.find(id);
        if(!comic){
            return null
        }

        comic.seriesName = seriesName;
        comic.amountOfIssues = amountOfIssues;
        comic.creator = creator;
        
        return comic;
    }

    static destroy(id){
        const comicIndex = Comic.#all.findIndex((comic) => comic.id === Number(id));
        if(comicIndex === -1) return false;

        Comic.#all.splice(comicIndex,1);
        return true;
    }
}

module.exports = Comic;