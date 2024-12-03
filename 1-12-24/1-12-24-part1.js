document.getElementById('listOfData-AoC-day1-spreadsheet.csv').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        Papa.parse(file, {
            header: true,
            delimiter: ",", // Sicherstellen, dass Kommas als Trennzeichen verwendet werden


            complete: function (results) {
                const data = results.data;
                const array1 = [];
                const array2 = [];

                // Angenommen, die CSV-Datei hat zwei Spalten: 'Liste1' und 'Liste2'
                data.forEach(row => {
                    if (row.Liste1) {
                        array1.push(Number(row.Liste1));
                    }
                    if (row.Liste2) {
                        array2.push(Number(row.Liste2));
                    }
                });

                // Vergleichen der Arrays
            //     const arraysAreEqual = JSON.stringify(array1) === JSON.stringify(array2);
            //     document.getElementById('output').innerText = arraysAreEqual ? 'Die Arrays sind gleich' : 'Die Arrays sind unterschiedlich';
            },
            error: function (error) {
                console.error('Fehler beim Parsen von CSV:', error);
            }
        });
    }
});