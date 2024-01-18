const data1 = document.getElementById('data1')
const data2 = document.getElementById('data2')
const data3 = document.getElementById('data3')
const data4 = document.getElementById('data4')
const data5 = document.getElementById('data5')
const data6 = document.getElementById('data6')


const options = {
    method: 'GET',
    headers: {
       'X-RapidAPI-Key': '',
       'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};


let datafetch = async () => {
    const con = document.getElementById('country').value.trim()

    try {
        const response = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${con}`, options);
    
        if (!response.ok) {
            throw new Error(`Getting error: ${response}`);
        }
    
        const data = await response.json();
        data1.innerHTML = data.response[0].cases.active ?? 0
        data2.innerHTML = data.response[0].cases.new ?? 0
        data3.innerHTML = data.response[0].cases.recovered ?? 0
        data4.innerHTML = data.response[0].cases.total ?? 0
        data5.innerHTML = data.response[0].deaths.total ?? 0
        data6.innerHTML = data.response[0].tests.total ?? 0
      } catch (error) {
          alert("Danger no data find another country")
      }
}
