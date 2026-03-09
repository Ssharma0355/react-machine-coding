import React, { useState } from 'react'

const DropDowns = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const countries = [
        {
          name: "India",
          value: "IN",
          cities: ["Delhi", "Mumbai"]
        },
        {
          name: "Nepal",
          value: "NE",
          cities: ["Katmandu", "HJJD"]
        },
        {
          name: "Sri",
          value: "SR",
          cities: ["Colombo", "DDLJ"]
        }
      ];

      const handleChange=(e)=>{
        const countryValue = e.target.value

        const country = countries.find((c)=> c.value == countryValue)
        setSelectedValue(country)
        console.log(selectedValue)



      }

  return (
    <div>
        <select onChange={handleChange}>
            <option value={""}>Select Country</option>
            {countries.map((country)=>(
                <option key={country.value} value={country.value}>
                    {country.name}
                </option>
            ))}
        </select>
        {selectedValue && (
             <select >
             {selectedValue.cities.map((city, index)=>(
                 <option key={index} value={index}>
                     {city}
                 </option>
             ))}
         </select>
        )}


    </div>
  )
}

export default DropDowns
