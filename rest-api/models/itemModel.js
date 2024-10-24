// Opret en liste til at gemme items
let items = [];

module.exports = {
    // Funktion til at hente alle items
    getAllItems: () => items,

    // Funktion til at hente et item baseret på ID
    getItemById: id => items.find(item => item.id === id),

    // Funktion til at oprette et nyt item
    createItem: item => {
        // Tildel et nyt ID til item
        item.id = items.length + 1;
        // Tilføj item til listen
        items.push(item);
        return item;
    },

    // Funktion til at opdatere et eksisterende item baseret på ID
    updateItem: (id, updatedItem) => {
        let index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...updatedItem };
            return items[index];
        }
        return null;
    },

    // Funktion til at slette et item baseret på ID
    deleteItem: id => {
        let index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            return items.splice(index, 1);
        }
        return null;
    }
};
