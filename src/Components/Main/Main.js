import React, { Component } from 'react'


import "./App.css"

import Header from '../Header/Header'
import Search_panel from '../Search-panel/Search-panel'
import Weather from '../Weather/Weather';

const axios = require("axios");
const api_key = "002d4403ca0cb44523537de5c6cdfe1a";



export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            data:{
                name: "",
                country: "",
                temp: "",
                feel: "",
                dt: "",
                time: "",
                weather: []
            },
            next_weather: [

            ],
            posts: [
          
            ]
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        
    }

    componentDidMount() {
        if(!localStorage.getItem("account")) {
            window.location.assign('http://localhost:3000/signin')
        } 
        const posts = JSON.parse(localStorage.getItem("posts"))
        if(posts) {
            this.setState({posts: posts})
        }
    }

    // getTime(value) {
    //     var mnth = value.getMonth() + 1;
    //     var dt = value.getDate();
    //     var time = value.getHourse();
        
    //     return mnth + "." + dt + "." + time;
    //  }

    onSubmit(value) {

        //не работает  api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
        //работает(текущая) api.openweathermap.org/data/2.5/weather?q=${data}&appid=${api_key}
        // 40 объектов... http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${api_key}&units=metric

        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&cnt=5&appid=${api_key}&units=metric`)
            .then((response) => {
                console.log(response);

                var dt = Date(response.data.dt);
                var a = dt.slice(0,15);
                var time = dt.slice(16,24);

                var temp_arr = response.data.list
               


                for (let index = 0; index < temp_arr.length; index++) {
                     
                    if(index === 0) {
                        this.setState({
                            data: {
                                name: response.data.city.name,
                                country: response.data.city.country,
                                temp: Math.ceil(temp_arr[index].main.temp),
                                feel: Math.floor(temp_arr[index].main.feels_like),
                                dt: a,
                                time: time,
                                weather: temp_arr[index].weather,

                            },
                        })
                     } else {
                        this.setState(({next_weather}) => {
                                
                                const newPost = {
                                    temp: Math.ceil(temp_arr[index].main.temp),
                                    feels_like: Math.floor(temp_arr[index].main.feels_like),
                                    wind: temp_arr[index].wind.speed,
                                    time: temp_arr[index].dt_txt.slice(11,20),
                                    id: temp_arr[index].dt,
                                    
                                }

                                if(next_weather.length === 4){
                                    next_weather = []
                                    const newData = [...next_weather, newPost];
                                    return {
                                        next_weather: newData
                                    }
                                } else {
                                    const newData = [...next_weather, newPost];
                                    return {
                                        next_weather: newData
                                    }
                                }
                                
                        })  

                     }  
                     console.log(this.state.next_weather)           
                } 
                
                this.setState(({posts}) => {
                    const newPost = {
                        name: response.data.city.name,
                        country: response.data.city.country,
                        id: response.data.city.id
                    }

                    var id = response.data.city.id
                    console.log(id)
                    
                    var elem = posts.find(item=> item.id === id);
                    if(elem) {
                        var index = posts.indexOf(elem);

                        posts.splice(index,1)

                        console.log(posts);
                        const newData = [...posts, newPost];
                        return {
                            posts: newData
                        }

                    } else {
                        const newData = [...posts, newPost];
                        return {
                            posts: newData
                        }
                    }
                    
                })
                localStorage.setItem("posts", JSON.stringify(this.state.posts))
                
                
            }).catch((error) => {
                alert("Wrong City");
            })
    }

    
    searchById = async(id) => {
        await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&cnt=5&appid=${api_key}&units=metric`)
        .then((response) => {
            console.log(response.data)
            var dt = Date(response.data.dt);
            var a = dt.slice(0,15);
            var time = dt.slice(16,24);

            var temp_arr = response.data.list
            
            for (let index = 0; index < temp_arr.length; index++) {
                 if(index === 0) {
                    this.setState({
                        data: {
                            name: response.data.city.name,
                            country: response.data.city.country,
                            temp: Math.ceil(temp_arr[index].main.temp),
                            feel: Math.floor(temp_arr[index].main.feels_like),
                            dt: a,
                            time: time,
                            weather: temp_arr[index].weather                         
                        },
                    })
                 } else {
                    this.setState(({next_weather}) => {
                            const newPost = {
                                temp: Math.ceil(temp_arr[index].main.temp),
                                feels_like: Math.floor(temp_arr[index].main.feels_like),
                                wind: temp_arr[index].wind.speed,
                                time: temp_arr[index].dt_txt.slice(11,20),
                                id: temp_arr[index].dt
                            }
                            if(next_weather.length === 4){
                                next_weather = []
                                const newData = [...next_weather, newPost];
                                return {
                                    next_weather: newData
                                }
                            } else {
                                const newData = [...next_weather, newPost];
                                return {
                                    next_weather: newData
                                }
                            }
                    })                       
                 }             
            } 
            
            this.setState(({posts}) => {
                const newPost = {
                    name: response.data.city.name,
                    country: response.data.city.country,
                    id: response.data.city.id
                }

                
                var elem = posts.find(item=> item.id === id);
                if(elem) {
                    var index = posts.indexOf(elem);

                    posts.splice(index,1)

                    console.log(posts);
                    const newData = [...posts, newPost];
                    return {
                        posts: newData
                    }

                } else {
                    const newData = [...posts, newPost];
                    return {
                        posts: newData
                    }
                }
                
            })
            localStorage.setItem("posts", JSON.stringify(this.state.posts))
        })
    }

    deleteItem = async(id) => {
       await this.setState(({posts}) => ({
            posts: posts.filter(item => item.id != id)
        }))
        console.log(this.state.posts)
        localStorage.setItem("posts",JSON.stringify(this.state.posts))
    }




    render() {

        const{data, posts, next_weather} = this.state;
        
        
        return (
            <> 
                <div className="wrapper ">
                    <div className="content">
                    <Header/>
                        <div className="search-panel">
                            <Search_panel onSubmit={this.onSubmit}/>
                            
                        </div>
                        <div className="main">
                            <Weather data={data} posts={posts} next_weather={next_weather} 
                            onSearch={this.searchById} onDeleteItem={this.deleteItem}/>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}


