class ContactInfo
{
    static id = 0
    constructor(typeOfContact, valueOfContact)
    {
        this.typeOfContact = typeOfContact
        this.valueOfContact = valueOfContact
        this.id = ContactInfo.id++
    }
    
    static newContactInfo(typeOfContact, valueOfContact)
    {
        if(typeof typeOfContact != 'string')
        {
            throw new Error('enter  valid input')
        }
        if(typeof valueOfContact != 'number' && typeof valueOfContact != 'string')
        {
            throw new Error('Enter valid Input')
        }
        return new ContactInfo(typeOfContact, valueOfContact)
    }
    updateTypeOfContactInfo(Value) 
    {
         if(typeof value != 'string' )
         {
             throw new Error("Invalid value")
         }
         this.typeOfContact = Value
    }

    updateValueOfContactInfo(Value) 
    {
        if(typeof value != 'string' )
        {
            throw new Error("Invalid value")
        }
         this.typeOfContact =Value
    }

    updateContactinfobyid(parameter, value){
        if(typeof parameter != 'string' )
        {
            throw new Error("Invalid value")
        }
        switch(parameter)
        {
            case 'typeofcontactinfo':
               this.updateTypeofContactInfo(value)
                break
            case 'valueofcontactinfo':
                this.updateValueofContactInfo(value)
                break
            default:
                throw new Error('No such parameter')
        }
    }
}

module.exports = ContactInfo