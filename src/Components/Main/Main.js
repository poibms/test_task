import React, { Component } from 'react'
import { searchHistory, userAccount } from '../../config'
import './App.css';
import Header from '../Header/Header'
import SearchPanel from '../Search-panel/Search-panel'
import Weather from '../Weather/Weather';
import {wrongValue, urlLocal} from '../../config'ж
import { searchById, searchByName } from '../../Services/SearchServices';


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
                crntDate: "",
                time: "",
                weather: []
            },
            nextWeather: [

            ],
            posts: [

            ]
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        if(!localStorage.getItem(userAccount)) {
            window.location.assign(urlLocal + 'signin')
        }
        const posts = JSON.parse(localStorage.getItem(searchHistory))
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

    onSubmit = async(value) => {
            await searchByName(value).then((response) => {

                console.log(response);
                const dt = Date(response.data.dt);
                const crntDate = dt.slice(0,15);
                const time = dt.slice(16,24);
                const temp_arr = response.data.list
                 for (let index = 0; index < temp_arr.length; index++) {

                    if(index === 0) {
                        this.setState({
                            data: {
                                name: response.data.city.name,
                                country: response.data.city.country,
                                temp: Math.ceil(temp_arr[index].main.temp),
                                feel: Math.floor(temp_arr[index].main.feels_like),
                                crntDate: crntDate,
                                time: time,
                                weather: temp_arr[index].weather,

                            },
                        })
                    } else {
                        this.setState(({nextWeather}) => {

                                const newPost = {
                                    temp: Math.ceil(temp_arr[index].main.temp),
                                    feels_like: Math.floor(temp_arr[index].main.feels_like),
                                    wind: temp_arr[index].wind.speed,
                                    time: temp_arr[index].dt_txt.slice(11,20),
                                    id: temp_arr[index].dt,

                                }

                                if(nextWeather.length === 4){
                                    nextWeather = []
                                    const newData = [...nextWeather, newPost];
                                    return {
                                        nextWeather: newData
                                    }
                                } else {
                                    const newData = [...nextWeather, newPost];
                                    return {
                                        nextWeather: newData
                                    }
                                }

                        })

                     }
                     console.log(this.state.nextWeather)
                }

                this.setState(({posts}) => {
                    const newPost = {
                        name: response.data.city.name,
                        country: response.data.city.country,
                        id: response.data.city.id
                    }

                    const id = response.data.city.id
                    console.log(id)

                    const elem = posts.find(item => item.id === id);
                    if(elem) {
                        const index = posts.indexOf(elem);

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
                localStorage.setItem(searchHistory, JSON.stringify(this.state.posts))
            }).catch((error) => {
                alert(wrongValue)
            })
    }


     searchById = async(id) => {
        const response = await searchById(id)
        console.log(response.data)
        const dt = Date(response.data.dt);
        const crntDate = dt.slice(0,15);
        const time = dt.slice(16,24);

        const temp_arr = response.data.list

        for (let index = 0; index < temp_arr.length; index++) {
            if(index === 0) {
                this.setState({
                    data: {
                        name: response.data.city.name,
                        country: response.data.city.country,
                        temp: Math.ceil(temp_arr[index].main.temp),
                        feel: Math.floor(temp_arr[index].main.feels_like),
                        crntDate: crntDate,
                        time: time,
                        weather: temp_arr[index].weather
                    },
                })
            } else {
                this.setState(({nextWeather}) => {
                        const newPost = {
                            temp: Math.ceil(temp_arr[index].main.temp),
                            feels_like: Math.floor(temp_arr[index].main.feels_like),
                            wind: temp_arr[index].wind.speed,
                            time: temp_arr[index].dt_txt.slice(11,20),
                            id: temp_arr[index].dt
                        }
                        if(nextWeather.length === 4){
                            nextWeather = []
                            const newData = [...nextWeather, newPost];
                            return {
                                nextWeather: newData
                            }
                        } else {
                            const newData = [...nextWeather, newPost];
                            return {
                                nextWeather: newData
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

            const elem = posts.find(item=> item.id === id);
            if(elem) {
                let index = posts.indexOf(elem);
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
        localStorage.setItem(searchHistory, JSON.stringify(this.state.posts))
    }

    deleteItem = async(id) => {
        await this.setState(({posts}) => ({
            posts: posts.filter(item => item.id !== id)
        }))
        console.log(this.state.posts)
        localStorage.setItem(searchHistory,JSON.stringify(this.state.posts))
    }


    render() {
        const{data, posts, nextWeather} = this.state;
        return (
            <>
                <div className="wrapper ">
                    <div className="content">
                    <Header/>
                        <div className="search-panel">
                            <SearchPanel onSubmit={this.onSubmit}/>

                        </div>
                        <div className="main">
                            <Weather data={data} posts={posts} nextWeather={nextWeather}
                            onSearch={this.searchById} onDeleteItem={this.deleteItem}/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


