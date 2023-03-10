import { Request, Response } from "express"
import {Audit as Entity} from '../entities/Audit'

export const createAudit = async (req:Request,res:Response) =>{
    try{
        const {method,status,type,response} = req.body
        const entity = new Entity()
        entity.method = method
        entity.status = status
        entity.type = type
        entity.response = response
        await entity.save()
        res.send({"req":req.body})
    }catch(error){
        if(error instanceof Error){
            res.status(500).json({"error":error.message})
        }
    }
}

export const getAudits = async (req:Request, res:Response)=>{
    try{
        const audits = await Entity.find()
        return res.json(audits)
    }catch(error){
        if(error instanceof Error){
            res.status(500).json({"error":error.message})
        }
    }
}


export const updateAudits = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        let audit = await Entity.findOneBy({id:id})
    
        if(!audit) return res.status(404).json({"error":"audit not found"})
    
        Entity.update({id: id},req.body)
       
        return res.sendStatus(204)

    }catch(error){
        if(error instanceof Error){
            res.status(500).json({"error":error.message})
        }
    }
}

export const getAuditId = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params

        let audit = await Entity.findOneBy({id:id})
        if(!audit) return res.status(404).json({"error":"audit not found"})

        console.log(audit)
        return res.json(audit)

    }catch(error){
        if(error instanceof Error){
            res.status(500).json({"error":error.message})
        }
    }
}

export const deleteAudits = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        let audit = await Entity.delete({id:id})
    
        if(!audit) return res.status(404).json({"error":"audit not found"})
    
        const result = await Entity.delete({id: id})
        console.log(result)

       
        if(!result.affected)
            return res.status(204).send("deleted audit")
        else
            return res.sendStatus(204)

    }catch(error){
        if(error instanceof Error){
            res.status(500).json({"error":error.message})
        }
    }
}