document.addEventListener('DOMContentLoaded', () => {
    const matriz = (n) => {
        // crea la matriz 
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

        const colors = {
            1: '#F8E382',
            2: '#D5E496',
            3: '#DE8274',
            4: '#8AB94B',
            5: '#4CB9EA'
        }
        
        const table = document.createElement('table')
        table.id = 'table'
        table.style.border = ' solid 0.5px'
        const container = document.getElementById('container')


        for (let i = 0; i < n; i++) {
            const row = document.createElement('tr')
            for (let j = 0; j < n; j++) {

                const data = document.createElement('td')
                data.innerHTML = `${results[i][j]}`
                data.style.textAlign = 'center'
                data.style.padding = '5px'
                data.style.backgroundColor = `${colors[Math.floor(Math.random() * Object.keys(colors).length)]}`
                
                
                row.appendChild(data)



            }
            table.appendChild(row)

        }
        
        
        // verifica si se puede crear nuevo contenido

        if(container.innerText.length === 0){
            container.appendChild(table)

        }else {
        
            let oldTable = document.getElementById('table')
            container.removeChild(oldTable)
            container.appendChild(table)
        }
    
        
        
        
     return results;
    }

   formulario = document.getElementById('form')
   
   formulario.addEventListener('submit',(e) => {
       e.preventDefault()

       let input = document.getElementById('valor').value
       
       let mat = matriz(input)
    //    console.log(input,mat)
       form.reset()
   })
    
    
    
    


})

