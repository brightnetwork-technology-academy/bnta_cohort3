import fetch from "node-fetch";

fetch("https://restcountries.com/v3.1/all")
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        console.log(
            // Add code for each question here
        );
    })


    /**
     * Q1
     * 
     * data.map(country => country.name.official)
     */

    /**
     * Q2
     * 
     * data.filter(country => country.landlocked)
     */

    /**
     * Q3
     * 
     * data.every(country => country.unMember)
     */

    /**
     * Q4
     * 
     * data.filter(country => {
                const currencies = country.currencies ? Object.keys(country.currencies) : [];
                return currencies.includes("EUR");
            }).length
     */

    /**
     * Q5
     * 
     * data.some(country => !country.independent)
     */

    /**
     * Q6
     * 
     * data.reduce((reducer, country) => {
                return reducer += country.population
            }, 0)
     */

    /**
     * Q7
     * 
     * data.filter(country => country.flag)
                .reduce((reducer, country) => {
                return reducer + country.flag
            }, "")
     */

    /**
     * Q8
     * 
     * data.find(country => country.name.common === "Germany").borders.length
     */

    /**
     * Q9
     * 
     * data.filter(country => country.borders)
            .filter(country => country.borders.includes("DEU"))
            .length
     */

    /**
     * Q10
     * 
     * const currencies = [];

        data.filter(country => country.currencies)
            .map(country => country.currencies)
            .forEach(currencyCollection => {
                const currencyCodes = Object.keys(currencyCollection);
                currencyCodes.forEach(code => {
                    currencies.push(currencyCollection[code].name)
                })
            })


     *
     * To generate an array of *unique* currency names add the following code:
     * 
     * const uniqueCurrencies = currencies.filter((currency, index, array) => {
            return array.indexOf(currency) === index;
        });
     */
    