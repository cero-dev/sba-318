const generateID = () => {
    let id = 0;
    return () => ++id;
};

// "Bat Man" 900 Bob Kane

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

    // don't understand how this works, dylan or constance
    static update(propertiesToUpdate){
        Object.assign(this, propertiesToUpdate);
    }

    static destroy(id){
        const comicIndex = Comic.#all.findIndex((comic) => comic.id === Number(id));
        if(comicIndex === -1) return false;

        Comic.#all.splice(userIndex,1);
        return true;
    }
}

module.exports = Comic;