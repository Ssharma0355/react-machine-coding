import React, { useEffect, useState } from 'react'

function TFK({ config }) {
    const [index, setIndex] = useState(0);
    const currentLight = config[index]

    useEffect(() => {
        const Timer = setTimeout(() => {
            setIndex(prev => (prev + 1) % config.length)
        }, currentLight.duration)

        return () => {
            clearTimeout(Timer)
        }
    }, [index])


    return (
        <div>
            {config.map(light => (
                <div
                    style={
                        {
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            border: "1px solid black",
                            borderRadius: "100%",
                            backgroundColor: `${currentLight.id === light.id ? light.color : "white"}`,
                            height: "50px",
                            width: "50px",
                            padding: "3px"
                        }
                    }

                    key={light.id}>
                    <p style={{ color: "black", fontSize: "12px" }}>
                        {currentLight.id === light.id ? light.message : ""}
                    </p>
                </div>
            ))}

        </div>
    )
}

export default TFK
