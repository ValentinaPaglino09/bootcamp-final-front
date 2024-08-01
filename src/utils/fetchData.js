export const fetchData = async (url, method) => {
    try {
        const res = await fetch(url, {
            method: method,
            
          })
          const data = await res.json()
          return data
    } catch (error) {
        console.log(error);
    }
  
}

export const fetchDataWithToken = async (url, method) => {

    const token = localStorage.getItem('token')
    try {
        const res = await fetch(url, {
            method: method,
            headers: {
                authorization: `Bearer ${token}`
            }
          })
          const data = await res.json()
          return data
    } catch (error) {
        console.log(error);
    }
  
}

export const postData = async (url, method, body) => {
    try {
        const res = await fetch(url, {
            method: method,
            headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          })
          const data = await res.json()
          return data
    } catch (error) {
        console.log(error);
    }
}

export const postDataWithToken = async (url, method, body) => {
    const token = localStorage.getItem('token')
    try {
        const res = await fetch(url, {
            method: method,
            headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
          })
          const data = await res.json()
          return data
    } catch (error) {
        console.log(error);
    }
}