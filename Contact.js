const ContactInfo = require("./ContactInfo")

class Contact
{
    static id = 0

   constructor(name)
   {
    this.name = name
    this.contactInfo = []
    this.id = Contact.id++
   }
   updateContact(parameter, value)
   {
       switch(parameter)
       {
           case 'name': this.#updateName(value) 
           break;
           default: throw new Error ("Invalid parameter")
        }  
    }
    #updateName(value) //will not grayout cuz vscode knows its being used using this
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


    static newContact(name)
    {
        if (typeof name != 'string')
        {
            throw new Error("enter valid input")
        }
        return new Contact(name)
    }

    createContactInfo(typeOfContact,valueOfContact)
    {
        let newContactInfo = ContactInfo.newContactInfo(typeOfContact, valueOfContact)
        this.contactInfo.push(newContactInfo)
        return newContactInfo
    }

    getAllContactInfo()
    {
        return this.ContactInfo
    }

    updateContactInfo(contactInfoId, parameter, newValue)
    {
        let[foundContactInfo, indexOfFoundContactInfo] = this.getContactInfo(contactInfoId)
        if(foundContactInfo == null)
        {
            throw new Error ("ContactInfo id Not Found")
        }
        foundContactInfo.updateContactInfo(parameter, newValue)
    }

    getContactInfo(contactInfoId)
    {
        //validate
        for (let index = 0; index,this.contactInfo.length; index++)
        {
            if(contactInfoId == this.contactInfo[index].id)
            {
                return [this.ContactInfo[index], index]
            }
        }
        return [null, -1]
    }
    deleteContactInfo(contactInfoId)
    {
        let [foundContactInfo, contactInfoIndex] = this.getContactInfo(contactInfoId)
        if(contactInfoIndex == -1)
        {
            throw new Error('ContactInfoId not found')
        }
        this.ContactInfo.splice(contactInfoIndex, 1)
    }


}
module.exports = Contact