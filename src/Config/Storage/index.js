export const userAccount = 'UserAccount';
export const searchHistory = 'SearchHistory';

export const GetUserAcc = () => {
    if(localStorage.getItem(userAccount)) {
        return true
    } else {
        return false
    }
}

export const RemoveAccout = () => {
    localStorage.removeItem(userAccount);
}

export const AddSearchHistory = (value) => {
    localStorage.setItem(searchHistory, value )
}

export const GetSearchHistory = () => {
    JSON.parse(localStorage.getItem(searchHistory))
}