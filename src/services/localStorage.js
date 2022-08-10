class LocalStorage {

    static set(key, value) {
        if(!key || !value) {
            console.error("please specify key or value")
        }
        const stringifyValue = JSON.stringify(value);

        localStorage.setItem(key, stringifyValue)

    }

    static get(key) {
        if(!key) {
            console.error("please specify key")
        }
        return JSON.parse(localStorage.getItem(key))
    }

}

export default LocalStorage