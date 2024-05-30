function solve() {
  const [input, output] = document.getElementsByTagName('textarea');
  const [generateButton, buyButton] = document.getElementsByTagName('button');
  const tableBody = document.getElementsByTagName('tbody')[0];

  generateButton.addEventListener('click', generateRow);
  buyButton.addEventListener('click', buyItems);

  function generateRow(){
    let items = JSON.parse(input.value);

    for (let i = 0; i < items.length; i++) {
      let tableRow = document.createElement('tr');

      //adding table data for image in the row
      let imageTableData = document.createElement('td');
      let image = document.createElement('img');
      image.src = items[i].img;
      imageTableData.appendChild(image);
      tableRow.appendChild(imageTableData);
      

      //add table data for name column

      let nameTableData = document.createElement('td');
      let nameParagraph = document.createElement('p');
      nameParagraph.textContent= items[i].name;
      nameTableData.appendChild(nameParagraph);
      tableRow.appendChild(nameTableData);

      //add table data for price column

      let priceTableData = document.createElement('td');
      let priceParagraph = document.createElement('p');
      priceParagraph.textContent= items[i].price;
      priceTableData.appendChild(priceParagraph);
      tableRow.appendChild(priceTableData);

      //add table data for decoration factor column

      let decorTableData = document.createElement('td');
      let decorParagraph = document.createElement('p');
      decorParagraph.textContent= items[i].decFactor;
      decorTableData.appendChild(decorParagraph);
      tableRow.appendChild(decorTableData);

      //add table data for ther checkbox column

      let markTableData = document.createElement('td');
      let markInput = document.createElement('input');
      markInput.type = 'checkbox';
      markTableData.appendChild(markInput);
      tableRow.appendChild(markTableData);


      tableBody.appendChild(tableRow);
    }
  }
  function buyItems(){
    let furniture = [];
    let price = 0;
    let averageDecFactor = 0;
    let checkItemsCount = 0;
    let tableRows = document.getElementsByTagName('tr');
    for (let i = 1; i < tableRows.length; i++) {
      let isMarkChecked = tableRows[i].children[4].children[0].checked;
      if(isMarkChecked){
        checkItemsCount += 1;
        furniture.push(tableRows[i].children[1].children[0].textContent);
        price += Number(tableRows[i].children[2].children[0].textContent);
        averageDecFactor += Number(tableRows[i].children[3].children[0].textContent);
      }

    }

    const result = `Bought furniture: ${furniture.join(', ')}
    Total price: ${price}
    Average decoration factor: ${averageDecFactor / checkItemsCount}`

    output.textContent = result;
  }
}