import React, { Component } from 'react'

import "./Weather.css"

export default class Weather extends Component {
    
    render() {
        const {data, posts, next_weather, onSearch, onDeleteItem} = this.props;
        var reverse = posts.reverse();

        const elements = reverse.map((item) => {
            return (
                <li className="search-item" key={item.id} >
                    <p onClick={() => {
                        onSearch(item.id);
                    }}>{item.name}, {item.country}</p>
                    <span onClick={() => {
                        onDeleteItem(item.id)
                    }}>X</span>
                    
                </li>
            )
        })

        const weather = data.weather.map((item => {
            return (
                <div key={item.id}>
                    <p>{item.description}</p>
                    
                </div>
            )
        }))

        const icon = data.weather.map ((item) => {
            return(
                
                <img key={item.id}src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}></img>

            )
        })


        const weather_time = next_weather.map((item) => {
            return (
                <li key={item.id}>
                    <div className="item_body">
                        <div className="item_body-title">
                        {item.time}
                        </div>
                        <div className="item_body-body" >
                            
                            {item.temp}°C 
                        </div>
                        <div className="item_body-footer">
                            <p>Feel like {item.feels_like} </p>
                            <p>Цind speed {item.wind}</p>
                        </div>
                    </div>
                    
                      
                </li>
            )
        })

        return (
            <>
                <div className="main-content">
                    <div className="main-list">
                        <h3>Search history</h3>

                        <ul className="list-item">
                            {elements}
                        </ul>
                    </div>
                   
                    <div className="main-weather">
                    {data.name &&
                    <>
                        <div className="main-content_title">
                            <h3>{data.dt}</h3>
                            <h2>{data.name}, {data.country}</h2>
                        </div>
                        <div className="main-content_body">
                            <div className="current-temp">
                              {icon} 
                              <h3> {data.temp} °C </h3>
                            </div>
                            <div className="temp-info">
                            {weather} Feels like {data.feel} °C. {data.state}
                            </div>
                           
                        </div>
                        <div className="main-content_footer">
                            {weather_time}
                        </div>
                    </>   
                    }
                    </div>
                    
                    
                </div>
                
            </>
    )    
    }
    
 
}


