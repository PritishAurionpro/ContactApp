const Contact = require("./Contact")

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
        this.id = User.id++,
        this.contact = []
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

    static #getUser(id) // static cuz not depends on one obj and private to denay acess
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
        return [null,-1]
      
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
        let [userToBeUpdated, indexOfUserToBeUpdated] = this.#getUser(id)
        //User.allUsers[indexOfUserToBeUpdated].paameter = value  
        switch(parameter)
        {
            case 'name': userToBeUpdated.#updateName(value)
                break;
            case 'age': userToBeUpdated.#updateAge(value)
                break;
            default:
                break;
        }
    } 

    #updateName(value) //make private
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
    #updateAge(value) // make private
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

///////////////////////////////////////////////////////////////////////////////////////////////
    
    createContact(name)
    {
        try {
            if (this.isAdmin)
            {
                throw new Error("Admin cannot create")
            }
            if (typeof name != 'string')
            {
                throw new Error("Invalid name")
            }
            let newContact = new Contact(name)
            this.contact.push(newContact)
            return newContact
        } catch (error) {
            console.log(error.message)
        }
    }

    getAllContact()
    {
        return this.contact
    }

    getContact(contactId)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin has no access")
            }
            if(typeof id != 'number')
            {
                throw new Error("Invalid id");
            }
            let currentContactId = contactId
            for(let index = 0; index<= this.contact.length; index++)
            {
                if (currentContactId == this.contact[index].id)
                {
                    return [this.contact[index],index]
                }      
            }  
        } catch (error) {
            console.log(error.message);  
        }
        return [null,-1]
    }

    updateContact(contactId, parameter, value)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin has no access")
            }
            if(typeof contactId != 'number')
            {
                throw new Error("Invalid id");
            }
            if(parameter != 'name')
            { 
                throw new Error("Invalid parameter")
            }   
        } catch (error) {
            console.log(error.message);
        }
        let [contactToBeUpdated, indexOfContactToBeUpdated] = this.getContact(contactId) 
       
        contactToBeUpdated.updateContact(parameter, value)
    }

    deleteContact(contactId)
    {
        let [contactToBeDeleted, indexOfContactToBeDeleted] = this.getContact(contactId)
        this.contact.splice(indexOfContactToBeDeleted, 1)

    }
}
module.exports = User