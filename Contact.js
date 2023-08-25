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
}
module.exports = Contact