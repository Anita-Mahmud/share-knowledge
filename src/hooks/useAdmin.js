import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (email) {
            fetch(`https://share-knowledge-server.vercel.ap/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                 
                })
        }
    }, [email])
    return [isAdmin]
}

export default useAdmin;