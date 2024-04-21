import { useState } from "react"

const useLog = () => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({name: 'Esraa'});
    };

    const logout = () => {
        setUser(null);
    }

    return {user, login, logout};
}

export default useLog;