// Add event listener to the button
document.getElementById('detectButton').addEventListener('click', getData);


function getData() {
    // Get the values from the input fields input type is date (id: dateInput)
    const date = document.getElementById('dateInput').value;
    console.log(date);
    const year = date.substring(0, 4);
    console.log(year);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const hour = '23'; // Assuming you always want hour 11 and minute 30
    const minute = '30';
  
    const url = `./scripts/data.json`
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const filteredData = data.filter(item => (
          item.Year == year &&
          item.Month == month &&
          item.Day == day &&
          item.Hour == hour &&
          item.Minute == minute
        ));
        console.log('Filter Criteria:', year, month, day, hour, minute);
        console.log('Filtered Data:', filteredData);

        if (filteredData.length > 0) {
          const { "Clearsky DHI": dhi, "Clearsky DNI": dni, "Clearsky GHI": ghi } = filteredData[0];
          displayResult({ dhi, dni, ghi });
        } else {
          displayResult('No data found for the specified criteria.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        displayResult('Error fetching data. Please try again.');
      });
  }
  
  function displayResult(result) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    if (typeof result === 'object') {
      const ul = document.createElement('ul');
      Object.entries(result).forEach(([key, value]) => {
        const li = document.createElement('li');
        li.textContent = `${key}: ${value}`;
        ul.appendChild(li);
      });
      outputDiv.appendChild(ul);
    } else {
      const p = document.createElement('p');
      p.textContent = result;
      outputDiv.appendChild(p);
    }
  }
  