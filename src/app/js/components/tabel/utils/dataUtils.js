/**
 * Sortowanie danych
 * @param data
 *      dane (obiekty) do posortowania
 * @param sortedAscending
 *      czy sortować rosnąco?
 * @param column
 *      id kolumny (właściwości), po której sortować dane
 * @returns {Array}
 */
const sort = (data, sortedAscending, column) => {
    let d = Array.from(data);

    d.sort(function (a, b) {
        return sortedAscending ? a[column] > b[column] ? 1 : -1 : a[column] > b[column] ? -1 : 1;
    });

    return d;
};

/**
 * Podmianka jednej wartości w tablicy obiektów
 * @param data
 *      dane
 * @param newValue
 *      nowa wartość
 * @param rowId
 *      id wiersza (obiektu)
 * @param cellId
 *      id kolumny (właściwości)
 * @returns {Array}
 */
const switchValue = (data, newValue, rowId, cellId) => {
    let newData = Array.from(data);
    newData[rowId][cellId] = newValue;

    return newData;
};

/**
 * Filtrowanie tablicy obiektów
 * @param data
 *      dane
 * @param columnId
 *      id kolumny (właściwości) po której sortować
 * @param filterText
 *      tekst po którym filtrować
 */
const filter = (data, columnId, filterText) => {
    let searchText = filterText.toLowerCase();

    let filteredData = data.filter(function (row) {
        return row[columnId].toString().toLowerCase().indexOf(searchText) > -1;
    });

    return filteredData;
};

export { sort, switchValue, filter }