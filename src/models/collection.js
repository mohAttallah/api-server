'use strict';

class Collection{
    constructor(model) {
        this.model = model;
    }
    // Read method
    async read(id,  option = {}) {
        let record = null; 
        if (id) {
            record = await this.model.findOne({ where: { id: id } });
        } else {
            record = await this.model.findAll();
        }
        return record; 
    } 
    // create new record
    async create(obj) {
        try {
                let record = await this.model.create(obj);
                return record;
            } catch (e) {
            console.log(`Erorr when creating a new Record ${this.model}, ${e}`);
            return e;
        }
    }
    //Update
       async update(id, obj) {
        try {
            if (!id) {
                throw new Error(`the id you send is not exists !!`)
            } else {
                //Check if id exisits on database 
                const record = await this.read(id);
                if (record) {
                    const updateRecord = await this.model.update(obj,{ where: { id } });
                    return updateRecord ;
                } else {
                    return `I can't found the id on database`;    
                }
                
            }
        } catch (e) {
            console.log(`Erorr when creating Deleted Record ${this.model}, ${e}`);
            return e;
        }
    }
    

    //Delete
    async delete(id) {
        try {
            if (!id) {
                throw new Error(`the id you send is not exists !!`)
            } else {
                //Check if id exisits on database 
                const deletedRecord = await this.model.destroy({ where: { id } });
                return deletedRecord;
            }
        } catch (e) {
            console.log(`Erorr when creating Deleted Record ${this.model}, ${e}`);
            return e;
        }
    }
}

module.exports = Collection;