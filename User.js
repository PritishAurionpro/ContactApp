class User
{
    static allUsers =[]
    static id = 0
    isAdmin = false
    constructor(name, age, gender, isAdmin)
    {
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.isAdmin = isAdmin
        this.id = User.id++
    }

    static createAdmin(name, age, gender)
    {
        try {
            if(typeof name != 'string')
            {
                throw new Error("Invalid Name");
            }
            if(typeof age != 'number')
            {
                throw new Error("Invalid Age")
            }
            if(gender != 'M' && gender != 'F' && gender != 'O' )
            {
                throw new Error("invalid Gender")
            }
            return new User(name, age, gender, true)
            
        } catch (error) {
            console.log(error.message);
        }
    }

    createUser(name, age, gender)
    {
        try {
            if(typeof name != 'string')
            {
                throw new Error("Invalid Name");
            }
            if(typeof age != 'number')
            {
                throw new Error("Invalid Age")
            }
            if(gender != 'M' && gender != 'F' && gender != 'O' )
            { 
                throw new Error("Invalid Gender")
            }
            if(!this.isAdmin)
            {
                throw new Error("Only Admin has a Right to Create new users")
            }
            let newUser = new User(name, age, gender, false)
            User.allUsers.push(newUser)
            return newUser
            
        } catch (error) {
            console.log(error.message);
        }
        
    }

    getUser(id)
    {
        try {
            if(!this.isAdmin)
            {
                throw new Error("Only Admin has a Right to Create new users")
            }
            if(typeof id != 'number')
            {
                throw new Error("Invalid id");
            }
            let currentUserId = id
            for(let index = 0; index<= User.allUsers.length; index++)
            {
                if (currentUserId == User.allUsers[index].id)
                {
                    return [User.allUsers[index],index]
                }      
            }  
        } catch (error) {
            console.log(error.message);  
        }
        // return [null,-1]
      
    }

    updateUser(id, parameter, value)
    {
        try {
            if(!this.isAdmin)
            {
                throw new Error("Only Admin has a Right to Create new users")
            }
            if(typeof id != 'number')
            {
                throw new Error("Invalid id");
            }
            if(parameter != 'name' && parameter != 'age' )
            { 
                throw new Error("Invalid parameter")
            }   
        } catch (error) {
            console.log(error.message);
        }
        let [userToBeUpdated, indexOfUserToBeUpdated] = this.getUser(id)
        //User.allUsers[indexOfUserToBeUpdated].parameter = value  
        switch(parameter)
        {
            case 'name': userToBeUpdated.updateName(value)
                break;
            case 'age': userToBeUpdated.updateAge(value)
                break;
            default:
                break;
        }
    } 

    updateName(value)
    {
        try {
            if(typeof value != 'string' )
            {
                throw new Error("Invalid name")
            }
            this.name = value
        } catch (error) {
            console.log(error.message);
        }
    }
    updateAge(value)
    {
        try {
            if(typeof value != 'number' )
            {
                throw new Error("Invalid age")
            }
            this.age = value
        } catch (error) {
            console.log(error.message);
        }
    }

    deleteUser(id)
    {
        let [UserToBeDeleted, indexOfUserToBeDeleted] = this.getUser(id)
        User.allUsers.splice(indexOfUserToBeDeleted, 1)

    }
}
module.exports = User