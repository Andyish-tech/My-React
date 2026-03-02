const authService={
    register(data){
        const{email, Username, Password}=data
        if (!email, Username, Password) return alert('all fields must be filled?');
            const users= JSON.parse(localStorage.getItem('users'));
            const exist = users?.some(u=> U.email==email);
            if(exist){
                return alert("User already exist");
            }
            const result = localStorage.setItem('users', JSON.stringify(data));
            return{data, result};
        
    }
}