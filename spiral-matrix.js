document.addEventListener('DOMContentLoaded', () => {
    const matriz = (n) => {
        const results = [];
        for (let i = 0; i < n; i++) {
            results.push([]);
        }
        let counter = 1;
        let startColumn = 0;
        let endColumn = n - 1;
        let startRow = 0;
        let endRow = n - 1;
        while (startColumn <= endColumn && startRow <= endRow) {
            // Top row
            for (let i = startColumn; i <= endColumn; i++) {
                results[startRow][i] = counter;
                counter++;
            }
            startRow++;
            // Right column
            for (let i = startRow; i <= endRow; i++) {
                results[i][endColumn] = counter;
                counter++;
            }
            endColumn--;
            // Bottom row
            for (let i = endColumn; i >= startColumn; i--) {
                results[endRow][i] = counter;
                counter++;
            }
            endRow--;
            // start column
            for (let i = endRow; i >= startRow; i--) {
                results[i][startColumn] = counter;
                counter++;
            }
            startColumn++;
        }

        const table = document.createElement('table')

        
        
        for (let i = 0; i < n; i++) {
            const row = document.createElement('tr')
            for (let j = 0; j < n; j++) {

                const data = document.createElement('td')
                data.innerHTML = `${results[i][j]}`
                row.appendChild(data)



            }
            table.appendChild(row)

        }
        document.getElementById('container').appendChild(table)
        

        return results;
    }

    const input = prompt('please write the size of the matriz(n * n)')

    matriz(input)



})


































































