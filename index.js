const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const ProposalModel = require("./models/ProposalLogin");

const ProposalFormModel = require("./models/ProposalForm");


const app = express();
app.use(express.json());
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/proposals");

app.post('/login',(req,res) => {
    const {name,password} = req.body;
    ProposalModel.findOne({name: name})
    .then(user => {
        if(user)
        {
            if(user.password === password)
            {
                res.json("Success")
            }
            else
            {
                res.json("Password Is Incorrect")
            }
        }
        else 
        {
            res.json("No records Found")
        }
    })
})

app.post('/users', (request, response)=>{
    ProposalModel.create(request.body)
    .then(proposal => {response.json(proposal);})
    .catch(err => response.json(err))
})



app.post('/allproposals', (request, response)=>{
    ProposalFormModel.create(request.body)
    .then(proposal => {console.log(proposal);response.json(proposal);})
    .catch(err => response.json(err))
})



app.get('/proposalview', (request, response)=>{
    console.log("comming inside of proposal")
    ProposalFormModel.find()
    .then(proposal => {response.json(proposal);})
    .catch(err => response.json(err))
})


app.get('/proposalview/:oneproposal' , (request, response) => {
    const oneProposalID = request.params.oneproposal;
    ProposalFormModel.findById(oneProposalID)
    .then(proposal=>response.json(proposal))
    .catch(err=>response.json(err))
})


app.put('/proposalview/:oneproposal', async (req, res) => {
    const oneProposal = req.params.oneproposal;
    const id = oneProposal;
    const newData = req.body;


    try {
        const updatedDocument = await ProposalFormModel.findByIdAndUpdate(id, newData, { new: true });
        res.json(updatedDocument);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.put('/hodproposalview/:oneproposal', async (req, res) => {
    console.log("Comming inside of submission")
    const oneProposal = req.params.oneproposal;
    const id = oneProposal;
    console.log(id)
    const newData = req.body;

    try {
        const updatedDocument = await ProposalFormModel.findByIdAndUpdate(id, newData, { new: true });
        res.json(updatedDocument);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




app.post('/updateProposal', async (request, response)=>{
    try {
        const { _id, outcome, summary } = request.body;

        // Update the document with the provided fields
        const updatedProposal = await ProposalFormModel.findByIdAndUpdate(_id, {
            $set: { ...request.body }
        }, { new: true });

        // console.log(updatedProposal);
        response.json(updatedProposal);
    } catch (error) {
        console.error('Error occurred:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
})






app.listen(3001, ()=>{  
    console.log("server is running");
})